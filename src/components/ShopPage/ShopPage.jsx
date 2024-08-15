/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-key */
import ProductCard from './ProductCard/ProductCard';
import ExpandedProductCard from '../ExpandedProductCard/ExpandedProductCard';
import CategoriesDropdown from './CategoriesDropdown/CategoriesDropdown';
import {fetchAllProducts, fetchProductCategory} from './functions'
import { useEffect, useState } from 'react';
import { useOutletContext } from 'react-router-dom';
import styles from "./ShopPage.module.css"
import '../../index.css'

//Used for development without internet connection
//import { mockData } from './functions';

const ShopPage = () => {
    const [products, setProducts] = useState();
    const [productHeading, setProductHeading] = useState('All Products');
    const [expanded, setExpanded] = useState(false);
    const [searchResults, setSearchResults] = useState();
    const [setCartCount, cartContent, setCartContent] = useOutletContext();

    // Fetch all available products on initial render
    useEffect(() => {
        async function fetch() {
            const products = await fetchAllProducts()
            setProducts(products);
            setSearchResults(products);
        }
        fetch()
    }, [])

    const expandProduct = (id) => {
        const expandedProduct = products.filter((product) => product.id === id)
        setExpanded(expandedProduct);
    }

    const minimizeProduct = () => {
        setExpanded(false);
    }

    const addToCart = (product) => {
        // Check if the cart already has the added product
        const filteredCart = cartContent.filter((item) => item.id === product.id)
        // Add item to cart if it has not yet been added to cart
        if (filteredCart.length === 0) {
            product.quantity = 1;
            setCartCount(cartCount => cartCount + 1);
            setCartContent([...cartContent, product]);
        // otherwise update the quantity of the item by one
        } else {
            const newCart = cartContent.map((item) => {
                if (item.quantity) {
                    item.quantity++;
                    return item
                } else
                    return item;
            })
            setCartContent(newCart)
        }
    }

    const filter = async (event) => {
        console.log('fired')
        const filterBy = event.target.value;
        switch (filterBy) {
            case 'all': {
                const products = await fetchAllProducts();
                setProducts(products);
                setSearchResults(products);
                setProductHeading('All Products')
                break;
            }
            case 'electronics': {
                const products = await fetchProductCategory('electronics')
                setProducts(products);
                setSearchResults(products);
                setProductHeading('Electronics')
                break;
            }
            case 'jewelery': {
                const products = await fetchProductCategory('jewelery')
                setProducts(products);
                setSearchResults(products);
                setProductHeading('Jewelery')
                break;
            }
            case "men's clothing": {
                const products = await fetchProductCategory("men's clothing");
                setProducts(products);
                setSearchResults(products);
                setProductHeading("Men's Clothing")
                break;
            }
            case "women's clothing": {
                const products = await fetchProductCategory("women's clothing");
                setProducts(products);
                setSearchResults(products);
                setProductHeading("Women's Clothing")
                break;
            }
        }
    }

    const handleSearch = (event) => {
        console.log('fired')
        // Dont filter if the search bar is empty
        if (event.target.value === ""){
            setSearchResults(products);
        // Otherwise filter the products if the substring from search bar is in the title
        }else {
            const filteredProducts = products.filter((product) => product.title.toLowerCase().includes(event.target.value.toLowerCase()));
            setSearchResults(filteredProducts);
        }
    }

    return (
        <div className={`${styles.shopPageDiv} color1`}>
            {!expanded ? 
            <>
                <div className={styles.productHeading}>
                    <div className={styles.dropdown}><CategoriesDropdown handleChange={(event) => filter(event)}/></div>
                    <h6>{productHeading}</h6>
                    <div className={styles.searchbar}>
                        <div className={styles.searchbarTitle}>Search</div>
                        <input className={styles.searchBar} type="text" onChange={(event) => handleSearch(event)}></input>
                    </div>
                </div>
                <div className={styles.productsDiv}>
                    {products ? searchResults.map((product) => <ProductCard product={product} handleClick={() => expandProduct(product.id)} key={product.id}/>)
                    : <>Loading...</>}
                </div>
            </>
            :
            <>
                <ExpandedProductCard product={expanded[0]} handleClick={() => minimizeProduct()} addToCart={() => addToCart(expanded[0])}/>
            </>
            }
        </div>
    )
}

export default ShopPage