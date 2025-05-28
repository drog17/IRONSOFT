import styles from './blogProd.module.scss';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import { useState, useEffect } from 'react';
import axios from 'axios';
import Case from '../Home/Components/Case/Case';

interface BlogPost {
  id: number;
  description: string;
  title: string;
  author: string;
  authorLink: string;
  contentPreview: string;
  date: string;
  image: string;
}

const BlogProd = () => {
  const [blogPosts, setPosts] = useState<BlogPost[]>([]);
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

  return (
    <section className={styles.blogSection}>
      <div className={styles.container}>
        <div className={styles.header}>
          <h2 className={styles.title}>Blog</h2>
          <p className={styles.subtitle}>The evolution of live-stream content and short-form video. A look at the TikTok revolution</p>
        </div>

        <div className={styles.postsContainer}>
          {blogPosts.map((post) => (
            <div key={post.id} className={styles.postCard}>
              <div className={styles.imageContainer}>
                <img src={post.image} className={styles.postImage} />
              </div>
              <div className={styles.postContent}>
                <h3 className={styles.postTitle}>{post.title}</h3>
                <p className={styles.postDescription}>{post.description}</p>
                <p className={styles.postDate}>{post.date}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Case />
    </section>
  );
};

export default BlogProd;
