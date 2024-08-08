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
    const [cartCount, setCartCount] = useOutletContext();
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

    const addToCart = () => {
        setCartCount(cartCount => cartCount + 1);
        console.log('btn Clicked');
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
                <ExpandedProductCard product={expanded[0]} handleClick={() => minimizeProduct()} addToCart={() => addToCart()}/>
            </>
            }
        </div>

    )
}

export default ShopPage