import { useState } from 'react';
import Form from '../form/form';
import styles from './header.module.scss';
import Logo from './img/logo (1).png';
import { Link } from 'react-router-dom';

const Header = () => {
  const [showForm, setShowForm] = useState(false);

  const handleButtonClick = () => {
    setShowForm(true);
  };

  const handleCloseForm = () => {
    setShowForm(false);
  };
  return (
    <>
      <header className={styles.header}>
        <div className={styles.container}>
          <Link to={'/'}><img src={Logo} alt="" /></Link>
          <ul className={styles.header__nav}>
            <li>Services</li>
            <Link to={'/works'}><li>Our works</li></Link>
            <Link to='/about'><li>About us</li></Link>
            <Link to='/contact'><li>Contact us</li></Link>
          </ul>
          <button className={styles.header__btn} onClick={handleButtonClick}>GET STARTED</button>
        </div>
      </header>
      {showForm && (
        <div className={styles.modalOverlay}>
          <div className={styles.modalContainer}>
            <Form />
            <button className={styles.closeButton} onClick={handleCloseForm}>×</button>
          </div>
        </div>
      )}
    </>
  );
};

export default Header;