import { Link } from "react-router-dom";

import styles from './Homepage.module.css'

import DisplayPic from '../../assets/abstractDisplay.webp'

const Homepage = () => {
    return (
        <div className={styles.homePageDiv}>
            <div className={styles.homePageHeader}>
                <h6 className={styles.title}>Welcome to the Rearden Digital Shop</h6>
            </div>

            <div className={styles.section2}>
                <div className={styles.monologue}>
                    <div>
                        This website is a mock online shop...
                    </div>
                    <div>
                        Therefore you can not actually buy anything
                    </div>
                </div>
                <div className={styles.displayDiv}>
                    <img src={DisplayPic} className={styles.displayPic}alt="abstract display" />
                </div>
                <div className={styles.btnDiv}>
                    <Link to="/shop"><button type="button" className={`${styles.shopBtn} color2`}>Start Shopping</button></Link>
                </div>
            </div>
            <div className={styles.quote}>
            {"Investing in a high-quality web development service is essential for any business looking to thrive in today's digital age. A website is often the first point of contact between your brand and potential customers, and first impressions matter. A professionally developed site does more than just look good."}
            </div>
        </div>

    )
}

export default Homepage;