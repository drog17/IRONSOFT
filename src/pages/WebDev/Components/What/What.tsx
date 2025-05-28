import React from "react";
import styles from './what.module.scss';

interface ServiceItem {
    title: string;
}

const What: React.FC = () => {
    const services: ServiceItem[] = [
        { title: "E-Commerce"},
        { title: "Corporate Website" },
        { title: "Portal / Service" },
        { title: "Web Catalog" },
        { title: "Business Apps" },
        { title: "Landing Page" },
    ];

    return (
        <section className={styles.what}>
            <div className={styles.container}>
                <h3 >OUR SERVICES</h3>
                <h2 >What we do</h2>
                <p className={styles.description}>
                    Our team specialises in website development, offering customized solutions that meet the needs <br /> of each client.
                    We create websites with unique design, great functionality and high performance.
                </p>
                <div className={styles.grid}>
                    {services.map((service, index) => (
                        <div key={index} className={styles.item}>
                            <h4 className={styles.itemTitle}>{service.title}</h4>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default What;