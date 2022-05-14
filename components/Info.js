import styles from "../styles/Info.module.css";
import Image from "next/image"
import img_1 from "../public/img_8.jpg";
import img_2 from "../public/img_9.png";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUserAlt } from '@fortawesome/free-solid-svg-icons'
import { faArchive } from '@fortawesome/free-solid-svg-icons'
import { faPaintBrush } from '@fortawesome/free-solid-svg-icons'
import { faWallet } from '@fortawesome/free-solid-svg-icons'



const Info = () => {

    return (
        <div>
            <div className={styles.container_1}>
                <div className={styles.container_1_sub_1}>
                    <h1 className={styles.container_1_sub_1_head}>Sapien ipsum scelerisque convallis fusce</h1>
                    <p className={styles.container_1_sub_1_para}>Ut amet vulputate faucibus vitae semper eget
                        auctor. Diam tempor pulvinar ultricies dolor feugiat aliquam commodo.
                    </p>
                    <div className={styles.container_1_sub_1_btn_container}>
                        <button className={styles.container_1_sub_1_btn_1}>Get Started</button>
                        <button className={styles.container_1_sub_1_btn_2}>Learn More</button>
                    </div>
                </div>
                <div data-aos="flip-right" className={styles.container_1_sub_2}>
                    <Image width={1080} height={1000} className={styles.container_1_sub_2_img} src={img_1} alt="" />
                </div>
            </div>

            <div className={styles.container_2}>
                <div data-aos="flip-right" className={styles.container_2_sub_1}>
                    <Image className={styles.container_2_sub_1_img} src={img_2} alt="" />
                </div>
                <div className={styles.container_2_sub_2}>
                    <h1 className={styles.container_2_sub_2_head}>Habitant tristique aliquam in vel scelerisque</h1>
                    <p className={styles.container_2_sub_2_para}>Ut amet vulputate faucibus vitae semper
                        eget auctor. Diam tempor pulvinar ultricies dolor feugiat aliquam commodo.
                    </p>

                    <div className={styles.container_2_sub_1_btn_container}>
                        <button className={styles.container_2_sub_1_btn_1}>Get Started</button>
                        <button className={styles.container_2_sub_1_btn_2}>Learn More</button>
                    </div>
                </div>

            </div>
            <hr/>
            <div className={styles.container_3}>
                <div className={styles.container_3_sub}>
                    <FontAwesomeIcon className={styles.container_3_icon_1} icon={faUserAlt} />
                    <h1 className={styles.container_3_sub_head}>300k</h1>
                    <p className={styles.container_3_sub_para}>Users Active</p>
                </div>
                <div className={styles.container_3_sub}>
                    <FontAwesomeIcon className={styles.container_3_icon_1} icon={faArchive} />
                    <h1 className={styles.container_3_sub_head}>52,5k</h1>
                    <p className={styles.container_3_sub_para}>Art Works</p>
                </div>
                <div className={styles.container_3_sub}>
                    <FontAwesomeIcon className={styles.container_3_icon_1} icon={faPaintBrush} />
                    <h1 className={styles.container_3_sub_head}>17,5k</h1>
                    <p className={styles.container_3_sub_para}>Artists</p>
                </div>
                <div className={styles.container_3_sub}>
                    <FontAwesomeIcon className={styles.container_3_icon_1} icon={faWallet} />
                    <h1 className={styles.container_3_sub_head}>38.58</h1>
                    <p className={styles.container_3_sub_para}>ETH spent</p>
                </div>
            </div>
        </div>
    );
}

export default Info;