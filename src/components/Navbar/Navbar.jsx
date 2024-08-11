/* eslint-disable react/prop-types */
import { useState } from "react";
import { Link } from "react-router-dom";
import styles from "./Navbar.module.css";
import Logo from "../../assets/Rearden Digital Logo AI.webp"
import Checkout from "../Checkout/Checkout";

const Navbar = ({cartCount, cartContent, updateItemQuantity}) => {
    const [checkoutActive, setCheckoutActive] = useState(false)

    const toggleCheckout = () => {
        setCheckoutActive(!checkoutActive)
    }

    console.log(checkoutActive);
    return (
        <div className={`${styles.navbar} color2`}>
            <div className={styles.links}>
                <img src={Logo} className={styles.logo}/>
                <Link to="/" className={styles.link} >Home</Link>
                <Link to="/shop" className={styles.link} name="shopLink" >Shop</Link>
            </div>
            <div className={styles.cartDiv}>
                <span className={`material-symbols-outlined ${styles.cart}`} onClick={() => toggleCheckout()}>shopping_cart</span>
                <div className={styles.cartCount}>{cartCount}</div>
            </div>
            {checkoutActive && <Checkout handleClose={() => toggleCheckout()} cartContent={cartContent} updateItemQuantity={updateItemQuantity}/>}
        </div>
    )
}

export default Navbar