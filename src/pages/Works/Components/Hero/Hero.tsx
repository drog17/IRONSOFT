import styles from "./hero.module.scss";
import Bg from "./main 8.png";

const Hero: React.FC = () => {
    return (
        <section className={styles.hero}>
            <div className={styles.container}>
                <div className={styles.hero__top}>
                    <div className={styles.header}>
                        <span className={styles.label}>WORDPRESS</span>
                        <h2 className={styles.title}>
                            Modern look for the <br /> software development <br /> company
                        </h2>
                        <ul className={styles.meta}>
                            <li><span>Location</span><p>London, UK</p></li>
                            <li><span>Client</span><p>London, UK</p></li>
                            <li><span>Release</span><p>London, UK</p></li>
                            <li><span>INDUSTRY</span><p>London, UK</p></li>
                        </ul>
                        <button className={styles.liveButton}> Check live </button>
                    </div>
                    <div className={styles.imageWrapper}>
                        <img src={Bg} alt="" />
                    </div>
                </div>
                <div className={styles.content}>
                    <div className={styles.problem}>
                        <h2>🧩 Problem</h2>
                        <p>
                            Anthill World Wide (AWW) is a software development company that came to IronSoft
                            with a <br /> problem – their website was outdated and lacked the necessary
                            functionality to compete in today's <br /> digital landscape. We understood that
                            the website is the first point of contact for many <br /> potential customers,
                            and a poor user experience could negatively impact brand awareness and lead
                            to missed opportunities.
                        </p>
                    </div>
                    <div className={styles.solution}>
                        <h2>✅ Solution</h2>
                        <p>
                            To solve this problem, we worked closely with AWW to identify their specific
                            needs and goals. We <br /> designed a modern website with a user-friendly interface
                            that would engage visitors and promote <br /> their brand. The new site was not only
                            visually appealing but also optimized for functionality, <br /> providing a seamless
                            experience for users.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
