"use client";
import { useParams } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import styles from '@/styles/BlogPost.module.css';
import { FaArrowLeft, FaClock, FaTag, FaShare } from 'react-icons/fa';
import type { BlogPost } from '@/types/blog';
import { mockPosts } from '../mockData';

export default function BlogPost() {
  const params = useParams();
  const post = mockPosts.find(p => p.slug === params.slug);

  if (!post) {
    return (
      <div className={styles.notFound}>
        <h1>Artikel nicht gefunden</h1>
        <Link href="/blog/articles" className={styles.backLink}>
          <FaArrowLeft />
          Zurück zur Übersicht
        </Link>
      </div>
    );
  }

  const sharePost = () => {
    if (navigator.share) {
      navigator.share({
        title: post.title,
        text: post.excerpt,
        url: window.location.href,
      });
    }
  };

  return (
    <article className={styles.blogPost}>
      <div className={styles.heroSection}>
        <div className={styles.heroContent}>
          <Link href="/blog/articles" className={styles.backLink}>
            <FaArrowLeft />
            Zurück zur Übersicht
          </Link>
          <div className={styles.category}>
            <FaTag />
            {post.category}
          </div>
          <h1>{post.title}</h1>
          <div className={styles.meta}>
            <span className={styles.date}>
              {new Date(post.date).toLocaleDateString()}
            </span>
            <span className={styles.readTime}>
              <FaClock />
              {post.readTime}
            </span>
          </div>
        </div>
        <div className={styles.heroImage}>
          <Image
            src={post.imageUrl}
            alt={post.title}
            fill
            priority
            sizes="100vw"
            className={styles.image}
          />
        </div>
      </div>

      <div className={styles.content}>
        <div className={styles.shareButton} onClick={sharePost}>
          <FaShare />
          Teilen
        </div>
        <div 
          className={styles.postContent}
          dangerouslySetInnerHTML={{ __html: post.content }}
        />
      </div>
    </article>
  );
} 