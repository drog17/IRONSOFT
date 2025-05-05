import styles from './header.module.scss'
import Logo from './img/logo (1).png'
import { Link } from 'react-router-dom'


const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <Link to={'/'}>        <img src={Logo} alt="" />        </Link>
        <ul className={styles.header__nav}>
          <li>Services</li>
          <li>Our works</li>
          <Link to='/about'>
            <li>About us</li>
          </Link>
          <li>Contact us</li>
        </ul>
        <button className={styles.header__btn}>GET STARTED</button>
      </div>
    </header>
  )
}

export default Header
