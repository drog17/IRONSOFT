import styles from './hero.module.scss';
import code from './img/Group 25802.png'
import Aww from './img/logo/aww.png'
import A from './img/logo/a.png'
import Vital from './img/logo/vital.png'
import Trident from './img/logo/trident.png'
import Viva from './img/logo/vivalogo 2.png'






const Hero = () => {
  return (
    <section className={styles.hero}>
      <div className={styles.container}>
        <div className={styles.hero__top}>
          <h2>Improve your digital <br /> presence with a team of </h2>
          <span>dedicated professionals.</span>
          <p>IronSoft is a team of experienced web developers, designers and digital <br /> marketers providing solutions for business and personal demands.</p>
        </div>
        <div className={styles.hero__bot}>
          <img src={code} alt="" />
          <div>
            <h3>Our mission</h3>
            <p>We believe that every brand has a unique story to tell, <br />2 and we strive to bring that story to life through <br /> innovative solutions. From concept to implementation, <br /> we work hand-in-hand with our clients to develop <br />innovative digital products and create a compelling <br /> online presence that sets them apart from the <br /> competition.</p>
          </div>
        </div>
        <div className={styles.hero__clients}>
          <h3>Our <br /> clients</h3>
          <div className={styles.logo}>
            <img src={Aww} alt="" />
            <img src={A} alt="" />
            <img src={Vital} alt="" />
            <img src={Trident} alt="" />
            <img src={Viva} alt="" />
          </div>
        </div>
      </div>
    </section >
  )
}

export default Hero
