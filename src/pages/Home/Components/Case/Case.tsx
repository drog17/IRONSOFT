import styles from './case.module.scss'
import { Swiper, SwiperSlide, } from 'swiper/react';
import 'swiper/css'; 
import 'swiper/css/navigation';
import 'swiper/css/pagination'; 
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import Slide1 from './img/case1.png'
import Slide2 from './img/case2.jpg'
import Slide3 from './img/group2.png'
import spotleft from './img/spotleft.png'
import spotright from './img/spotright.png'


const Case = () => {
  return (
    <section className={styles.case}>
      <div className={styles.container}>
        <img className={styles.spotleft} src={spotleft} alt="" />
        <span>Our projects</span>
        <h3>Case studies</h3>
        <p>When it comes to creating a high quality website and adjusting the marketing strategy, experience <br /> matters a lot. Explore our portfolio to view some of the projects we've successfully completed!</p>
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={30}
          slidesPerView={2.5}
          navigation
          pagination={{ clickable: true }}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          loop={true}
        >
        <SwiperSlide>
            <div className={styles.slide}>
              <img src={Slide1} alt="" />
              <p>Modern look for the the software <br /> development company</p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className={styles.slide}>
              <img src={Slide2} alt="" />
              <p>Corporate website for an assemble modular <br /> houses enterprise</p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className={styles.slide}>
              <img src={Slide3} alt="" />
              <p>Corporate website for an assemble modular <br /> houses enterprise</p>
            </div>
          </SwiperSlide>
        </Swiper>
        <button className={styles.case__btn}>See more</button>
        <img className={styles.spotright} src={spotright} alt="" />
      </div>
    </section>
  )
}

export default Case
