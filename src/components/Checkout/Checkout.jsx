/* eslint-disable react/prop-types */
import { useOutletContext } from 'react-router-dom';
import styles from './Checkout.module.css';

const Checkout = ({handleClose, cartContent, updateItemQuantity}) => {
    console.log(cartContent);
    
    return (
        <div className={styles.checkout}>
            <span className={`material-symbols-outlined ${styles.closeIcon}`} onClick={handleClose}>close</span>
            <p>Cart</p>
            {cartContent.map((product) => 
                <div className={styles.product} key={product.id}>
                    <div className={styles.productTitle}>
                        {product.title}
                    </div>
                    <div className={styles.productPrice}>
                        {product.price}
                    </div>
                    <input className={styles.quantity} type='number' defaultValue={product.quantity} onChange={(event) => updateItemQuantity(event.target.value, product.id)}
                    min="1" max="10" />
                </div>
            )}
        </div>
    )
}

export default Checkout