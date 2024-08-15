/* eslint-disable react/prop-types */
import styles from './ExpandedProductCard.module.css';

const ExpandedProductCard = ({product, handleClick, addToCart}) => {

    return(
        <div className={styles.productCardDiv} key={product.id}>
            <span className={`material-symbols-outlined ${styles.closeIcon}`} onClick={handleClick}>close</span>
            <h6 className={styles.productTitle}>{product.title}</h6>
            <div className={styles.imageDiv}><img src={product.image} className={styles.image} alt='picture of product' /></div>
            <div className={styles.description}>
                <div className={styles.descriptionTitle}>
                    Description:
                </div>
                <div>
                    {product.description}                    
                </div>
            </div>
            <div className={styles.priceAndReviewsDiv}>
                <div className={styles.price}>${product.price}</div>
                <div className={styles.reviewsDiv}>
                    <div className={styles.rating}>
                        Rating: {product.rating.rate} / 5
                    </div>
                    <div className={styles.reviews}>
                        {product.rating.count} reviews
                    </div>
                </div>
            </div>
            <div className={styles.buttonsDiv}>
                <button type="button" className={styles.addCartBtn} onClick={addToCart}>Add to Cart</button>
            </div>
        </div>
    )
}

export default ExpandedProductCard;