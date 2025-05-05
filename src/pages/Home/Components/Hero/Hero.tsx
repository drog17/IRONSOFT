import styles from './hero.module.scss'
import Is from './img/Слой 3 1.png'
import left from './img/left.png'
import right from './img/right.png'
import center from './img/center.png'
import aww from './img/logos/Logo Green 2.png'
import a from './img/logos/Sign Green 2.png'
import trident from './img/logos/Group 25765.png'
import viva from './img/logos/vivalogo 2.png'
import spot from './img/spot.png'



const Hero = () => {
  return (
    <section className={styles.hero}>
      <div className={styles.container}>
        <div className={styles.hero__left}>
          <div className={styles.hero__text}>
            <img src={Is} alt="" />
            <h2>Your Website <br /> good enough?</h2>
          </div>
          <button className={styles.hero__btn}>Check this now!</button>
          <div className={styles.hero__trust}>
            <h3>THEY TRUST US</h3>
            <div className={styles.hero__logos}>
              <img src={aww} alt="" />
              <img src={a} alt="" />
              <img src={trident} alt="" />
              <img src={viva} alt="" />
            </div>
          </div>
        </div>
        <div className={styles.hero__right}>
          <img className={styles.spot} src={spot} alt="" />
          <div className={styles.hero__img}>
            <img className={styles.leftImg} src={left} alt="" />
            <img className={styles.centerImg} src={center} alt="" />
            <img src={right} alt="" />
          </div>
          <div className={styles.hero__services}>
            <div><span>Web Development</span></div>
            <div><span>SEOptimisation</span></div>
            <div><span>PPC and SMM</span></div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
