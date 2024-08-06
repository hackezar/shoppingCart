import { Link } from "react-router-dom";
import styles from "./Navbar.module.css";

const Navbar = () => {


    return (
        <div className={styles.navbar}>
            <div className={styles.links}>
                <Link to="/" className={styles.link} >Home</Link>
                <Link to="/shop" className={styles.link} >Shop</Link>
            </div>
            <div className={styles.cartDiv}>
            <span className={`material-symbols-outlined`}>shopping_cart</span>
            </div>
        </div>
    )
}

export default Navbar