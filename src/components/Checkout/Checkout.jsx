/* eslint-disable react/prop-types */
import { useOutletContext } from 'react-router-dom';
import styles from './Checkout.module.css';

const Checkout = ({handleClose, cartContent, updateItemQuantity, deleteCartContent, submitCheckout, loading}) => {
    console.log(cartContent);
    const calcTotalCost = (cartContent) => {
        let totalCost = 0.0;
        cartContent.forEach(item => {
            const itemPrice = item.price;
            const itemQuant = item.quantity;
            totalCost = totalCost + (itemPrice*itemQuant)
        });
        return totalCost.toFixed(2);
    }
    return (
        <div className={styles.checkout}>
            <div className={styles.header}>
                <p>Cart</p>
                <span className={`material-symbols-outlined ${styles.closeIcon}`} onClick={handleClose}>close</span>
            </div>

            <div className={styles.productsDiv}>
                {loading ? <>Loading...</> : cartContent.map((product) => 
                    <div className={styles.product} key={product.id}>
                        <div className={styles.productTitle}>
                            {product.title}
                        </div>
                        <div className={styles.productPrice}>
                            ${product.price}
                        </div>
                        <input className={styles.quantity} type='number' value={product.quantity} onChange={(event) => updateItemQuantity(event.target.value, product.id)}
                        min="1" max="10" />
                        <span className={`material-symbols-outlined ${styles.delete}`} onClick={() => deleteCartContent(product)}>delete</span>
                    </div>
                )}
            </div>
            <div className={styles.totalDiv}>
                Total: ${calcTotalCost(cartContent)}
                <button type="button" onClick={submitCheckout}>Checkout</button>
            </div>
        </div>
    )
}

export default Checkout
