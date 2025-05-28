import styles from "./approach.module.scss";



const Approach = () => {

  return (
    <section className={styles.approach}>
      <div className={styles.container}>
          <h2 >Our <br /> Approach</h2>
          <div className={styles.approach__card}>
            <h3>01.</h3>
            <span>Large-scale <br /> distributed system</span>
            <p>Brights web development company helps <br /> organizations from different countries in their <br /> Big Data navigation from strategy creation <br /> to big-scale project launch, providing all <br /> necessary stages of stream processing that <br /> helps to analyze customer activity, marketing <br /> campaigns, etc.</p>
          </div>
          <div className={styles.approach__card}>
            <h3>02.</h3>
            <span>Large-scale <br /> distributed system</span>
            <p>Brights web development company helps <br /> organizations from different countries in their <br /> Big Data navigation from strategy creation <br /> to big-scale project launch, providing all <br /> necessary stages of stream processing that <br /> helps to analyze customer activity, marketing <br /> campaigns, etc.</p>
          </div>
          <div className={styles.approach__card}>
            <h3>03.</h3>
            <span>Large-scale <br /> distributed system</span>
            <p>Brights web development company helps <br /> organizations from different countries in their <br /> Big Data navigation from strategy creation <br /> to big-scale project launch, providing all <br /> necessary stages of stream processing that <br /> helps to analyze customer activity, marketing <br /> campaigns, etc.</p>
          </div>
        </div>
    </section>
  );
};

export default Approach;