/* eslint-disable */
"use client";
import React, { useState, useEffect, lazy, Suspense } from 'react';
import styles from '@/styles/ProjectOverview.module.css';
import { 
  FaDrawPolygon, 
  FaFileImport, 
  FaTools, 
  FaCog, 
  FaCheck, 
  FaArrowRight,
  FaRobot,
  FaDatabase,
  FaSearch
} from 'react-icons/fa';
import Link from 'next/link';
import dynamic from 'next/dynamic';

interface Feature {
  icon: React.ReactNode;
  text: string;
}

interface Service {
  id: number;
  title: string;
  subtitle: string;
  description: string;
  modelPath: string;
  link: string;
  titleColor: string;
  features: Feature[];
  benefits: string[];
}

const services: Service[] = [
  {
    id: 1,
    title: 'CAD-Optimierung',
    subtitle: 'Maximale Effizienz durch optimierte Daten',
    description: 'Wir optimieren Ihre CAD-Modelle für bessere Performance und Qualität. Durch professionelle Fehlerbereinigung und Geometrieoptimierung erreichen wir maximale Effizienz bei minimaler Dateigröße.',
    modelPath: '/static/models/2CylinderEngine.gltf',
    link: '/services/cad-optimization',
    titleColor: '#96ABC2',
    features: [
      { icon: <FaDrawPolygon />, text: 'Geometrieoptimierung' },
      { icon: <FaCog />, text: 'Fehlerbereinigung' },
      { icon: <FaTools />, text: 'Datenkomprimierung' },
      { icon: <FaSearch />, text: 'Qualitätskontrolle' }
    ],
    benefits: [
      'Reduzierte Dateigrößen',
      'Verbesserte Performance',
      'Fehlerfreie Geometrie',
      'Optimierte Verarbeitungszeit'
    ]
  },
  {
    id: 2,
    title: 'Datenkonvertierung',
    subtitle: 'Nahtlose Formatumwandlung',
    description: 'Professionelle Konvertierung Ihrer CAD-Daten in alle gängigen Formate. Wir gewährleisten dabei höchste Präzision und Datenqualität bei der Umwandlung.',
    modelPath: '/static/models/2CylinderEngine.gltf',
    link: '/services/data-conversion',
    titleColor: '#4A90E2',
    features: [
      { icon: <FaFileImport />, text: 'Format-Konvertierung' },
      { icon: <FaDatabase />, text: 'Datenaufbereitung' },
      { icon: <FaCheck />, text: 'Qualitätssicherung' },
      { icon: <FaCog />, text: 'Format-Anpassung' }
    ],
    benefits: [
      'Alle gängigen Formate',
      'Erhalt der Modellqualität',
      'Schnelle Bearbeitung',
      'Zuverlässige Konvertierung'
    ]
  },
  {
    id: 3,
    title: 'Spezialfälle',
    subtitle: 'Maßgeschneiderte Lösungen',
    description: 'Individuelle Lösungen für komplexe CAD-Herausforderungen. Von Reverse Engineering bis zur Aufbereitung von Legacy-Daten finden wir die optimale Lösung für Ihre speziellen Anforderungen.',
    modelPath: '/static/models/2CylinderEngine.gltf',
    link: '/services/special-cases',
    titleColor: '#FF7B00',
    features: [
      { icon: <FaRobot />, text: 'Reverse Engineering' },
      { icon: <FaDatabase />, text: 'Legacy-Daten' },
      { icon: <FaTools />, text: 'Sonderanfertigungen' },
      { icon: <FaCog />, text: 'Spezialanpassungen' }
    ],
    benefits: [
      'Individuelle Lösungen',
      'Flexible Anpassung',
      'Technische Beratung',
      'Innovative Ansätze'
    ]
  }
];

const ModelLoader = ({ color = '#4A90E2' }) => (
  <div className={styles.modelLoader}>
    <div className={styles.blueprint}>
      <div className={styles.loaderContainer}>
        <div className={styles.spinner} style={{ borderColor: color }}></div>
        <div className={styles.progressRing} style={{ borderColor: color }}></div>
        <div className={styles.cube}>
          <div className={styles.face} style={{ backgroundColor: color }}></div>
          <div className={styles.face} style={{ backgroundColor: color }}></div>
          <div className={styles.face} style={{ backgroundColor: color }}></div>
        </div>
      </div>
      <span style={{ color }}>Loading Model...</span>
    </div>
  </div>
);

