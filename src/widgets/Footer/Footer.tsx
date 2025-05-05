import styles from './footer.module.scss'
import Logo from '../Header/img/logo (1).png'


const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <img src={Logo} alt="" />
        <ul className={styles.footer__nav}>
          <li>Services</li>
          <li>Our works</li>
          <li>About us</li>
          <li>Contact us</li>
        </ul>
        <button className={styles.footer__btn}>GET STARTED</button>
      </div>
    </footer>
  )
}

export default Footer
