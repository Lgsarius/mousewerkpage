"use client";
import Link from 'next/link';
import Image from 'next/image';
import styles from '@/styles/BlogMain.module.css';
import { FaArrowRight, FaClock } from 'react-icons/fa';
import { BlogPost } from '@/types/blog';
import CategoryTag from '@/components/blog/CategoryTag';

// Mock data - replace with your actual data
const featuredPost: BlogPost = {
    id: "1",
    title: "Die Zukunft der CAD-Optimierung: KI-gestützte Modellierung",
    excerpt: "Entdecken Sie, wie künstliche Intelligenz die CAD-Modellierung revolutioniert und welche Möglichkeiten sich dadurch für Konstrukteure eröffnen...",
    category: "Innovation",
    date: "2024-03-20",
    readTime: "8 min",
    imageUrl: "https://picsum.photos/seed/featured-cad/1200/800",
    slug: "future-of-cad-optimization",
    content: ''
};

const latestPosts: BlogPost[] = [
  // Add 6-8 recent posts
];



export default function BlogMain() {
  return (
    <div className={styles.container}>
      {/* Hero Section */}
      <section className={styles.hero}>
        <div className={styles.heroContent}>
          <h1>CAD Blog & Insights</h1>
          <p>Expertenwissen, Tutorials und Best Practices rund um CAD und technische Dokumentation</p>
          <Link href="/blog/articles" className={styles.allArticlesButton}>
            Alle Artikel durchstöbern
            <FaArrowRight className={styles.buttonIcon} />
          </Link>
        </div>
      </section>

      {/* Featured Post Section */}
      <section className={styles.featuredSection}>
        <h2>Featured Article</h2>
        <Link href={`/blog/${featuredPost.slug}`} className={styles.featuredPost}>
          <div className={styles.featuredImageWrapper}>
            <Image
              src={featuredPost.imageUrl}
              alt={featuredPost.title}
              width={1200}
              height={800}
              priority
              className={styles.featuredImage}
            />
            <div className={styles.featuredOverlay}>
              <CategoryTag category={featuredPost.category} variant="featured" />
              <div className={styles.featuredMeta}>
                <span>{new Date(featuredPost.date).toLocaleDateString()}</span>
                <span className={styles.readTime}>
                  <FaClock />
                  {featuredPost.readTime}
                </span>
              </div>
            </div>
          </div>
          <div className={styles.featuredContent}>
            <h3>{featuredPost.title}</h3>
            <p>{featuredPost.excerpt}</p>
            <span className={styles.readMore}>
              Weiterlesen <FaArrowRight />
            </span>
          </div>
        </Link>
      </section>

  

      {/* Latest Posts */}
      <section className={styles.latestSection}>
        <div className={styles.sectionHeader}>
         
          <Link href="/blog/articles" className={styles.viewAllLink}>
            Alle anzeigen <FaArrowRight />
          </Link>
        </div>
        <div className={styles.latestGrid}>
          {latestPosts.map((post) => (
            <Link key={post.id} href={`/blog/${post.slug}`} className={styles.latestPost}>
              <div className={styles.latestImageContainer}>
                <Image
                  src={post.imageUrl}
                  alt={post.title}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className={styles.latestImage}
                />
                <div className={styles.latestCategory}>{post.category}</div>
              </div>
              <div className={styles.latestContent}>
                <h3>{post.title}</h3>
                <p>{post.excerpt}</p>
                <div className={styles.latestMeta}>
                  <span>{new Date(post.date).toLocaleDateString()}</span>
                  <span className={styles.readTime}>
                    <FaClock />
                    {post.readTime}
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
} 