import styles from "./Footer.module.css"

const Footer = () => {
    return (
        <div className={`${styles.footer} color2`}>
            <div className={styles.contact}><a href="mailto:jackhalcisak@outlook.com">Contact</a></div>
            <div>Rearden Digital Co.</div>
            <div><a href="https://hackezar.github.io/homepage/" target="_blank">Website</a></div>
        </div>
    )
}

export default Footer