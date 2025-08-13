import Contact from './contact__img.png'
import styles from "./hero.module.scss";


const Hero = () => {
    return (
        <section className={styles.hero}>
            <div className={styles.container}>
                <div className={styles.imageBlock}>
                    <img src={Contact} alt="Office" />
                </div>
                <div className={styles.form}>
                    <h3>Get in touch</h3>
                    <form>
                        <input type="text" placeholder="Name" />
                        <input type="email" placeholder="Email" />
                        <input type="tel" placeholder="Phone" />
                        <textarea placeholder="Message"></textarea>
                        <div className={styles.attachPolicy}>
                            <a href="#" className={styles.attach}> ATTACH FILES</a>
                            <label>
                                <input type="checkbox" /> I agree to the <a className={styles.privat} href="#">Privacy Policy</a>
                            </label>
                        </div>
                        <button type="submit" className={styles.submit}> Submit</button>
                    </form>
                </div>
            </div>
        </section>
    )
}

export default Hero
