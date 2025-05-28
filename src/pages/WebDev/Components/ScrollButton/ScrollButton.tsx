import styles from './scrollbutton.module.scss'
import Vector from './Vector (4).png'


const ScrollButton = () => {
    const scrollToSection = () => {
        const section = document.getElementById('web-dev-section');
        if (section) {
            section.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    };

    return (
        <button onClick={scrollToSection} className={styles.scroll__btn}>
            What is web <br /> development?
            <div><img src={Vector} alt="" /></div>
        </button>
    );
}

export default ScrollButton;