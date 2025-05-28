// import styles from './blog.module.scss'
// import { Swiper, SwiperSlide, } from 'swiper/react';
// import 'swiper/css';
// import 'swiper/css/navigation';
// import 'swiper/css/pagination';
// import { Navigation, Pagination, Autoplay } from 'swiper/modules';
// import Slide1 from './img/ai.png'
// import Slide2 from './img/car.png'
// import Slide3 from './img/ikea.png'
// import Slide4 from './img/ux.jpg'
// import Slide5 from './img/social.jpg'
// import { Link } from 'react-router-dom';


// const Blog = () => {
//     return (
//         <section className={styles.blog}>
//             <div className={styles.container}>
//                 <h2>Blog</h2>
//                 <Swiper
//                     modules={[Navigation, Pagination, Autoplay]}
//                     spaceBetween={25}
//                     slidesPerView={3.5}
//                     navigation
//                     pagination={{ clickable: true }}
//                     autoplay={{ delay: 3000, disableOnInteraction: false }}
//                     loop={true}>
//                     <SwiperSlide>
//                         <Link to={'/blogprod'}>
//                             <div className={styles.slide}>
//                                 <img src={Slide1} alt="" />
//                                 <h4>IKEA.com — the problems with static <br /> content</h4>
//                                 <a href="">Gustaf Nilsson Kotte in Flat Pack Tech</a>
//                                 <p>In my previous blog post, I wrote about the history of <br /> IKEA.com going from a monolithic e-commerce <br /> platform…</p>
//                                 <span>12.08.23</span>
//                             </div>
//                         </Link>
//                     </SwiperSlide>
//                     <SwiperSlide>
//                         <Link to={'/blogprod'}>
//                             <div className={styles.slide}>
//                                 <img src={Slide2} alt="" />
//                                 <h4>IKEA.com — the problems with static <br /> content</h4>
//                                 <a href="">Gustaf Nilsson Kotte in Flat Pack Tech</a>
//                                 <p>In my previous blog post, I wrote about the history of <br /> IKEA.com going from a monolithic e-commerce <br /> platform…</p>
//                                 <span>12.08.23</span>
//                             </div>
//                         </Link>
//                     </SwiperSlide>
//                     <SwiperSlide>
//                         <Link to={'/blogprod'}>
//                             <div className={styles.slide}>
//                                 <img src={Slide3} alt="" />
//                                 <h4>IKEA.com — the problems with static <br /> content</h4>
//                                 <a href="">Gustaf Nilsson Kotte in Flat Pack Tech</a>
//                                 <p>In my previous blog post, I wrote about the history of <br /> IKEA.com going from a monolithic e-commerce <br /> platform…</p>
//                                 <span>12.08.23</span>
//                             </div>
//                         </Link>
//                     </SwiperSlide>
//                     <SwiperSlide>
//                         <Link to={'/blogprod'}>
//                             <div className={styles.slide}>
//                                 <img src={Slide4} alt="" />
//                                 <h4>IKEA.com — the problems with static <br /> content</h4>
//                                 <a href="">Gustaf Nilsson Kotte in Flat Pack Tech</a>
//                                 <p>In my previous blog post, I wrote about the history of <br /> IKEA.com going from a monolithic e-commerce <br /> platform…</p>
//                                 <span>12.08.23</span>
//                             </div>
//                         </Link>
//                     </SwiperSlide>
//                     <SwiperSlide>
//                         <Link to={'/blogprod'}>
//                             <div className={styles.slide}>
//                                 <img src={Slide5} alt="" />
//                                 <h4>IKEA.com — the problems with static <br /> content</h4>
//                                 <a href="">Gustaf Nilsson Kotte in Flat Pack Tech</a>
//                                 <p>In my previous blog post, I wrote about the history of <br /> IKEA.com going from a monolithic e-commerce <br /> platform…</p>
//                                 <span>12.08.23</span>
//                             </div>
//                         </Link>
//                     </SwiperSlide>
//                 </Swiper>
//             </div>
//         </section>
//     )
// }

// export default Blog

import styles from './blog.module.scss';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios from 'axios';

interface BlogPost {
  id: number;
  title: string;
  author: string;
  authorLink: string;
  contentPreview: string;
  date: string;
  image: string;
}

const Blog = () => {
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await axios.get<BlogPost[]>('http://localhost:8080/productBlog');
        setPosts(response.data);
        setError(null);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Unknown error');
        console.error('Error fetching blog posts:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchPosts();
  }, []);

  if (loading) {
    return <div className={styles.loading}>Loading blog posts...</div>;
  }

  if (error) {
    return <div className={styles.error}>Error: {error}</div>;
  }

  if (posts.length === 0) {
    return <div className={styles.empty}>No blog posts available</div>;
  }

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
          loop={true}
          breakpoints={{
            320: {
              slidesPerView: 1,
              spaceBetween: 20
            },
            768: {
              slidesPerView: 2,
              spaceBetween: 25
            },
            1024: {
              slidesPerView: 3.5,
              spaceBetween: 25
            }
          }}
        >
          {posts.map((post) => (
            <SwiperSlide key={post.id}>
              <Link to={'/blogprod'}>
                <div className={styles.slide}>
                  <img src={post.image} alt={post.title} />
                  <h4>{post.title}</h4>
                  <a href={post.authorLink}>{post.author}</a>
                  <p>{post.contentPreview}</p>
                  <span>{post.date}</span>
                </div>
              </Link>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Blog;