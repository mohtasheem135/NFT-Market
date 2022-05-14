import styles from "../styles/Body.module.css";
import AnimatedText from 'react-animated-text-content';
import Image from "next/image"
import img_1 from "../public/img_1.jpg";
import img_2 from "../public/img_5.png";
import img_3 from "../public/img_6.png";
import img_4 from "../public/img_7.png";
import img_5 from "../public/img_10.jpg";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const Body = () => {

    const responsive = {
        superLargeDesktop: {
            // the naming can be any, depends on you.
            breakpoint: { max: 4000, min: 3000 },
            items: 5
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 4
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1
        }
    };

    return (
        <div>
            <div className={styles.container_1}>
                {/* <p className={styles.container_1_para_1}>Non Fungible Tokens</p> */}
                {/* <Image height={2100} src={img_5} className={styles.bg} /> */}
                <Image height={1850} src={img_5} className={styles.bg} />
                <AnimatedText
                    type="chars" // animate words or chars
                    animation={{
                        x: '200px',
                        y: '-20px',
                        scale: 1.1,
                        ease: 'ease-in-out',
                    }}
                    animationType="rifle"
                    interval={0.16}
                    duration={0.7}
                    tag="p"
                    className={styles.container_1_para_1}
                    includeWhiteSpaces
                    threshold={0.1}
                    rootMargin="20%"
                >
                    Non Fungible Tokens
                </AnimatedText>;

                <AnimatedText
                    type="chars" // animate words or chars
                    animation={{
                        x: '200px',
                        y: '-20px',
                        scale: 1.1,
                        ease: 'linear',
                    }}
                    animationType="throw"
                    interval={0.46}
                    duration={1.3}
                    tag="h1"
                    className={styles.container_1_head_1}
                    includeWhiteSpaces
                    threshold={0.1}
                    rootMargin="20%"
                >A new NFT</AnimatedText>;

                <AnimatedText
                    type="chars" // animate words or chars
                    animation={{
                        x: '200px',
                        y: '-20px',
                        scale: 1.1,
                        ease: 'linear',
                    }}
                    animationType="throw"
                    interval={0.46}
                    duration={1.3}
                    tag="h1"
                    className={styles.container_1_head_2}
                    includeWhiteSpaces
                    threshold={0.1}
                    rootMargin="20%"
                    Experience
                >Experience</AnimatedText>;

                <AnimatedText
                    type="chars" // animate words or chars
                    animation={{
                        x: '200px',
                        y: '-20px',
                        scale: 1.1,
                        ease: 'ease-in-out',
                    }}
                    animationType="rifle"
                    interval={0.16}
                    duration={0.7}
                    tag="p"
                    className={styles.container_1_para_2}
                    includeWhiteSpaces
                    threshold={0.1}
                    rootMargin="20%"
                >Discover, collect and sell</AnimatedText>;

                {/* <input type="text" className={styles.container_1_input_1} placeholder="Items, Collections and Creators" /> */}
                <div className={styles.ocean}>
                    <div className={styles.wave}></div>
                    <div className={styles.wave}></div>
                    <div className={styles.wave}></div>
                </div>
            </div>



            <div className={styles.container_2}>
                {/* <h1 className={styles.container_2_head}>Latest Live Auctions</h1> */}
                <AnimatedText
                    type="chars" // animate words or chars
                    animation={{
                        x: '200px',
                        y: '-20px',
                        scale: 1.1,
                        ease: 'linear',
                    }}
                    animationType="diagonal"
                    interval={0.26}
                    duration={0.7}
                    tag="h1"
                    className={styles.container_2_head}
                    includeWhiteSpaces
                    threshold={0.1}
                    rootMargin="20%"
                    Experience
                >Latest Live Auctions</AnimatedText>;

                <div className={styles.carousel_container}>
                    <Carousel className={styles.crousel}
                        showDots={true}
                        draggable={true}
                        infinite={true}
                        autoPlay={false}
                        autoPlaySpeed={10000000}
                        transitionDuration={500}
                        containerClass="carousel-container"
                        removeArrowOnDeviceType={["desktop", "tablet", "mobile"]}
                        dotListClass="custom-dot-list-style"
                        itemClass="carousel-item-padding-40-px"
                        ssr={true}
                        responsive={responsive}>

                        <div className={styles.container}>
                            <div className={styles.card}>
                                <div className={styles.image}>

                                    <Image className={styles.image_1} src={img_1} />
                                    {/* </ScrollAnimation> */}
                                </div>
                                <div className={styles.content}>
                                    <h3>This is content</h3>
                                    <p>DIn publishing and graphic design,Lorem ipsum is a placeholder text
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className={styles.container}>
                            <div className={styles.card}>
                                <div className={styles.image}>

                                    <Image className={styles.image_1} src={img_2} />
                                    {/* </ScrollAnimation> */}
                                </div>
                                <div className={styles.content}>
                                    <h3>This is content</h3>
                                    <p>DIn publishing and graphic design,Lorem ipsum is a placeholder text
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className={styles.container}>
                            <div className={styles.card}>
                                <div className={styles.image}>

                                    <Image className={styles.image_1} src={img_3} />
                                    {/* </ScrollAnimation> */}
                                </div>
                                <div className={styles.content}>
                                    <h3>This is content</h3>
                                    <p>DIn publishing and graphic design,Lorem ipsum is a placeholder text
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className={styles.container}>
                            <div className={styles.card}>
                                <div className={styles.image}>

                                    <Image className={styles.image_1} src={img_4} />
                                    {/* </ScrollAnimation> */}
                                </div>
                                <div className={styles.content}>
                                    <h3>This is content</h3>
                                    <p>DIn publishing and graphic design,Lorem ipsum is a placeholder text
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className={styles.container}>
                            <div className={styles.card}>
                                <div className={styles.image}>

                                    <Image className={styles.image_1} src={img_3} />
                                    {/* </ScrollAnimation> */}
                                </div>
                                <div className={styles.content}>
                                    <h3>This is content</h3>
                                    <p>DIn publishing and graphic design,Lorem ipsum is a placeholder text
                                    </p>
                                </div>
                            </div>
                        </div>

                    </Carousel>;
                </div>
            </div>

        </div>
    );
}

export default Body;