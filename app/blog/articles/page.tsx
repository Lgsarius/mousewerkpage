"use client";
import { useState } from 'react';
import styles from '@/styles/BlogArticles.module.css';
import BlogSidebar from '@/components/blog/BlogSidebar';
import BlogCard from '@/components/blog/BlogCard';
import { BlogPost } from '@/types/blog';
import { FaArrowLeft } from 'react-icons/fa';
import Link from 'next/link';

// Mock data with picsum.photos placeholder images
const mockPosts: BlogPost[] = [
  {
      id: 1,
      title: "CAD-Optimierung für bessere Performance",
      excerpt: "Lernen Sie, wie Sie Ihre CAD-Modelle für maximale Leistung optimieren können...",
      category: "Optimierung",
      date: "2024-03-15",
      readTime: "5 min",
      imageUrl: "https://picsum.photos/seed/cad1/800/600",
      slug: "cad-optimization-performance",
      content: ''
  },
  {
      id: 2,
      title: "Effiziente Datenkonvertierung im CAD-Workflow",
      excerpt: "Entdecken Sie die besten Praktiken für die Konvertierung von CAD-Daten...",
      category: "Konvertierung",
      date: "2024-03-10",
      readTime: "7 min",
      imageUrl: "https://picsum.photos/seed/cad2/800/600",
      slug: "efficient-data-conversion",
      content: ''
  },
  {
      id: 3,
      title: "Best Practices für CAD-Modellierung",
      excerpt: "Die wichtigsten Grundsätze für effiziente und wartbare CAD-Modelle...",
      category: "Best Practices",
      date: "2024-03-08",
      readTime: "10 min",
      imageUrl: "https://picsum.photos/seed/cad3/800/600",
      slug: "cad-modeling-best-practices",
      content: ''
  },
  {
      id: 4,
      title: "Tutorial: Fortgeschrittene CAD-Techniken",
      excerpt: "Schritt-für-Schritt-Anleitung zu fortgeschrittenen Modellierungstechniken...",
      category: "Tutorials",
      date: "2024-03-05",
      readTime: "15 min",
      imageUrl: "https://picsum.photos/seed/cad4/800/600",
      slug: "advanced-cad-techniques",
      content: ''
  },
  {
      id: 5,
      title: "Neue Features in CAD-Software 2024",
      excerpt: "Ein Überblick über die wichtigsten Neuerungen in führenden CAD-Programmen...",
      category: "News",
      date: "2024-03-01",
      readTime: "6 min",
      imageUrl: "https://picsum.photos/seed/cad5/800/600",
      slug: "cad-software-updates-2024",
      content: ''
  },
  {
      id: 6,
      title: "Automatisierung im CAD-Workflow",
      excerpt: "Wie Sie repetitive Aufgaben in Ihrem CAD-Workflow automatisieren können...",
      category: "Optimierung",
      date: "2024-02-28",
      readTime: "8 min",
      imageUrl: "https://picsum.photos/seed/cad6/800/600",
      slug: "cad-workflow-automation",
      content: ''
  },
  {
      id: 7,
      title: "CAD-Daten sicher archivieren",
      excerpt: "Best Practices für die langfristige Archivierung von CAD-Daten...",
      category: "Best Practices",
      date: "2024-02-25",
      readTime: "9 min",
      imageUrl: "https://picsum.photos/seed/cad7/800/600",
      slug: "cad-data-archiving",
      content: ''
  },
  {
      id: 8,
      title: "Einführung in parametrisches Design",
      excerpt: "Grundlagen des parametrischen Designs in modernen CAD-Systemen...",
      category: "Tutorials",
      date: "2024-02-20",
      readTime: "12 min",
      imageUrl: "https://picsum.photos/seed/cad8/800/600",
      slug: "parametric-design-intro",
      content: ''
  }
];

const categories = [
  "Optimierung",
  "Konvertierung",
  "Best Practices",
  "Tutorials",
  "News"
];

export default function BlogArticles() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);

  const filteredPosts = mockPosts.filter(post => {
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategories.length === 0 || 
                           selectedCategories.includes(post.category);
    return matchesSearch && matchesCategory;
  });

  return (
    <div className={styles.articlesContainer}>
      <div className={styles.articlesHeader}>
        <Link href="/blog" className={styles.backLink}>
          <FaArrowLeft />
          Zurück zum Blog
        </Link>
        <h1>Alle Artikel</h1>
        <p>Durchsuchen Sie unsere Sammlung an Artikeln und Tutorials</p>
      </div>
      
      <div className={styles.articlesContent}>
        <BlogSidebar 
          categories={categories}
          selectedCategories={selectedCategories}
          setSelectedCategories={setSelectedCategories}
          searchTerm={searchTerm}
          setSearchTerm={setSearchTerm}
        />
        
        <div className={styles.articlesGrid}>
          {filteredPosts.length > 0 ? (
            <>
              <div className={styles.resultsInfo}>
                {filteredPosts.length} {filteredPosts.length === 1 ? 'Artikel' : 'Artikel'} gefunden
              </div>
              <div className={styles.postsGrid}>
                {filteredPosts.map(post => (
                  <BlogCard key={post.id} post={post} />
                ))}
              </div>
            </>
          ) : (
            <div className={styles.noResults}>
              <h3>Keine Artikel gefunden</h3>
              <p>Versuchen Sie es mit anderen Suchbegriffen oder Kategorien.</p>
              {(searchTerm || selectedCategories.length > 0) && (
                <button 
                  className={styles.resetButton}
                  onClick={() => {
                    setSearchTerm("");
                    setSelectedCategories([]);
                  }}
                >
                  Filter zurücksetzen
                </button>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
} 