import { BlogPost } from '@/types/blog';

export const DUMMY_POSTS: BlogPost[] = [
  {
    id: '1',
    title: 'CAD-Optimierung: Best Practices für Industriestandards',
    excerpt: 'Lernen Sie die wichtigsten Techniken zur Optimierung Ihrer CAD-Modelle und wie Sie Ihre Arbeitsabläufe effizienter gestalten können.',
    content: `
      Die Optimierung von CAD-Modellen ist ein entscheidender Schritt für effiziente Produktentwicklung und reibungslose Zusammenarbeit. In diesem Artikel teilen wir bewährte Methoden und Techniken.

      ## Grundlegende Optimierungsstrategien

      1. **Strukturierte Baumstruktur**
         - Logische Benennungskonventionen
         - Klare Hierarchie der Features
         - Dokumentation wichtiger Konstruktionsschritte

      2. **Performance-Optimierung**
         - Reduzierung komplexer Features
         - Optimierung von Patterns und Arrays
         - Effiziente Verwendung von Referenzen

      ## Dateigrößen-Management

      - Entfernung ungenutzter Skizzen und Features
      - Optimierung von importierten Komponenten
      - Verwendung von vereinfachten Darstellungen

      ## Best Practices für die Zusammenarbeit

      1. **Standardisierte Arbeitsabläufe**
         - Einheitliche Benennungskonventionen
         - Dokumentationsrichtlinien
         - Versionskontrolle

      2. **Datenmanagement**
         - Zentrale Verwaltung von Bibliotheken
         - Effiziente Freigabeprozesse
         - Backup-Strategien

      ## Fazit
      
      Die konsequente Anwendung dieser Best Practices führt zu erheblichen Verbesserungen in der Produktivität und Qualität Ihrer CAD-Projekte.
    `,
    date: '15. März 2024',
    imageUrl: 'https://picsum.photos/800/450?random=1',
    category: 'Technisch',
    readTime: '5 min',
    slug: 'cad-optimierung-best-practices'
  },
  {
    id: '2',
    title: '3D-Modellierung: Von der Skizze zum fertigen Modell',
    excerpt: 'Ein detaillierter Einblick in den Prozess der 3D-Modellierung und die wichtigsten Schritte zur erfolgreichen Umsetzung.',
    content: `
      Der Weg von der ersten Skizze zum fertigen 3D-Modell erfordert systematisches Vorgehen und technisches Know-how. Dieser Leitfaden zeigt Ihnen die wichtigsten Schritte.

      ## Vorbereitungsphase

      1. **Anforderungsanalyse**
         - Technische Spezifikationen
         - Funktionale Anforderungen
         - Fertigungsrestriktionen

      2. **Konzeptentwicklung**
         - Skizzenerstellung
         - Grundlegende Geometrie
         - Funktionsprinzipien

      ## Modellierungsprozess

      ### 1. Basisgeometrie
      - Erstellung der Grundformen
      - Definition von Referenzebenen
      - Festlegung von Hauptabmessungen

      ### 2. Feature-Entwicklung
      - Systematischer Aufbau komplexer Features
      - Verwendung von Patterns und Arrays
      - Integration von Standardkomponenten

      ### 3. Detaillierung
      - Hinzufügen von Verrundungen und Fasen
      - Oberflächenbearbeitung
      - Technische Details

      ## Qualitätssicherung

      - Überprüfung der Maße und Toleranzen
      - Kollisionsprüfungen
      - Funktionstest in der Baugruppe

      ## Tipps für effizientes Arbeiten

      1. **Strukturierte Vorgehensweise**
         - Top-Down vs. Bottom-Up Ansatz
         - Verwendung von Bibliotheksteilen
         - Parametrische Modellierung

      2. **Häufige Fehlerquellen vermeiden**
         - Überbestimmungen
         - Fehlerhafte Referenzen
         - Komplexe Abhängigkeiten
    `,
    date: '10. März 2024',
    imageUrl: 'https://picsum.photos/800/450?random=2',
    category: 'Design',
    readTime: '7 min',
    slug: '3d-modellierung-prozess'
  },
  {
    id: '3',
    title: 'Effiziente Datenkonvertierung im CAD-Workflow',
    excerpt: 'Optimieren Sie Ihre Arbeitsabläufe durch effiziente Datenkonvertierung zwischen verschiedenen CAD-Formaten.',
    content: `
      Die erfolgreiche Konvertierung von CAD-Daten ist entscheidend für die nahtlose Zusammenarbeit in modernen Entwicklungsprozessen.

      ## Herausforderungen der Datenkonvertierung

      1. **Formatkompatibilität**
         - Unterschiedliche CAD-Systeme
         - Versionskonflikte
         - Proprietäre Formate

      2. **Datenqualität**
         - Geometriegenauigkeit
         - Metadaten-Erhalt
         - Feature-Übertragung

      ## Beste Praktiken

      ### 1. Vorbereitung der Daten
      - Bereinigung der Modelle
      - Prüfung auf Fehler
      - Dokumentation wichtiger Parameter

      ### 2. Konvertierungsprozess
      - Wahl des richtigen Zielformats
      - Einstellung der Konvertierungsparameter
      - Qualitätskontrolle

      ## Automatisierungsmöglichkeiten

      - Batch-Verarbeitung
      - Skript-basierte Konvertierung
      - Integration in PLM-Systeme

      ## Fazit

      Eine gut geplante Datenkonvertierung spart Zeit und verhindert Qualitätsverluste im Entwicklungsprozess.
    `,
    date: '5. März 2024',
    imageUrl: 'https://picsum.photos/800/450?random=3',
    category: 'Technisch',
    readTime: '4 min',
    slug: 'datenkonvertierung-tipps'
  },
  {
    id: '4',
    title: 'Industriestandards im CAD-Design',
    excerpt: 'Eine Übersicht der wichtigsten Industriestandards und wie Sie diese in Ihren Projekten umsetzen können.',
    content: `
      Die Einhaltung von Industriestandards ist fundamental für die professionelle CAD-Konstruktion und gewährleistet Qualität und Kompatibilität.

      ## Wichtige Standards

      1. **ISO-Normen**
         - ISO 128: Technische Zeichnungen
         - ISO 1101: Geometrische Tolerierung
         - ISO 2768: Allgemeintoleranzen

      2. **Branchenspezifische Standards**
         - Automotive (VDA, AIAG)
         - Luftfahrt (AS9100)
         - Maschinenbau (DIN)

      ## Implementierung

      ### 1. Dokumentation
      - Zeichnungsvorlagen
      - Normgerechte Bemaßung
      - Toleranzangaben

      ### 2. CAD-Modellierung
      - Strukturierte Modellbäume
      - Standardisierte Benennungen
      - Normteile-Bibliotheken

      ## Best Practices

      1. **Qualitätssicherung**
         - Prüfprozesse
         - Dokumentation
         - Schulungen

      2. **Prozessoptimierung**
         - Standardisierte Workflows
         - Automatisierung
         - Kontinuierliche Verbesserung
    `,
    date: '1. März 2024',
    imageUrl: 'https://picsum.photos/800/450?random=4',
    category: 'Industrie',
    readTime: '6 min',
    slug: 'industriestandards-cad'
  }
];

export async function getBlogPosts() {
  return DUMMY_POSTS;
}

export async function getBlogPost(slug: string) {
  const post = DUMMY_POSTS.find(post => post.slug === slug);
  if (!post) throw new Error('Post not found');
  return post;
} 