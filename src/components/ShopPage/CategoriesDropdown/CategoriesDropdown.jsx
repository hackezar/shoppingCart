/* eslint-disable react/prop-types */
import styles from './CategoriesDropdown.module.css';

const CategoriesDropdown = ({handleChange}) => {
    return (
        <div className={styles.dropdownDiv}>
            <div>Filter</div>
            <select className={styles.dropdown} onChange={handleChange} >
                <option value="all">None</option>
                <option value="electronics">Electronics</option>
                <option value="jewelery">Jewelry</option>
                <option value="men's clothing">Mens Clothing</option>
                <option value="women's clothing">Womens Clothing</option>
            </select>
        </div>
    )
}

export default CategoriesDropdown