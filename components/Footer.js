import styles from "../styles/Footer.module.css"
// import { FontAwesomeIcon } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { FontAwesomeIcon } from "@fortawesome/fontawesome-svg-core";
// import { FontAwesomeIcon } from "@fortawesome/free-solid-svg-icons";
import { faFacebook } from '@fortawesome/free-brands-svg-icons'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { faTwitter } from '@fortawesome/free-brands-svg-icons'
import { faInstagram } from '@fortawesome/free-brands-svg-icons'
import { faLinkedin } from '@fortawesome/free-brands-svg-icons'



const Footer = () => {
    return (
        <div>
            <hr/>
            <div className={styles.container_1}>
                <div className={styles.container_1_sub_1}>
                    <h1 className={styles.container_1_sub_1_logo}>NFT Market</h1>
                    <div className={styles.container}>
                        <div className={styles.item_1}></div>
                        <div className={styles.item_2}></div>
                        <div className={styles.item_3}></div>
                        <div className={styles.item_4} ></div>
                    </div>
                    <ul className={styles.container_1_sub_1_ul}>
                        <li>support</li>
                        <li>Terms & Service</li>
                        <li>License</li>
                    </ul>
                </div>
                <div className={styles.container_1_sub_2}>
                    <ul className={styles.container_1_sub_2_ul}>
                        <li>Auctions</li>
                        <li>RoadMaps</li>
                        <li>Discover</li>
                        <li>Community</li>
                        <button className={styles.container_1_sub_2_ul_btn}>My Account</button>
                    </ul>

                    {/* Logo */}

                    <ul className={styles.container_1_sub_2_ul_2}>
                        <li><FontAwesomeIcon className={styles.container_1_icon_1} icon={faFacebook} /></li>
                        <li><FontAwesomeIcon className={styles.container_1_icon_2} icon={faGithub} /></li>
                        <li><FontAwesomeIcon className={styles.container_1_icon_3} icon={faLinkedin} /></li>
                        <li><FontAwesomeIcon className={styles.container_1_icon_4} icon={faInstagram} /></li>
                        <li><FontAwesomeIcon className={styles.container_1_icon_5} icon={faTwitter} /></li>
                    </ul>
                </div>
                <div className={styles.container_1_sub_3}>
                    <p className={styles.container_1_sub_3_para}>Nibh volutpat, aliquam id sagittis elementum. Pellentesque laoreet 
                    velit, sed egestas in. Id nam semper dolor tellus vulputate eget turpis. </p>
                    <input placeholder="NewsLettar" className={styles.container_1_sub_3_input}  />
                    <button className={styles.container_1_sub_3_btn}>Sign IN</button>
                </div>
            </div>
            <p  className={styles.lastName}>copyright &#169; Mohtasheem Ejaz</p>
        </div>
    );
}

export default Footer;