// Lazy load the CADViewer component
const CADViewer = lazy(() => import('./CADViewer'));

const ServicesOverview: React.FC = () => {
  const [visibleServices, setVisibleServices] = useState<number[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const serviceId = Number(entry.target.getAttribute('data-service-id'));
            setVisibleServices(prev => [...prev, serviceId]);
          }
        });
      },
      {
        rootMargin: '100px',
        threshold: 0.1
      }
    );

    document.querySelectorAll('[data-service-id]').forEach(el => {
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <section className={styles.servicesOverview}>
      <div className={styles.titleContainer}>
        <span className={styles.preTitle} style={{ color: '#96ABC2' }}>Unsere Expertise</span>
        <h2 className={styles.sectionTitle} style={{ color: '#ffffff' }}>CAD-Dienstleistungen</h2>
        <div className={styles.titleUnderline} style={{ backgroundColor: '#96ABC2' }}></div>
      </div>

      {services.map((service, index) => (
        <div 
          key={service.id}
          data-service-id={service.id}
          className={`${styles.serviceSection} ${index % 2 === 0 ? styles.even : styles.odd}`}
        >
          <div className={styles.serviceContent}>
            <div className={styles.serviceHeader}>
              <span className={styles.serviceSubtitle}>{service.subtitle}</span>
              <h3 className={styles.serviceTitle}>{service.title}</h3>
            </div>
            
            <p className={styles.serviceDescription}>
              {service.description}
            </p>
            
            <div className={styles.featureGrid}>
              {service.features.map((feature, i) => (
                <div 
                  key={i} 
                  className={styles.featureItem}
                  role="button"
                  tabIndex={0}
                >
                  <div 
                    className={styles.featureIcon}
                    style={{ color: service.titleColor }}
                  >
                    {feature.icon}
                  </div>
                  <span className={styles.featureText}>{feature.text}</span>
                </div>
              ))}
            </div>

            <div className={styles.benefitsList}>
              {service.benefits.map((benefit, i) => (
                <div key={i} className={styles.benefitItem}>
                  <FaCheck className={styles.checkIcon} />
                  <span>{benefit}</span>
                </div>
              ))}
            </div>

            <Link 
              href={service.link} 
              className={styles.serviceLink}
              style={{ backgroundColor: service.titleColor }}
            >
              <span>Mehr erfahren</span>
              <FaArrowRight className={styles.arrowIcon} />
            </Link>
          </div>

          <div className={styles.serviceImageWrapper}>
            <div className={styles.cadInterface}>
              <div className={styles.cadHeader}>
                <div className={styles.cadControls}>
                  <div className={styles.cadControl} style={{ background: '#ff5f57' }}></div>
                  <div className={styles.cadControl} style={{ background: '#ffbd2e' }}></div>
                  <div className={styles.cadControl} style={{ background: '#28c940' }}></div>
                </div>
                <div className={styles.cadTabs}>
                  <div className={styles.cadTab + ' ' + styles.active}>
                    <span className={styles.tabIcon}>📐</span>
                    {service.title}.model
                  </div>
                  <div className={styles.cadTab}>
                    <span className={styles.tabIcon}>🔧</span>
                    Properties
                  </div>
                </div>
              </div>
              
              <div className={styles.cadToolbar}>
                {/* Main Tools */}
                <div className={styles.toolSection}>
                  <div className={`${styles.cadTool} ${styles.active}`}>
                    <span className={styles.toolIcon}>⚡</span>
                    <span className={styles.toolHint}>Select</span>
                  </div>
                  <div className={styles.cadTool}>
                    <span className={styles.toolIcon}>✋</span>
                    <span className={styles.toolHint}>Pan</span>
                  </div>
                  <div className={styles.cadTool}>
                    <span className={styles.toolIcon}>🔄</span>
                    <span className={styles.toolHint}>Rotate</span>
                  </div>
                  <div className={styles.cadTool}>
                    <span className={styles.toolIcon}>🔍</span>
                    <span className={styles.toolHint}>Zoom</span>
                  </div>
                </div>

                {/* View Modes */}
                <div className={styles.toolSection}>
                  <div className={styles.sectionDivider}></div>
                  <div className={styles.cadTool}>
                    <span className={styles.toolIcon}>◯</span>
                    <span className={styles.toolHint}>Wireframe</span>
                  </div>
                  <div className={styles.cadTool}>
                    <span className={styles.toolIcon}>◗</span>
                    <span className={styles.toolHint}>Shaded</span>
                  </div>
                </div>

                {/* Measure */}
                <div className={styles.toolSection}>
                  <div className={styles.sectionDivider}></div>
                  <div className={styles.cadTool}>
                    <span className={styles.toolIcon}>📏</span>
                    <span className={styles.toolHint}>Measure</span>
                  </div>
                </div>
              </div>

              <div className={styles.assetTree}>
                <div className={styles.treeHeader}>
                  <span className={styles.treeTitle}>Model Structure</span>
                </div>
                <div className={styles.treeContent}>
                  <div className={styles.treeItem}>
                    <span className={styles.treeIcon}>📁</span>
                    <span className={styles.treeName}>Assembly</span>
                  </div>
                  <div className={`${styles.treeItem} ${styles.treeItemChild}`}>
                    <span className={styles.treeIcon}>⚙️</span>
                    <span className={styles.treeName}>Main Body</span>
                  </div>
                  <div className={`${styles.treeItem} ${styles.treeItemChild}`}>
                    <span className={styles.treeIcon}>⚙️</span>
                    <span className={styles.treeName}>Components</span>
                  </div>
                  <div className={`${styles.treeItem} ${styles.treeItemChild} ${styles.treeItemNested}`}>
                    <span className={styles.treeIcon}>🔧</span>
                    <span className={styles.treeName}>Part_001</span>
                  </div>
                  <div className={`${styles.treeItem} ${styles.treeItemChild} ${styles.treeItemNested}`}>
                    <span className={styles.treeIcon}>🔧</span>
                    <span className={styles.treeName}>Part_002</span>
                  </div>
                </div>
              </div>

              <div className={styles.modelViewerContainer}>
                <div className={styles.viewportGrid}></div>
                <div className={styles.viewportStatus}>
                  <div className={styles.statusItem}>
                    <span>X: 0.000</span>
                    <span>Y: 0.000</span>
                    <span>Z: 0.000</span>
                  </div>
                  <div className={styles.statusItem}>Scale: 1:1</div>
                  <div className={styles.statusItem}>View: Isometric</div>
                </div>
                <div className={styles.axisIndicator}>
                  <div className={styles.axisGroup}>
                    <div className={styles.axisLine + ' ' + styles.xAxis}></div>
                    <span className={styles.axisLabel + ' ' + styles.xLabel}>X</span>
                  </div>
                  <div className={styles.axisGroup}>
                    <div className={styles.axisLine + ' ' + styles.yAxis}></div>
                    <span className={styles.axisLabel + ' ' + styles.yLabel}>Y</span>
                  </div>
                  <div className={styles.axisGroup}>
                    <div className={styles.axisLine + ' ' + styles.zAxis}></div>
                    <span className={styles.axisLabel + ' ' + styles.zLabel}>Z</span>
                  </div>
                </div>
                
                <div className={styles.modelLoader}>
                  {visibleServices.includes(service.id) ? (
                    <Suspense fallback={<ModelLoader color={service.titleColor} />}>
                      <CADViewer
                        modelPath={service.modelPath}
                        modelColor={service.titleColor}
                      />
                    </Suspense>
                  ) : (
                    <ModelLoader color={service.titleColor} />
                  )}
                </div>

                <div className={styles.viewportGuides}>
                  <div className={styles.viewportCenter}>
                    <div className={styles.viewportCross}></div>
                    <div className={styles.centerPoint}></div>
                  </div>
                  <div className={styles.viewportDimensions}>
                    <div className={styles.dimensionLine}></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </section>
  );
};

export default ServicesOverview;
