import styles from './manifesto.module.scss'



const Manifesto = () => {
    return (
        <section className={styles.manifesto}>
            <div className={styles.container}>
                <h3>Our manifesto</h3>
                <div className={styles.manifesto__card}>
                    <div className={styles.ellipse}>1.</div>
                    <div>
                        <h4>Trust & Transparency</h4>
                        <p>We foster an environment that allows our team to be honest and open with our client <br /> partners, creating a family-like environment that breeds positive results through collaborative <br /> decision-making.</p>
                    </div>
                </div>
                <div className={styles.manifesto__card}>
                    <div className={styles.ellipse}>2.</div>
                    <div>
                        <h4>Partnership</h4>
                        <p>We go to extra lengths in order to solve problems our clients are facing, beyond just the digital <br /> technology execution. We often have a seat at the table to help advise, guide or otherwise be <br /> useful to make sure the projects and products are successful. We treat our clients like true <br /> partners, and we root for them all the way through. Your success is our success.</p>
                    </div>
                </div>
                <div className={styles.manifesto__card}>
                    <div className={styles.ellipse}>3.</div>
                    <div>
                        <h4>Quality</h4>
                        <p>We understand our client partners have a reputation to protect. We don’t “farm out” projects, <br /> and we don’t cut corners. We do value speed, and efficiency, and we approach projects with a <br /> “lean” methodology, but we thoroughly detail every step and we’re stringent about our <br /> product testing. We have tight controls over the products we create, and we don’t launch until <br /> all boxes are checked.</p>
                    </div>
                </div>
                <div className={styles.manifesto__card}>
                    <div className={styles.ellipse}>4.</div>
                    <div>
                        <h4>No Drama</h4>
                        <p>Utility aims to provide white-glove service to our client partners, without the hassles of <br /> typical agency-client headaches. We over-communicate throughout our projects, and we <br /> never disappear. We like to settle situations in a practical matter, and with the close <br /> collaboration of our clients, we come to smart resolutions in a way that feels natural.</p>
                    </div>
                </div>
                <div className={styles.manifesto__card}>
                    <div className={styles.ellipse}>5.</div>
                    <div>
                        <h4>Positivity</h4>
                        <p>We’re a team of positive-minded folks, but we’re not grandiose or unrealistic. We believe <br /> in redirecting possible issues into productive solutions. There’s never just one answer, but there <br /> is always at least some answer, and by committing to steering a calm presence, we always end <br /> up on the right side with our client partners.</p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Manifesto
