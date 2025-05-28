import styles from './meet.module.scss'
import { Swiper, SwiperSlide, } from 'swiper/react';
import 'swiper/css'; 
import 'swiper/css/pagination'; 
import { Pagination, Autoplay } from 'swiper/modules';
import Slide1 from './img/alex.png'
import Slide2 from './img/dariia.png'
import Slide3 from './img/michel.png'
import Slide4 from './img/viktor.png'

const Meet = () => {
  return (
    <section className={styles.meet}>
      <div className={styles.container}>
        <div className={styles.meet__text}>
          <span>Our team</span>
          <h3>Meet the IronSoft team</h3>
          <p>Team of 12 passionate engineers developing and <br /> setting with care to make sure our clients are 100% <br /> happy.</p>
        </div>
        
        <Swiper
          modules={[ Pagination, Autoplay]}
          spaceBetween={0}
          slidesPerView={2}
          pagination={{ clickable: true }}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          loop={true}
        >
        <SwiperSlide>
            <div className={styles.slide}>
              <img src={Slide1} alt="" />
              <h3>Alexandr Efremenko</h3>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className={styles.slide}>
              <img src={Slide2} alt="" />
              <h3>Elena Alekseevna</h3>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className={styles.slide}>
              <img src={Slide3} alt="" />
              <h3>Micheal Grigorovich</h3>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className={styles.slide}>
              <img src={Slide4} alt="" />
              <h3>Viktor Danilkovych</h3>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </section>
  )
}

export default Meet
