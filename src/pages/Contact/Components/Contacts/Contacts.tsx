// ContactInfo.tsx
import styles from './ContactInfo.module.scss';

const ContactInfo = () => {
  return (
    <div className={styles.contactInfo}>
      <div className={styles.location}>
        <h3 className={styles.title}>DUBLIN, IRELAND</h3>
      </div>
      <div className={styles.contactItem}>
        <a href="mailto:CONTACT@IRONSOFT.DEV" className={styles.link}>
          CONTACT@IRONSOFT.DEV
        </a>
      </div>
      <div className={styles.contactItem}>
        <a href="tel:+353-830-933-8221" className={styles.link}>
          +353-830-933-8221
        </a>
      </div>
      <div className={styles.signature}>
        <span className={styles.signatureText}>SIGNALE</span>
      </div>
    </div>
  );
};

export default ContactInfo;