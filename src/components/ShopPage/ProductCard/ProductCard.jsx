/* eslint-disable react/prop-types */
import styles from './productCard.module.css';

const ProductCard = ({product, handleClick}) => {
    //Shorten the title if it is too long
    const maxLength = 40;
    let newTitle;
    if (product.title.length > maxLength)
        newTitle = product.title.slice(0, maxLength-1) + '...'
    else
        newTitle = product.title
    //

    return(
        <div className={styles.productCardDiv} key={product.id} onClick={handleClick}>
            <div className={styles.productTitle}>{newTitle}</div>
            <div className={styles.imageDiv}><img src={product.image} className={styles.image} alt='picture of product' /></div>
            <div className={styles.price}>${product.price}</div>
        </div>
    )
}

export default ProductCard;