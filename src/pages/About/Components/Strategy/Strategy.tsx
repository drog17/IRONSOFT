import styles from './strategy.module.scss'
import Bg from './img/background.png'



const Strategy = () => {
  return (
    <section className={styles.strategy}>
      <div className={styles.container}>
        <div className={styles.strategy__text}>
          <h3>Our tech strategy</h3>
          <p>At Rhapsody, we're all about making sure your project is a success. That's why we start <br />every project by working with you to develop a custom strategy that aligns with your <br />business objectives. <br /><br />Our team of experts will help you identify key opportunities and come up with a <br />strategy plan that's tailored just for you. We're all about keeping it real and working <br /> together to achieve your goals. So if you're looking for a partner that's passionate <br /> about your success, you've come to the right place.</p>
          <button className={styles.strategy__btn}>See our works</button>
        </div>
        <img src={Bg} alt="" />
      </div>
    </section>
  )
}

export default Strategy
