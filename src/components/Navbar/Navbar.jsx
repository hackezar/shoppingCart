/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import styles from "./Navbar.module.css";
import Logo from "../../assets/Rearden Digital Logo AI.webp"


const Navbar = ({cartCount}) => {
    return (
        <div className={`${styles.navbar} color2`}>
            <div className={styles.links}>
                <img src={Logo} className={styles.logo}/>
                <Link to="/" className={styles.link} >Home</Link>
                <Link to="/shop" className={styles.link} name="shopLink" >Shop</Link>
            </div>
            <div className={styles.cartDiv}>
                <span className={`material-symbols-outlined ${styles.cart}`}>shopping_cart</span>
                <div className={styles.cartCount}>{cartCount}</div>
            </div>
        </div>
    )
}

export default Navbar