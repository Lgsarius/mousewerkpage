// Pfad zur Datei: /components/ProjectOverview.tsx

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
import Glide from '@glidejs/glide';

// Interfaces in eine separate Datei verschieben
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
  link?: string;  // Link optional mit '?'
  titleColor: string;
  linkColor: string;
  tags: string[];
  features: Feature[];
  techStack: TechStack;
}

// Projektdaten in eine separate Datei verschieben
const projects: Project[] = [
  {
    id: 1,
    title: 'Lo-Fi.Study',
    subtitle: 'Fokus- & Produktivitätsplattform',
    description: 'Ein immersiver Lernbegleiter, der kuratierte Lo-Fi-Musik mit fortschrittlichen Produktivitätstools kombiniert. Entwickelt mit modernen Webtechnologien bietet diese Plattform eine ablenkungsfreie Umgebung mit anpassbaren Klanglandschaften, intelligentem Aufgabenmanagement und detaillierten Fortschrittsanalysen zur Optimierung Ihrer Lernsitzungen.',
    images: ['/lofistudy2.png', '/lofistudy.png'],
    link: 'https://lo-fi.study',
    titleColor: '#ff7b00',
    linkColor: '#ff7b00',
    tags: ['Next.js 14', 'React', 'Web Audio API', 'Firebase', 'TypeScript'],
    features: [
      {
        icon: <FiHeadphones />,
        text: 'Kuratierte Lo-Fi Musik'
      },
      {
        icon: <FiClock />,
        text: 'Pomodoro-Timer'
      },
      {
        icon: <FiList />,
        text: 'Aufgabenverwaltung'
      },
      {
        icon: <FiBarChart2 />,
        text: 'Fortschrittsanalyse'
      }
    ],
    techStack: {
      frontend: ['React', 'Next.js 14', 'TypeScript', 'TailwindCSS'],
      backend: ['Firebase', 'Cloud Functions']
    }
  },
  {
    id: 2,
    title: 'Mousewerk.de',
    subtitle: 'Digitalagentur Portfolio',
    description: 'Ein hochmodernes Portfolio einer Digitalagentur, das unsere Expertise in Webentwicklung und Design präsentiert. Mit flüssigen Animationen, responsiven Layouts und optimierten Leistungsmetriken demonstriert die Website unser Engagement für außergewöhnliche digitale Erlebnisse.',
    images: ['/mousewerk.png', '/mousewerk1.png'],
    link: 'https://mousewerk.de',
    titleColor: '#96ABC2',
    linkColor: '#96ABC2',
    tags: ['Next.js 14', 'React', 'TypeScript', 'CSS Modules'],
    features: [
      {
        icon: <FiLayout />,
        text: 'Modernes UI/UX'
      },
      {
        icon: <FiZap />,
        text: 'Optimierte Leistung'
      },
      {
        icon: <FiSmartphone />,
        text: 'Responsives Design'
      },
      {
        icon: <FiAward />,
        text: 'Interaktive Elemente'
      }
    ],
    techStack: {
      frontend: ['Next.js 14', 'React', 'TypeScript', 'CSS Modules'],
    }
  },
  {
    id: 3,
    title: 'Bayerisches Restaurant Homepage',
    subtitle: 'Traditionelles bayerisches Restaurant Homepage',
    description: 'Eine authentische Website für ein bayerisches Restaurant, die traditionelle Ästhetik mit moderner Funktionalität kombiniert. Zu den Funktionen gehören ein interaktives Menü, Tischreservierungen und ein Event-Buchungssystem. Das Design betont den Charme des Restaurants und bietet gleichzeitig eine nahtlose Benutzererfahrung für lokale und touristische Kunden.',
    images: ['/restaurant.png', '/restaurant2.png'],
    titleColor: '#8B4513',
    linkColor: '#8B4513',
    tags: ['Next.js 14', 'React', 'Reservierungssystem', 'Internationalisierung'],
    features: [
      {
        icon: <FiLayout />,
        text: 'Interaktives Menü'
      },
      {
        icon: <FiZap />,
        text: 'Online-Reservierungen'
      },
      {
        icon: <FiSmartphone />,
        text: 'Mehrsprachigkeit'
      },
      {
        icon: <FiAward />,
        text: 'Eventplanung'
      }
    ],
    techStack: {
      frontend: ['Next.js 14', 'React', 'TypeScript', 'i18n'],
      backend: ['CMS', 'PostgreSQL']
    }
  },
  {
    id: 4,
    title: 'StudyHub',
    subtitle: 'Plattform für Studententools',
    description: 'Eine umfassende Bildungsplattform mit kostenlosen Tools und Ressourcen, die Studenten unterstützen, um in ihrem Studium zu glänzen. Zu den Funktionen gehören Lernleitfäden, Rechenwerkzeuge, Formelsammlungen und interaktive Lernmaterialien. Entwickelt mit Schwerpunkt auf Benutzerfreundlichkeit und Barrierefreiheit.',
    images: ['/study.png', '/study2.png', '/study3.png'],
    titleColor: '#4A90E2',
    linkColor: '#4A90E2',
    tags: ['Next.js 14', 'React', 'Bildungstools', 'Interaktives Lernen'],
    features: [
      {
        icon: <FiLayout />,
        text: 'Lernleitfäden'
      },
      {
        icon: <FiZap />,
        text: 'Rechenwerkzeuge'
      },
      {
        icon: <FiSmartphone />,
        text: 'Formeldatenbank'
      },
      {
        icon: <FiAward />,
        text: 'Übungstests'
      }
    ],
    techStack: {
      frontend: ['Next.js 14', 'React', 'TypeScript', 'TailwindCSS'],
      backend: ['MongoDB']
    }
  }
];

