/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-key */
import ProductCard from '../ProductCard/ProductCard';
import ExpandedProductCard from '../ExpandedProductCard/ExpandedProductCard';
import {fetchAllProducts} from './functions'
import { useEffect, useState } from 'react';
import { useOutletContext } from 'react-router-dom';
import styles from "./ShopPage.module.css"
import '../../index.css'

const ShopPage = () => {
    const [products, setProducts] = useState();
    const [productHeading, setProductHeading] = useState('All Products');
    const [expanded, setExpanded] = useState(false)
    const [cartCount, setCartCount, cartContent, setCartContent] = useOutletContext();

    console.log(cartContent);
    // Fetch all available products on initial render
    useEffect(() => {
        async function fetch() {
            const products = await fetchAllProducts()
            setProducts(products)
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
        setCartCount(cartCount => cartCount + 1);
        // Check if the cart already has the added product
        const filteredCart = cartContent.filter((item) => item.id === product.id)
        // Add item to cart if it has not yet been added to cart
        if (filteredCart.length === 0) {
            product.quantity = 1;
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

    return (
        <div className={`${styles.shopPageDiv} color1`}>
            {!expanded ? 
            <>
                <div className={styles.productHeading}>{productHeading}</div>
                <div className={styles.productsDiv}>
                    {products && products.map((product) => <ProductCard product={product} handleClick={() => expandProduct(product.id)}/>)}
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