import Link from 'next/link';
import Image from 'next/image';
import styles from '@/styles/BlogCard.module.css';

import { FaClock } from 'react-icons/fa';
import CategoryTag from './CategoryTag';

interface BlogCardProps {
  post: {
    slug: string;
    imageUrl: string;
    title: string;
    category: string;
    excerpt: string;
    date: string;
    readTime: string;
  }
}

export default function BlogCard({ post }: BlogCardProps) {
  return (
    <Link href={`/blog/${post.slug}`} className={styles.card}>
      <div className={styles.imageContainer}>
        <Image
          src={post.imageUrl}
          alt={post.title}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className={styles.image}
          loading="lazy"
        />
        <div className={styles.categoryWrapper}>
          <CategoryTag category={post.category} />
        </div>
      </div>
      
      <div className={styles.content}>
        <h2 className={styles.title}>{post.title}</h2>
        <p className={styles.excerpt}>{post.excerpt}</p>
        
        <div className={styles.meta}>
          <span className={styles.date}>
            {new Date(post.date).toLocaleDateString()}
          </span>
          <span className={styles.readTime}>
            <FaClock className={styles.clockIcon} />
            {post.readTime}
          </span>
        </div>
      </div>
    </Link>
  );
} 