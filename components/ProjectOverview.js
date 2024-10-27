import React, { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import styles from '../styles/ProjectOverview.module.css';


const projects = [
  {
    id: 1,
    title: 'Lo-Fi.Study',
    description: 'A study app with lo-fi music and productivity tools. Designed to enhance focus and improve study sessions with ambient sounds and intuitive task management.',
    images: [' /lofistudy2.png', '/lofistudy.png'],
    link: 'https://lo-fi.study',
    titleColor: '#ff7b00',
    linkColor: '#ff7b00',
  },
//   {
//     id: 2,
//     title: 'Barber Shop Example',
//     description: 'Description for another project...',
//     images: ['/another-project-preview.jpg', '/another-project-preview2.jpg'],
//     link: 'https://anotherproject.com',
//     titleColor: '#96abc2',
//     linkColor: '#96abc2',
//   },
];

export default function ProjectOverview() {
  const [isClient, setIsClient] = useState(false);
  const glideRefs = useRef({});

  useEffect(() => {
    setIsClient(true);
  }, []);

  useEffect(() => {
    if (isClient) {
      import('@glidejs/glide').then((Glide) => {
        projects.forEach((project) => {
          if (project.images.length > 1) {
            const glide = new Glide.default(`#glide-${project.id}`, {
              type: 'carousel',
              perView: 1,
              focusAt: 'center',
              gap: 0,
              autoplay: 5000,
            });
            glide.mount();
            glideRefs.current[project.id] = glide;
          }
        });
      });

      return () => {
        Object.values(glideRefs.current).forEach((glide) => {
          if (glide && typeof glide.destroy === 'function') {
            glide.destroy();
          }
        });
      };
    }
  }, [isClient]);

  return (
    <section id="projects" className={styles.projectOverview}>
      <div className={styles.titleContainer}>
        <h2 className={styles.sectionTitle}>Our Projects</h2>
        <div className={styles.titleUnderline}></div>
      </div>
      {projects.map((project, index) => (
        <div key={project.id} className={`${styles.projectSection} ${index % 2 === 0 ? styles.even : styles.odd}`}>
          <div className={styles.projectContent}>
            <h3 className={styles.projectTitle} style={{ color: project.titleColor }}>
              {project.title}
            </h3>
            <p className={styles.projectDescription}>{project.description}</p>
            <Link 
              href={project.link} 
              className={styles.projectLink}
              style={{ 
                backgroundColor: project.linkColor,
                color: '#1a1a1a',
              }}
            >
              Explore Project
            </Link>
          </div>
          <div className={styles.projectImageWrapper}>
            {isClient && (
              <div id={`glide-${project.id}`} className="glide">
                <div className="glide__track" data-glide-el="track">
                  <ul className="glide__slides">
                    {project.images.map((image, imageIndex) => (
                      <li key={imageIndex} className="glide__slide">
                        <Link href={project.link} className={styles.imageLink}>
                          <div className={styles.imageContainer}>
                            <img
                              src={image}
                              alt={`${project.title} - Image ${imageIndex + 1}`}
                              className={styles.projectImage}
                            />
                          </div>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
                {project.images.length > 1 && (
                  <div className="glide__bullets" data-glide-el="controls[nav]">
                    {project.images.map((_, bulletIndex) => (
                      <button key={bulletIndex} className="glide__bullet" data-glide-dir={`=${bulletIndex}`}></button>
                    ))}
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
      ))}
    </section>
  );
}
