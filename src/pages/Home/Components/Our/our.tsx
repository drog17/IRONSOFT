import style from './our.module.scss'
import DesignImg from './img/design.png'
import Dev from './img/develop.png'


const our = () => {
    return (
        <section className={style.our}>
            <div className={style.container}>
                <h2>Our servises</h2>
                <p>Partners in every phase of the product lifecycle</p>
                <div className={style.our__main}>
                    <div className={style.our__left}>
                        <div className={style.our__web}>
                            <h3>Web Development</h3>
                            <p>The visualized product concept is being implemented and executed. We will choose the technology <br /> that matches the requirements and is sustainable to ensure future development potential.</p>
                        </div>
                        <div>
                            <h3>SEO Optimisation</h3>
                            <p>The work on a digital project continues after deployment. We can observe how real users interact with the <br /> product and identify opportunities for optimization. We will continuously evaluate performance, make<br /> updates, and make adjustments to ensure that your product remains secure, up to date, and improves<br /> over time.</p>
                        </div>
                        <div>
                            <h3>PCC, SMM</h3>
                            <p>Our Paid Media efforts engage audiences when they are most receptive, resulting in high-quality <br />traffic and increased leads and revenue.We will help you quickly increase targeted traffic from paid <br /> advertising channels such as Google, Facebook, Instagram or even LinkedIn.</p>
                        </div>
                    </div>
                    <div className={style.our__right}>
                        <div className={style.top}>
                            <div className={style.design}>
                                <img src={DesignImg} alt="" />
                                <div className={style.text}>
                                    <h3>Product Design</h3>
                                    <p>Product design is where we bring the idea to life with a functional and <br /> aesthetic touch. We will use our creative and technical skills to create an <br /> attractive digital product that will convert potential users into loyal <br /> customers.</p>
                                </div>
                            </div>
                            <div className={style.card}>
                                <h3>USER EXPERIENCE <br /> DESIGN</h3>
                                <div className={style.cards}>
                                    <div><span>User Flows</span></div>
                                    <div><span>Wireframing</span></div>
                                    <div><span>UX Writing</span></div>
                                    <div><span>Prototyping</span></div>
                                </div>
                            </div>
                            <div className={style.card}>
                                <h3>USER EXPERIENCE <br /> DESIGN</h3>
                                <div className={style.cards}>
                                    <div><span>UI Responsive Design</span></div>
                                    <div><span>Micro Interactions</span></div>
                                </div>
                            </div>
                            <div className={style.card}>
                                <h3>BRANDING</h3>
                                <div className={style.cards}>
                                    <div><span>Building Style Guide</span></div>
                                    <div><span>Unique assets & animations</span></div>
                                </div>
                            </div>
                        </div>
                        <div className={style.bottom}>
                            <div className={style.dev}>
                                <img src={Dev} alt="" />
                                <div className={style.text}>
                                    <h3>Web Development</h3>
                                    <p>The goal of front-end development is to create an intuitive and <br /> enjoyable experience for the end user. We will ensure that everything is <br /> accurately displayed, with proper alignment on various devices, and <br /> presented exactly as intended.</p>
                                </div>
                            </div>
                            <div className={style.card}>
                                <h3>FRONT-END <br /> DEVELOPMENT</h3>
                                <div className={style.cards}>
                                    <div><span>HTML CSS JS</span></div>
                                    <div><span>React</span></div>
                                    <div><span>Next.js</span></div>
                                    <div><span>Wordpress</span></div>
                                    <div><span>PWA</span></div>
                                </div>
                            </div>
                            <div className={style.card}>
                                <h3>BACK-END <br /> DEVELOPMENT</h3>
                                <div className={style.cards}>
                                    <div><span>Node.js</span></div>
                                    <div><span>PHP</span></div>
                                    <div><span>API Integration</span></div>
                                </div>
                            </div>
                            <div className={style.card}>
                                <h3>QUALITY <br /> ASSURANCE</h3>
                                <div className={style.cards}>
                                    <div><span>Manual acceptance tests</span></div>
                                    <div><span>Automated unit tests</span></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default our
