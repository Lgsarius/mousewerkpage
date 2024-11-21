"use client";
import { useParams } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import styles from '@/styles/BlogPost.module.css';
import { FaArrowLeft, FaClock, FaTag, FaShare } from 'react-icons/fa';
import type { BlogPost } from '@/types/blog';

// Mock data - should match your articles page data
export const mockPosts: BlogPost[] = [
    {
      id: 1,
      title: "CAD-Optimierung für bessere Performance",
      excerpt: "Lernen Sie, wie Sie Ihre CAD-Modelle für maximale Leistung optimieren können...",
      category: "Optimierung",
      date: "2024-03-15",
      readTime: "5 min",
      imageUrl: "https://picsum.photos/seed/cad1/800/600",
      slug: "cad-optimization-performance",
      content: `
        <h2>Einführung in CAD-Optimierung</h2>
        <p>Die Optimierung von CAD-Modellen ist ein entscheidender Schritt für effiziente Arbeitsabläufe in der modernen Produktentwicklung. Gut optimierte Modelle führen nicht nur zu schnelleren Ladezeiten, sondern auch zu einer verbesserten Zusammenarbeit im Team.</p>
        
        <h2>Wichtige Optimierungsstrategien</h2>
        <p>Um die beste Performance aus Ihren CAD-Modellen herauszuholen, sollten Sie folgende Strategien berücksichtigen:</p>
        <ul>
          <li><strong>Reduzierung der Komplexität:</strong> Vereinfachen Sie Geometrien, wo es möglich ist, ohne die Funktionalität zu beeinträchtigen</li>
          <li><strong>Optimierung der Geometrie:</strong> Nutzen Sie effiziente Modellierungstechniken und vermeiden Sie unnötige Details</li>
          <li><strong>Effiziente Verwendung von Features:</strong> Strukturieren Sie Ihre Feature-Hierarchie sinnvoll und vermeiden Sie übermäßige Abhängigkeiten</li>
        </ul>
        
        <h3>1. Modellstruktur optimieren</h3>
        <p>Eine klare und logische Modellstruktur ist fundamental für die Performance. Beachten Sie dabei:</p>
        <ul>
          <li>Hierarchische Organisation von Features</li>
          <li>Sinnvolle Benennung von Komponenten</li>
          <li>Minimierung von Abhängigkeiten</li>
        </ul>
  
        <h3>2. Performance-Optimierung</h3>
        <p>Die Performance kann durch verschiedene Maßnahmen verbessert werden:</p>
        <ul>
          <li>Verwendung von Symmetrie wo möglich</li>
          <li>Optimierung von Patterns und Arrays</li>
          <li>Effiziente Nutzung von Referenzgeometrien</li>
        </ul>
  
        <h2>Werkzeuge und Techniken</h2>
        <p>Moderne CAD-Systeme bieten verschiedene Werkzeuge zur Optimierung:</p>
        <ul>
          <li>Analyse-Tools für Modellkomplexität</li>
          <li>Performance-Advisor</li>
          <li>Automatische Optimierungsfunktionen</li>
        </ul>
  
        <h2>Fazit</h2>
        <p>Die Optimierung von CAD-Modellen ist ein kontinuierlicher Prozess, der sich langfristig auszahlt. Durch die Anwendung der vorgestellten Strategien können Sie die Performance Ihrer Modelle deutlich verbessern und damit die Effizienz Ihrer Entwicklungsprozesse steigern.</p>
      `
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
      content: `
        <h2>Die Herausforderung der Datenkonvertierung</h2>
        <p>In der modernen Produktentwicklung ist der Austausch von CAD-Daten zwischen verschiedenen Systemen alltäglich. Die effiziente Konvertierung dieser Daten ist dabei entscheidend für reibungslose Workflows.</p>
  
        <h2>Grundlagen der CAD-Datenkonvertierung</h2>
        <p>Bei der Konvertierung von CAD-Daten gibt es verschiedene Aspekte zu beachten:</p>
        <ul>
          <li>Geometriegenauigkeit</li>
          <li>Metadaten-Übertragung</li>
          <li>Feature-Erhaltung</li>
        </ul>
  
        <h3>Gängige Dateiformate</h3>
        <p>Die wichtigsten Austauschformate im Überblick:</p>
        <ul>
          <li><strong>STEP:</strong> Standardformat für den Geometrieaustausch</li>
          <li><strong>IGES:</strong> Klassisches Format für einfache Geometrien</li>
          <li><strong>Parasolid:</strong> Hochpräzises Format für komplexe Modelle</li>
        </ul>
  
        <h2>Best Practices für die Konvertierung</h2>
        <p>Folgende Praktiken haben sich bewährt:</p>
        <ol>
          <li>Qualitätsprüfung vor der Konvertierung</li>
          <li>Wahl des geeigneten Zielformats</li>
          <li>Validierung nach der Konvertierung</li>
        </ol>
  
        <h3>Automatisierungsmöglichkeiten</h3>
        <p>Moderne Tools bieten verschiedene Möglichkeiten zur Automatisierung:</p>
        <ul>
          <li>Batch-Konvertierung</li>
          <li>API-Integration</li>
          <li>Workflow-Automation</li>
        </ul>
  
        <h2>Fazit und Ausblick</h2>
        <p>Eine effiziente Datenkonvertierung ist der Schlüssel zu erfolgreicher Zusammenarbeit in CAD-Projekten. Mit den richtigen Tools und Methoden lassen sich die Herausforderungen der Datenkonvertierung meistern.</p>
      `
    },
// Path: src/data/mockPosts.ts
{
    id: 3,
    title: "Best Practices für CAD-Modellierung",
    excerpt: "Die wichtigsten Grundsätze für effiziente und wartbare CAD-Modelle...",
    category: "Best Practices",
    date: "2024-03-08",
    readTime: "10 min",
    imageUrl: "https://picsum.photos/seed/cad3/800/600",
    slug: "cad-modeling-best-practices",
    content: `
      <h2>Einführung</h2>
      <p>Die CAD-Modellierung ist ein wesentlicher Bestandteil moderner Produktentwicklung. Ein durchdachter Ansatz hilft, Modelle effizient, wartbar und zukunftssicher zu gestalten. Dieser Artikel behandelt die wichtigsten Best Practices für eine professionelle CAD-Modellierung.</p>
  
      <h2>1. Planung vor der Modellierung</h2>
      <p>Eine sorgfältige Planung legt den Grundstein für ein gutes CAD-Modell. Bevor Sie beginnen:</p>
      <ul>
        <li><strong>Zieldefinition:</strong> Klären Sie, welche Anforderungen das Modell erfüllen muss.</li>
        <li><strong>Strukturplanung:</strong> Überlegen Sie, wie das Modell organisiert sein soll (z. B. Baugruppen, Komponenten).</li>
        <li><strong>Parameterfestlegung:</strong> Definieren Sie kritische Parameter und Toleranzen.</li>
      </ul>
  
      <h2>2. Verwendung von Parametern</h2>
      <p>Parametrische Modellierung ermöglicht flexible Anpassungen. Beachten Sie:</p>
      <ul>
        <li><strong>Schlüsseldimensionen:</strong> Legen Sie Parameter für kritische Maße an.</li>
        <li><strong>Konsistenz:</strong> Nutzen Sie einheitliche Benennungen für Parameter.</li>
        <li><strong>Verknüpfungen:</strong> Vermeiden Sie unnötige Abhängigkeiten, die Änderungen erschweren.</li>
      </ul>
  
      <h2>3. Modularer Aufbau</h2>
      <p>Ein modularer Aufbau verbessert die Übersichtlichkeit und erleichtert Änderungen:</p>
      <ul>
        <li><strong>Baugruppen:</strong> Teilen Sie komplexe Modelle in logische Baugruppen auf.</li>
        <li><strong>Standardkomponenten:</strong> Nutzen Sie wiederverwendbare Teile.</li>
        <li><strong>Versionierung:</strong> Arbeiten Sie mit Versionen, um Änderungen nachzuvollziehen.</li>
      </ul>
  
      <h2>4. Optimierung der Geometrie</h2>
      <p>Effiziente Geometrien sparen Rechenleistung und verbessern die Performance:</p>
      <ul>
        <li><strong>Vereinfachung:</strong> Entfernen Sie unnötige Details.</li>
        <li><strong>Symmetrie:</strong> Nutzen Sie Symmetrie, um redundante Arbeit zu vermeiden.</li>
        <li><strong>Analyse-Tools:</strong> Verwenden Sie integrierte Analysefunktionen, um Engpässe zu identifizieren.</li>
      </ul>
  
      <h2>5. Dokumentation</h2>
      <p>Eine gute Dokumentation erleichtert die Zusammenarbeit:</p>
      <ul>
        <li><strong>Kommentare:</strong> Kommentieren Sie wichtige Schritte im Modell.</li>
        <li><strong>Versionshinweise:</strong> Führen Sie eine Änderungsverfolgung.</li>
        <li><strong>Datenmanagement:</strong> Speichern Sie Modelle in einem zentralen System mit klaren Namenskonventionen.</li>
      </ul>
  
      <h2>6. Zusammenarbeit und Feedback</h2>
      <p>Effiziente Modelle entstehen oft durch Teamarbeit:</p>
      <ul>
        <li><strong>Review-Prozesse:</strong> Lassen Sie Modelle von Kollegen prüfen.</li>
        <li><strong>Kommunikation:</strong> Klären Sie Anforderungen regelmäßig mit dem Team.</li>
        <li><strong>Schulungen:</strong> Fördern Sie die Weiterbildung im Umgang mit CAD-Software.</li>
      </ul>
  
      <h2>Fazit</h2>
      <p>Die Anwendung dieser Best Practices hilft, CAD-Modelle effizient und zukunftssicher zu gestalten. Durch Planung, Modularität und Dokumentation wird nicht nur die Qualität verbessert, sondern auch die Zusammenarbeit erleichtert. Nutzen Sie diese Grundsätze, um Ihre Projekte erfolgreich umzusetzen.</p>
    `
  },
  
     // Path: src/data/mockPosts.ts
{
    id: 4,
    title: "Tutorial: Fortgeschrittene CAD-Techniken",
    excerpt: "Schritt-für-Schritt-Anleitung zu fortgeschrittenen Modellierungstechniken...",
    category: "Tutorials",
    date: "2024-03-05",
    readTime: "15 min",
    imageUrl: "https://picsum.photos/seed/cad4/800/600",
    slug: "advanced-cad-techniques",
    content: `
      <h2>Einleitung</h2>
      <p>Dieses Tutorial richtet sich an CAD-Profis, die ihre Fähigkeiten mit fortgeschrittenen Techniken erweitern möchten. Es deckt verschiedene fortgeschrittene Methoden ab, mit denen Sie komplexe Geometrien erstellen, Ihren Workflow optimieren und die Performance Ihrer Modelle verbessern können.</p>
  
      <h2>1. Komplexe Geometrien modellieren</h2>
      <h3>1.1 Verwendung von Splines</h3>
      <p>Splines ermöglichen es, organische und fließende Formen zu erstellen. Sie sind besonders nützlich in der Automobil- und Luftfahrtindustrie:</p>
      <ul>
        <li><strong>Kontrollpunkte:</strong> Passen Sie die Kontrollpunkte an, um präzise Kurven zu erstellen.</li>
        <li><strong>Flächenübergänge:</strong> Verwenden Sie tangentiale Verbindungen, um glatte Übergänge zu gewährleisten.</li>
        <li><strong>Bezier-Splines:</strong> Nutzen Sie Bezier-Kurven für präzise Steuerung der Geometrie.</li>
      </ul>
  
      <h3>1.2 Freiformmodellierung</h3>
      <p>Freiformwerkzeuge bieten maximale Flexibilität bei der Erstellung von komplexen Formen:</p>
      <ul>
        <li><strong>Flächenbearbeitung:</strong> Arbeiten Sie direkt an den Flächen Ihrer Modelle.</li>
        <li><strong>Skulpturiertechniken:</strong> Verwenden Sie Sculpting-Tools, um organische Formen zu verfeinern.</li>
        <li><strong>Deformationswerkzeuge:</strong> Modifizieren Sie Geometrien mit Biegungen, Verdrehungen oder Verzerrungen.</li>
      </ul>
  
      <h2>2. Parametrisches Design auf Expertenniveau</h2>
      <h3>2.1 Verwendung verschachtelter Parameter</h3>
      <p>Erstellen Sie Parameter, die aufeinander basieren, um hochgradig anpassbare Modelle zu erstellen:</p>
      <ul>
        <li><strong>Abhängigkeiten:</strong> Nutzen Sie Formeln, um Parameter miteinander zu verknüpfen.</li>
        <li><strong>Variable Konfigurationen:</strong> Erstellen Sie mehrere Versionen eines Modells mit derselben Grundstruktur.</li>
        <li><strong>Automatische Updates:</strong> Passen Sie verknüpfte Parameter an, um alle abhängigen Elemente zu aktualisieren.</li>
      </ul>
  
      <h3>2.2 Einsatz von Design-Tabellen</h3>
      <p>Mit Design-Tabellen können Sie komplexe Variationen eines Modells schnell erstellen:</p>
      <ul>
        <li>Erstellen Sie Tabellen in Ihrer CAD-Software oder importieren Sie externe Tabellen.</li>
        <li>Nutzen Sie Tabellen, um Parameter systematisch zu ändern.</li>
        <li>Automatisieren Sie die Erstellung mehrerer Modellvarianten.</li>
      </ul>
  
      <h2>3. Effiziente Verwendung von Baugruppen</h2>
      <h3>3.1 Baugruppenhierarchie</h3>
      <p>Organisieren Sie Baugruppen sinnvoll, um den Überblick über große Projekte zu behalten:</p>
      <ul>
        <li><strong>Top-Down-Ansatz:</strong> Entwickeln Sie Baugruppen von der obersten Ebene aus.</li>
        <li><strong>Referenzen:</strong> Vermeiden Sie zirkuläre Abhängigkeiten zwischen Komponenten.</li>
        <li><strong>Flexible Baugruppen:</strong> Erlauben Sie Bewegungen oder Anpassungen innerhalb der Baugruppe.</li>
      </ul>
  
      <h3>3.2 Verwendung von Mate-Features</h3>
      <p>Mate-Features erleichtern die Positionierung und Verbindung von Komponenten:</p>
      <ul>
        <li><strong>Standard-Mates:</strong> Verwenden Sie Coincident, Parallel oder Tangent für grundlegende Verbindungen.</li>
        <li><strong>Erweiterte Mates:</strong> Nutzen Sie Winkel- oder Pfad-Mates für komplexe Beziehungen.</li>
        <li><strong>Mate-Referenzen:</strong> Erstellen Sie Referenzen, um wiederkehrende Verbindungen zu automatisieren.</li>
      </ul>
  
      <h2>4. Optimierung und Performance</h2>
      <h3>4.1 Leichte Modelle erstellen</h3>
      <p>Reduzieren Sie die Komplexität von Modellen, um die Systemleistung zu verbessern:</p>
      <ul>
        <li>Nutzen Sie vereinfachte Geometrien für die Visualisierung.</li>
        <li>Entfernen Sie unnötige Details in nicht sichtbaren Bereichen.</li>
        <li>Verwenden Sie Substitutionen für häufig verwendete Komponenten.</li>
      </ul>
  
      <h3>4.2 Analysewerkzeuge einsetzen</h3>
      <p>Moderne CAD-Systeme bieten Analyse-Tools, um die Performance zu verbessern:</p>
      <ul>
        <li>Nutzen Sie Performance-Advisor-Tools, um Engpässe zu identifizieren.</li>
        <li>Verwenden Sie Komplexitätsanalysen, um problematische Bereiche zu finden.</li>
        <li>Integrieren Sie Simulationen, um frühzeitig Fehler zu erkennen.</li>
      </ul>
  
      <h2>5. Automatisierung im CAD</h2>
      <h3>5.1 Einsatz von Skripten und Makros</h3>
      <p>Skripte und Makros können repetitive Aufgaben automatisieren:</p>
      <ul>
        <li>Erstellen Sie Makros für häufig genutzte Funktionen.</li>
        <li>Nutzen Sie Skriptsprachen wie Python oder VBA zur Workflow-Automatisierung.</li>
        <li>Integrieren Sie externe Tools über APIs.</li>
      </ul>
  
      <h3>5.2 Batch-Prozesse</h3>
      <p>Batch-Verarbeitung spart Zeit bei umfangreichen Projekten:</p>
      <ul>
        <li>Automatisieren Sie die Konvertierung von Dateiformaten.</li>
        <li>Führen Sie wiederkehrende Analysen oder Berechnungen in Stapeln aus.</li>
        <li>Exportieren Sie Dokumentationen oder Berichte automatisch.</li>
      </ul>
  
      <h2>Fazit</h2>
      <p>Fortgeschrittene CAD-Techniken bieten enorme Vorteile in der Modellierung, Optimierung und Automatisierung. Durch die Anwendung der in diesem Tutorial beschriebenen Strategien können Sie nicht nur Ihre Fähigkeiten verbessern, sondern auch Ihre Projekte effizienter und effektiver gestalten.</p>
    `
  }
  ,
      {
        id: 5,
        title: "Neue Features in CAD-Software 2024",
        excerpt: "Ein Überblick über die wichtigsten Neuerungen in führenden CAD-Programmen...",
        category: "News",
        date: "2024-03-01",
        readTime: "6 min",
        imageUrl: "https://picsum.photos/seed/cad5/800/600",
        slug: "cad-software-updates-2024",
        content: `
          <h2>Highlights der neuen CAD-Features</h2>
          <p>Die neuesten Funktionen führender CAD-Software für 2024 umfassen verbesserte Kollaborationstools, schnellere Rendering-Optionen...</p>
        `
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
        content: `
          <h2>Automatisierung im Überblick</h2>
          <p>Durch die Automatisierung von CAD-Workflows lassen sich sowohl Zeit als auch Ressourcen erheblich einsparen...</p>
        `
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
        content: `
          <h2>Sichere Archivierung</h2>
          <p>Langfristige Archivierung von CAD-Daten erfordert sowohl robuste Hardware als auch intelligente Softwarelösungen...</p>
        `
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
        content: `
          <h2>Was ist parametrisches Design?</h2>
          <p>Das parametrische Design ermöglicht es, Modelle durch die Definition von Parametern flexibel anzupassen...</p>
        `
      }
    ];


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