import { style } from '@mui/system';
import styles from './devprod.module.scss';

const DevProd = () => {
  return (
    <section className={styles.devprod}>
        <div className={styles.container}>
            <h2>How we</h2>
            <h3>develop products</h3>
            <div className={styles.devprod__main}>
                <div className={styles.devprod__card}>
                    <span>UX Process</span>
                    <p>We make sure that our products not only <br /> fulfill client’s business purposes but are <br /> also intuitive, easy and convenient for the <br /> end user.</p>
                </div>
                <div className={styles.devprod__card}>
                    <span>UX Process</span>
                    <p>We make sure that our products not only <br /> fulfill client’s business purposes but are <br /> also intuitive, easy and convenient for the <br /> end user.</p>
                </div>
                <div className={styles.devprod__card}>
                    <span>UX Process</span>
                    <p>We make sure that our products not only <br /> fulfill client’s business purposes but are <br /> also intuitive, easy and convenient for the <br /> end user.</p>
                </div>
                <div className={styles.devprod__card}>
                    <span>UX Process</span>
                    <p>We make sure that our products not only <br /> fulfill client’s business purposes but are <br /> also intuitive, easy and convenient for the <br /> end user.</p>
                </div>
            </div>
        </div>  
    </section>
  );
};

export default DevProd;