import styles from './hero.module.scss'
import ReactDev from './img/logo/ReactImg.png'
import Next from './img/logo/Next.png'
import Angular from './img/logo/Angular.png'
import Vue from './img/logo/Vue.png'
import Bg1 from './img/Rectangle 9.png'
import Bg2 from './img/Rectangle 3295.png'
import ScrollButton from '../ScrollButton/ScrollButton'


const Hero = () => {
    return (
        <section className={styles.hero}>
            <div className={styles.container}>
                <div className={styles.hero__text}>
                    <h3>Web <br />Development</h3>
                    <div className={styles.hero__span}>We help you to get the best business solution ever</div>
                    <span>Main technologies</span>
                    <div className={styles.hero__logos}>
                        <div className={styles.hero__stack}>
                            <img src={ReactDev} alt="" />
                            <span>React</span>
                        </div>
                        <div className={styles.hero__stack}>
                            <img src={Next} alt="" />
                            <span>Next</span>
                        </div>
                        <div className={styles.hero__stack}>
                            <img src={Angular} alt="" />
                            <span>Angular</span>
                        </div>
                        <div className={styles.hero__stack}>
                            <img src={Vue} alt="" />
                            <span>Vue</span>
                        </div>
                    </div>
                </div>
                <ScrollButton/>
                <div className={styles.hero__imgs}>
                    <img src={Bg1} alt="" />
                    <img className={styles.bg2} src={Bg2} alt="" />
                </div>
            </div>
        </section>
    )
}

export default Hero