import styles from './footer.module.scss'
import Logo from '../Header/img/logo (1).png'
import { Link } from 'react-router-dom'


const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <img src={Logo} alt="" />
        <ul className={styles.footer__nav}>
          <li>Services</li>
          <Link to={'/works'}><li>Our works</li></Link>
          <Link to={'/about'}><li>About us</li></Link>
          <Link to={'/contact'}><li>Contact us</li></Link>
        </ul>
        <button className={styles.footer__btn}>GET STARTED</button>
      </div>
    </footer>
  )
}

export default Footer
