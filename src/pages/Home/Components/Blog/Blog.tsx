import styles from './blog.module.scss'
import { Swiper, SwiperSlide, } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import Slide1 from './img/ai.png'
import Slide2 from './img/car.png'
import Slide3 from './img/ikea.png'
import Slide4 from './img/ux.jpg'
import Slide5 from './img/social.jpg'


const Blog = () => {
    return (
        <section className={styles.blog}>
            <div className={styles.container}>
                <h2>Blog</h2>
                <Swiper
                    modules={[Navigation, Pagination, Autoplay]}
                    spaceBetween={25}
                    slidesPerView={3.5}
                    navigation
                    pagination={{ clickable: true }}
                    autoplay={{ delay: 3000, disableOnInteraction: false }}
                    loop={true}>
                    <SwiperSlide>
                        <div className={styles.slide}>
                            <img src={Slide1} alt="" />
                            <h4>IKEA.com — the problems with static <br /> content</h4>
                            <a href="">Gustaf Nilsson Kotte in Flat Pack Tech</a>
                            <p>In my previous blog post, I wrote about the history of <br /> IKEA.com going from a monolithic e-commerce <br /> platform…</p>
                            <span>12.08.23</span>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className={styles.slide}>
                            <img src={Slide2} alt="" />
                            <h4>IKEA.com — the problems with static <br /> content</h4>
                            <a href="">Gustaf Nilsson Kotte in Flat Pack Tech</a>
                            <p>In my previous blog post, I wrote about the history of <br /> IKEA.com going from a monolithic e-commerce <br /> platform…</p>
                            <span>12.08.23</span>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className={styles.slide}>
                            <img src={Slide3} alt="" />
                            <h4>IKEA.com — the problems with static <br /> content</h4>
                            <a href="">Gustaf Nilsson Kotte in Flat Pack Tech</a>
                            <p>In my previous blog post, I wrote about the history of <br /> IKEA.com going from a monolithic e-commerce <br /> platform…</p>
                            <span>12.08.23</span>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className={styles.slide}>
                            <img src={Slide4} alt="" />
                            <h4>IKEA.com — the problems with static <br /> content</h4>
                            <a href="">Gustaf Nilsson Kotte in Flat Pack Tech</a>
                            <p>In my previous blog post, I wrote about the history of <br /> IKEA.com going from a monolithic e-commerce <br /> platform…</p>
                            <span>12.08.23</span>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className={styles.slide}>
                            <img src={Slide5} alt="" />
                            <h4>IKEA.com — the problems with static <br /> content</h4>
                            <a href="">Gustaf Nilsson Kotte in Flat Pack Tech</a>
                            <p>In my previous blog post, I wrote about the history of <br /> IKEA.com going from a monolithic e-commerce <br /> platform…</p>
                            <span>12.08.23</span>
                        </div>
                    </SwiperSlide>
                </Swiper>
            </div>
        </section>
    )
}

export default Blog
