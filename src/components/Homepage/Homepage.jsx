import { Link } from "react-router-dom";

import Logo from "../../assets/Rearden Digital Logo AI.webp"
import styles from './Homepage.module.css'

import StorePic from '../../assets/futureStore.webp'
import DisplayPic from '../../assets/abstractDisplay.webp'

const Homepage = () => {
    return (
        <div className={styles.homePageDiv}>
            <div className={styles.homePageHeader}>
                <div>Welcome to the Rearden Digital Shop</div>
                <img src={Logo} className={styles.reardenLogo} alt="Logo"/>
            </div>
            <div>
                <img src={StorePic} className={styles.storePic}alt="A futuristic Store"/>
            </div>
            <div className={styles.quote}>
                {"Beyond the shelves and the products, a store is where dreams are curated, and possibilities meet the hands of those who seek them."}
            </div>
            <div className={styles.section2}>
                <div className={styles.displayDiv}>
                    <img src={DisplayPic} className={styles.displayPic}alt="abstract display" />
                    <div className={styles.displayText}>See What our store has to offer</div>
                </div>
                <div className={styles.btnDiv}>
                    <Link to="/shop"><button type="button" className={styles.shopBtn}>Shop</button></Link>
                </div>
            </div>
            <div className={styles.plug}>
            {"Investing in a high-quality web development service is essential for any business looking to thrive in today's digital age. A website is often the first point of contact between your brand and potential customers, and first impressions matter. A professionally developed site does more than just look good; it functions seamlessly, loads quickly, and is optimized for both user experience and search engines. It tells your story in a way that resonates with your audience, guiding them effortlessly from curiosity to conversion. By choosing a top-tier web development service, you're not just creating a website—you're building a digital foundation that supports your business goals, enhances your brand credibility, and drives sustainable growth in an increasingly competitive online environment."}
            </div>
        </div>

    )
}

export default Homepage;