const ProjectOverview: React.FC = () => {
  const [isClient, setIsClient] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState<Record<number, number>>({});
  const [activeProject, setActiveProject] = useState<number | null>(null);
  const glideRefs = useRef<Record<string, Glide>>({});
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    setIsClient(true);
  }, []);

  useEffect(() => {
    if (!isClient) return;

    const glideInstances: Record<string, Glide> = {};

    const initializeGlide = () => {
      projects.forEach((project) => {
        if (project.images.length <= 1) return;

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
        glideInstances[project.id] = glide;
        glideRefs.current[project.id] = glide;
      });
    };

    initializeGlide();

    return () => {
      Object.values(glideInstances).forEach((glide) => {
        if (glide?.destroy) {
          glide.destroy();
        }
      });
    };
  }, [isClient]);

  const handleProjectHover = (projectId: number | null) => {
    setActiveProject(projectId);
  };

  const renderProjectImage = (project: Project) => {
    if (!isClient || project.images.length === 0) return null;

    return (
      <div id={`glide-${project.id}`} className="glide">
        <div className="glide__track" data-glide-el="track">
          <ul className="glide__slides">
            {project.images.map((image, imageIndex) => (
              <li key={imageIndex} className="glide__slide">
                <div className={styles.imageContainer}>
                  <Image
                    src={image}
                    alt={`${project.title} Screenshot ${imageIndex + 1}`}
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
        {renderGlideControls(project)}
      </div>
    );
  };

  const renderGlideControls = (project: Project) => {
    if (project.images.length <= 1) return null;

    return (
      <>
        <div className={styles.glideArrows} data-glide-el="controls">
          <button 
            className={`${styles.glideArrow} ${styles.glideArrowPrev}`} 
            data-glide-dir="<"
            aria-label="Vorheriges Bild"
          >
            <FiChevronLeft />
          </button>
          <button 
            className={`${styles.glideArrow} ${styles.glideArrowNext}`} 
            data-glide-dir=">"
            aria-label="Nächstes Bild"
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
              aria-label={`Gehe zu Slide ${bulletIndex + 1}`}
              style={{ 
                backgroundColor: currentImageIndex[project.id] === bulletIndex ? project.titleColor : undefined,
                borderColor: project.titleColor
              }}
            />
          ))}
        </div>
      </>
    );
  };

  return (
    <section id="projects" className={styles.projectOverview} ref={sectionRef}>
      <div className={styles.titleContainer}>
        <span className={styles.preTitle}>Ausgewählte Arbeiten</span>
        <h2 className={styles.sectionTitle}>Unsere Projekte</h2>
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

            {project.link ? (
              <Link 
                href={project.link} 
                className={styles.projectLink}
                style={{ backgroundColor: project.linkColor }}
                target="_blank"
                rel="noopener noreferrer"
              >
                <span>Website besuchen</span>
                <BiLinkExternal className={styles.linkIcon} />
              </Link>
            ) : null}

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
                {renderProjectImage(project)}
              </div>
            </div>
          </div>
        </div>
      ))}
    </section>
  );
};

export default ProjectOverview;
