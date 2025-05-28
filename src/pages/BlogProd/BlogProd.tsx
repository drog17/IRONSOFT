import axios from 'axios';
import { useEffect, useState } from 'react';
import styles from './blogProd.module.scss';
import Case from '../Home/Components/Case/Case';

interface BlogPost {
  id: number;
  name: string;
  description: string;
  date: string;
  image: string;
}

const BlogSection = () => {
  const [blogPosts, setBlogPosts] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchBlogPosts = async () => {
      try {
        const response = await axios.get('/db.json');
        setBlogPosts(response.data.productBlog);
        setLoading(false);
      } catch (err) {
        setError('Failed to fetch blog posts');
        setLoading(false);
        console.error('Error fetching blog posts:', err);
      }
    };

    fetchBlogPosts();
  }, []);

  if (loading) {
    return <div className={styles.loading}>Loading...</div>;
  }

  if (error) {
    return <div className={styles.error}>{error}</div>;
  }

  return (
    <section className={styles.blogSection}>
      <div className={styles.header}>
        <h2 className={styles.title}>Blog</h2>
        <p className={styles.subtitle}>The evolution of live-stream content and short-form video. A look at the TikTok revolution</p>
      </div>

      <div className={styles.postsContainer}>
        {blogPosts.map((post) => (
          <div key={post.id} className={styles.postCard}>
            <div className={styles.imageContainer}>
              <img src={post.image} alt={post.name} className={styles.postImage} />
            </div>
            <div className={styles.postContent}>
              <h3 className={styles.postTitle}>{post.name}</h3>
              <p className={styles.postDescription}>{post.description}</p>
              <p className={styles.postDate}>{post.date}</p>
            </div>
          </div>
        ))}
      </div>
      <Case/>
    </section>
  );
};

export default BlogSection;