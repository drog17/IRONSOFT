import styles from './webdev.module.scss';


const WebDev = () => {
    return (
        <section className={styles.webdev} id="web-dev-section">
            <div className={styles.container}>
                <h2 className={styles.mainTitle}>Web Development</h2>
                <p className={styles.introText}>
                    The visualized product concept is being implemented and executed. We will choose <br /> the technology that matches the requirements and is sustainable to ensure future <br /> development potential.</p>
                <div className={styles.webdev__main}>
                    <div className={styles.sectionBlock}>
                        <h2 className={styles.sectionTitle}>Product Design</h2>
                        <p className={styles.sectionDescription}>
                            Product design is where we bring the idea to life with a functional and aesthetic touch. We will use our creative and technical skills to create an attractive digital product that will convert potential users into loyal customers.</p>
                        <div className={styles.cardGroup}>
                            <div className={styles.card}>
                                <h3 className={styles.cardTitle}>USER EXPERIENCE DESIGN</h3>
                                <ul className={styles.featureList}>
                                    <li>USER FLOWS</li>
                                    <li>WINDFRAMING</li>
                                    <li>DANGHTUNG</li>
                                    <li>PRODUCT WIND</li>
                                </ul>
                            </div>
                            <div className={styles.card}>
                                <h3 className={styles.cardTitle}>USER INTERFACE DESIGN</h3>
                                <ul className={styles.featureList}>
                                    <li>INTERNOMARIO DESIGN</li>
                                    <li>MICROATTEMPORTS (IE)</li>
                                </ul>
                            </div>
                            <div className={styles.card}>
                                <h3 className={styles.cardTitle}>BRANDING</h3>
                                <ul className={styles.featureList}>
                                    <li>THE LONG STYLE CLUB</li>
                                    <li>ONTO LEAGGETED ANIMATIONS</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className={styles.sectionBlock}>
                        <h2 className={styles.sectionTitle}>Web Development</h2>
                        <p className={styles.sectionDescription}>
                            The goal of front-end development is to create an intuitive and enjoyable experience for the end user. We will ensure that everything is accurately displayed, with proper alignment on various devices, and presented exactly as intended.
                        </p>
                        <div className={styles.cardGroup}>
                            <div className={styles.card}>
                                <h3 className={styles.cardTitle}>FRONT-END DEVELOPMENT</h3>
                                <ul className={styles.featureList}>
                                    <li>HTML-SERVER</li>
                                    <li>RECET</li>
                                    <li>RECEIVE</li>
                                    <li>ASSURPRESS</li>
                                    <li>CARD</li>
                                </ul>
                            </div>
                            <div className={styles.card}>
                                <h3 className={styles.cardTitle}>BACK-END DEVELOPMENT</h3>
                                <ul className={styles.featureList}>
                                    <li>BODCAIN</li>
                                    <li>END</li>
                                    <li>ADVERTISING (DSL)</li>
                                </ul>
                            </div>
                            <div className={styles.card}>
                                <h3 className={styles.cardTitle}>QUALITY ASSURANCE</h3>
                                <ul className={styles.featureList}>
                                    <li>MINIMAL ACCEPTANCE TEXTS</li>
                                    <li>AUTOMATED UNIT TEXTS</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default WebDev;