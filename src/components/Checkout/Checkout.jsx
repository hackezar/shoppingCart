/* eslint-disable react/prop-types */
import { useOutletContext } from 'react-router-dom';
import styles from './Checkout.module.css';

const Checkout = ({handleClose, cartContent}) => {
    console.log(cartContent);
    return (
        <div className={styles.checkout}>
            <span className={`material-symbols-outlined ${styles.closeIcon}`} onClick={handleClose}>close</span>
            <p>Cart</p>
            {cartContent.map((product) => product.title)};
        </div>
    )
}

export default Checkout