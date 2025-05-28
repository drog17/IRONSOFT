import styles from './case.module.scss';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import spotleft from './img/spotleft.png';
import spotright from './img/spotright.png';
import { useState, useEffect } from 'react';
import axios from 'axios';

interface ProductCase {
  id: number;
  title: string;
  description: string;
  image: string;
}

const Case = () => {
  const [products, setProducts] = useState<ProductCase[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get<ProductCase[]>('http://localhost:8080/productsCase');
        setProducts(response.data);
        setError(null);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Unknown error');
        console.error('Error fetching products:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []); 

  if (loading) {
    return <div className={styles.loading}>Loading products...</div>;
  }

  if (error) {
    return <div className={styles.error}>Error: {error}</div>;
  }

  if (products.length === 0) {
    return <div className={styles.empty}>No products available</div>;
  }

  return (
    <section className={styles.case}>
      <div className={styles.container}>
        <img className={styles.spotleft} src={spotleft} alt="Decorative spot" />
        <span>Our projects</span>
        <h3>Case studies</h3>
        <p>
          When it comes to creating a high quality website and adjusting the marketing strategy,
          experience matters a lot. Explore our portfolio to view some of the projects we've successfully completed!
        </p>
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={30}
          slidesPerView={2.5}
          navigation
          pagination={{ clickable: true }}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          loop={true}
          breakpoints={{
            320: { slidesPerView: 1, spaceBetween: 20 },
            768: { slidesPerView: 2, spaceBetween: 30 },
            1024: { slidesPerView: 2.5, spaceBetween: 40 }
          }}
        >
          {products.map((product) => (
            <SwiperSlide key={product.id}>
              <div className={styles.slide}>
                <img
                  src={product.image}
                  alt={product.title}
                  className={styles.productImage}
                />
                <div className={styles.productInfo}>
                  <h4>{product.title}</h4>
                  <p>{product.description}</p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        <button className={styles.case__btn}>See more</button>
        <img className={styles.spotright} src={spotright} alt="Decorative spot" />
      </div>
    </section>
  );
};

export default Case;