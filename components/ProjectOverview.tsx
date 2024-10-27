"use client";
import React, { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import styles from '@/styles/ProjectOverview.module.css';
import { BiLinkExternal } from 'react-icons/bi';
import { 
  FiHeadphones, 
  FiClock, 
  FiList, 
  FiBarChart2,
  FiZap,
  FiSmartphone,
  FiLayout,
  FiAward,
  FiChevronLeft,
  FiChevronRight
} from 'react-icons/fi';
import '@glidejs/glide/dist/css/glide.core.css';
import Glide from '@glidejs/glide';  // Add this import if not already present

interface Feature {
  icon: React.ReactNode;
  text: string;
}

interface TechStack {
  [key: string]: string[];
}

interface Project {
  id: number;
  title: string;
  subtitle: string;
  description: string;
  images: string[];
  link: string;
  titleColor: string;
  linkColor: string;
  tags: string[];
  features: Feature[];
  techStack: TechStack;
}

const projects: Project[] = [
  {
    id: 1,
    title: 'Lo-Fi.Study',
    subtitle: 'Focus & Productivity Platform',
    description: 'An immersive study companion combining curated lo-fi music with advanced productivity tools. Built with modern web technologies, this platform delivers a distraction-free environment with customizable soundscapes, intelligent task management, and detailed progress analytics to optimize your study sessions.',
    images: ['/lofistudy2.png', '/lofistudy.png'],
    link: 'https://lo-fi.study',
    titleColor: '#ff7b00',
    linkColor: '#ff7b00',
    tags: ['Next.js 14', 'React', 'Web Audio API', 'Firebase', 'TypeScript'],
    features: [
      {
        icon: <FiHeadphones />,
        text: 'Curated Lo-Fi Music'
      },
      {
        icon: <FiClock />,
        text: 'Pomodoro Timer'
      },
      {
        icon: <FiList />,
        text: 'Task Management'
      },
      {
        icon: <FiBarChart2 />,
        text: 'Progress Analytics'
      }
    ],
    techStack: {
      frontend: ['React', 'Next.js', 'TypeScript', 'TailwindCSS'],
      backend: ['Firebase', 'Cloud Functions']
    }
  },
  {
    id: 2,
    title: 'Mousewerk.de',
    subtitle: 'Digital Agency Portfolio',
    description: 'A cutting-edge digital agency portfolio showcasing our expertise in web development and design. Featuring fluid animations, responsive layouts, and optimized performance metrics, the site demonstrates our commitment to creating exceptional digital experiences. Built with Next.js 14 and modern front-end technologies.',
    images: ['/mousewerk.png', '/mousewerk1.png'],
    link: 'https://mousewerk.de',
    titleColor: '#96ABC2',
    linkColor: '#96ABC2',
    tags: ['Next.js 14', 'React', 'TypeScript', 'CSS Modules'],
    features: [
      {
        icon: <FiLayout />,
        text: 'Modern UI/UX'
      },
      {
        icon: <FiZap />,
        text: 'Optimized Performance'
      },
      {
        icon: <FiSmartphone />,
        text: 'Responsive Design'
      },
      {
        icon: <FiAward />,
        text: 'Interactive Elements'
      }
    ],
    techStack: {
      frontend: ['Next.js 14', 'React', 'TypeScript', 'CSS Modules'],
    }
  }
];

export default function ProjectOverview() {
  const [isClient, setIsClient] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState<Record<number, number>>({});
  const [activeProject, setActiveProject] = useState<number | null>(null);
  const glideRefs = useRef<{ [key: string]: Glide }>({});
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    setIsClient(true);
  }, []);

  useEffect(() => {
    if (isClient) {
      projects.forEach((project) => {
        if (project.images.length > 1) {
          const glide = new Glide(`#glide-${project.id}`, {
            type: 'carousel',
            perView: 1,
            gap: 0,
            autoplay: 5000,
          });

          glide.on(['mount.after', 'run'], () => {
            setCurrentImageIndex(prev => ({
              ...prev,
              [project.id]: glide.index
            }));
          });

          glide.mount();
          glideRefs.current[project.id] = glide;
        }
      });

      return () => {
        Object.values(glideRefs.current).forEach((glide: Glide) => {
          if (glide && typeof glide.destroy === 'function') {
            glide.destroy();
          }
        });
      };
    }
  }, [isClient]);

  const handleProjectHover = (projectId: number | null) => {
    setActiveProject(projectId);
  };

  return (
    <section id="projects" className={styles.projectOverview} ref={sectionRef}>
      <div className={styles.titleContainer}>
        <span className={styles.preTitle}>Featured Work</span>
        <h2 className={styles.sectionTitle}>Our Projects</h2>
        <div className={styles.titleUnderline}></div>
      </div>

      {projects.map((project, index) => (
        <div 
          key={project.id} 
          className={`${styles.projectSection} ${index % 2 === 0 ? styles.even : styles.odd}`}
          onMouseEnter={() => handleProjectHover(project.id)}
          onMouseLeave={() => handleProjectHover(null)}
        >
          <div className={styles.projectContent}>
            <div className={styles.projectHeader}>
              <div className={styles.projectTitleWrapper}>
                <span className={styles.projectSubtitle}>{project.subtitle}</span>
                <h3 
                  className={styles.projectTitle}
                  style={{ color: activeProject === project.id ? project.titleColor : undefined }}
                >
                  {project.title}
                </h3>
              </div>
              <div className={styles.tagContainer}>
                {project.tags.map((tag, i) => (
                  <span 
                    key={i} 
                    className={styles.tag}
                    style={{ 
                      borderColor: project.titleColor,
                      color: activeProject === project.id ? project.titleColor : undefined
                    }}
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
            
            <p 
              className={styles.projectDescription}
              style={{ 
                '--accent-color': project.titleColor 
              } as React.CSSProperties}
            >
              {project.description}
            </p>
            
            <div className={styles.featureGrid}>
              {project.features.map((feature, i) => (
                <div 
                  key={i} 
                  className={styles.featureItem}
                >
                  <div 
                    className={styles.featureIcon}
                    style={{ color: project.titleColor }}
                  >
                    {feature.icon}
                  </div>
                  <span className={styles.featureText}>{feature.text}</span>
                </div>
              ))}
            </div>

            <div className={styles.techStack}>
              {Object.entries(project.techStack).map(([category, technologies]) => (
                <div key={category} className={styles.techCategory}>
                  <h4 className={styles.techTitle}>
                    {category.charAt(0).toUpperCase() + category.slice(1)}
                  </h4>
                  <div className={styles.techList}>
                    {technologies.map((tech, i) => (
                      <span 
                        key={i} 
                        className={styles.techItem}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            <Link 
              href={project.link} 
              className={styles.projectLink}
              style={{ backgroundColor: project.linkColor }}
              target="_blank"
              rel="noopener noreferrer"
            >
              <span>Visit Site</span>
              <BiLinkExternal className={styles.linkIcon} />
            </Link>
          </div>

          <div className={styles.projectImageWrapper}>
            <div className={styles.browserFrame}>
              <div className={styles.browserHeader}>
                <div className={styles.browserDots}>
                  <span></span>
                  <span></span>
                  <span></span>
                </div>
                <div className={styles.browserUrl}>
                  {project.link}
                </div>
              </div>
              <div className={styles.browserContent}>
                {isClient && project.images.length > 0 && (
                  <div id={`glide-${project.id}`} className="glide">
                    <div className="glide__track" data-glide-el="track">
                      <ul className="glide__slides">
                        {project.images.map((image, imageIndex) => (
                          <li key={imageIndex} className="glide__slide">
                            <div className={styles.imageContainer}>
                              <Image
                                src={image}
                                alt={`${project.title} screenshot ${imageIndex + 1}`}
                                fill
                                style={{ objectFit: 'cover' }}
                                priority={imageIndex === 0}
                                quality={95}
                                sizes="(max-width: 768px) 100vw, 50vw"
                              />
                            </div>
                          </li>
                        ))}
                      </ul>
                    </div>
                    {project.images.length > 1 && (
                      <>
                        <div className={styles.glideArrows} data-glide-el="controls">
                          <button 
                            className={`${styles.glideArrow} ${styles.glideArrowPrev}`} 
                            data-glide-dir="<"
                            aria-label="Previous image"
                          >
                            <FiChevronLeft />
                          </button>
                          <button 
                            className={`${styles.glideArrow} ${styles.glideArrowNext}`} 
                            data-glide-dir=">"
                            aria-label="Next image"
                          >
                            <FiChevronRight />
                          </button>
                        </div>
                        <div className={styles.glideBullets} data-glide-el="controls[nav]">
                          {project.images.map((_, bulletIndex) => (
                            <button
                              key={bulletIndex}
                              className={`${styles.glideBullet} ${
                                currentImageIndex[project.id] === bulletIndex ? styles.glideBulletActive : ''
                              }`}
                              data-glide-dir={`=${bulletIndex}`}
                              aria-label={`Go to slide ${bulletIndex + 1}`}
                              style={{ 
                                backgroundColor: currentImageIndex[project.id] === bulletIndex ? project.titleColor : undefined,
                                borderColor: project.titleColor
                              }}
                            />
                          ))}
                        </div>
                      </>
                    )}
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      ))}
    </section>
  );
}
