import styles from "../styles/Navbar.module.css";


const Navbar = () => {

    return (
        <div>
            <div className={styles.nav_container}>
                <ul className={styles.nav_container_ul}>
                    <h1 className={styles.nav_container_logo}>NFT Market</h1>
                    <li className={styles.btn_4}>Auction</li>
                    <li className={styles.btn_4} >Discover</li>
                    <li className={styles.btn_4}>Comunity</li>
                    <a className={styles.nav_container_btn_1} href="#">Contact</a>
                    <a className={styles.nav_container_btn_2} href="#">My Account</a>
                </ul>
                <div className={styles.container}>
                    <div className={styles.item_1}></div>
                    <div className={styles.item_2}></div>
                    <div className={styles.item_3}></div>
                    <div className={styles.item_4} ></div>
                </div>
            </div>

        </div>
    );
}

export default Navbar;