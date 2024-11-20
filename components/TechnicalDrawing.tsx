/* eslint-disable */
import React from 'react';
import styles from '@/styles/TechnicalDrawing.module.css';

const TechnicalDrawing: React.FC = () => {
  return (
    <div className={styles.technicalDrawingContainer}>
      <div className={styles.fadeOverlay} />
      <svg
        className={styles.drawingLayer}
        viewBox="0 0 1200 800"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Title Block - Top Right */}
        <g className={`${styles.drawPath} ${styles.titleBlock}`}>
          <rect x="900" y="20" width="280" height="120" fill="none" stroke="rgba(150, 171, 194, 0.6)" />
          <line x1="900" y1="50" x2="1180" y2="50" stroke="rgba(150, 171, 194, 0.6)" />
          <text x="910" y="40" className={styles.titleText}>MOUSEWERK DRONE MW-250X</text>
          <text x="910" y="70" className={styles.infoText}>SCALE: 1:1</text>
          <text x="910" y="90" className={styles.infoText}>UNITS: MM</text>
          <text x="910" y="110" className={styles.infoText}>DWG NO: MWK-2024-001</text>
          <text x="910" y="130" className={styles.infoText}>REV: A</text>
        </g>

        {/* Revision Block - Bottom Right */}
        <g className={`${styles.drawPath} ${styles.revisionBlock}`}>
          <rect x="900" y="650" width="280" height="130" fill="none" stroke="rgba(150, 171, 194, 0.6)" />
          <line x1="900" y1="680" x2="1180" y2="680" stroke="rgba(150, 171, 194, 0.6)" />
          <text x="910" y="670" className={styles.blockTitle}>REVISION HISTORY</text>
          <text x="910" y="700" className={styles.revisionText}>REV A - INITIAL RELEASE - 2024/03/20</text>
          <text x="910" y="720" className={styles.revisionText}>APPROVED BY: MW ENGINEERING</text>
        </g>

        {/* Specifications Block - Bottom Left */}
        <g className={`${styles.drawPath} ${styles.specsBlock}`}>
          <rect x="20" y="650" width="280" height="130" fill="none" stroke="rgba(150, 171, 194, 0.6)" />
          <line x1="20" y1="680" x2="300" y2="680" stroke="rgba(150, 171, 194, 0.6)" />
          <text x="30" y="670" className={styles.blockTitle}>SPECIFICATIONS</text>
          <text x="30" y="700" className={styles.specText}>WEIGHT: 450g ±10g</text>
          <text x="30" y="720" className={styles.specText}>MAX THRUST: 1200g</text>
          <text x="30" y="740" className={styles.specText}>BATTERY: 4S 1500mAh</text>
          <text x="30" y="760" className={styles.specText}>MOTORS: 2306 2450KV</text>
        </g>

        {/* Notes Block - Center Bottom */}
        <g className={`${styles.drawPath} ${styles.notesBlock}`}>
          <rect x="320" y="650" width="560" height="130" fill="none" stroke="rgba(150, 171, 194, 0.6)" />
          <line x1="320" y1="680" x2="880" y2="680" stroke="rgba(150, 171, 194, 0.6)" />
          <text x="330" y="670" className={styles.blockTitle}>GENERAL NOTES</text>
          <text x="330" y="700" className={styles.noteText}>1. ALL DIMENSIONS IN MILLIMETERS</text>
          <text x="330" y="720" className={styles.noteText}>2. TOLERANCES: ±0.5MM UNLESS OTHERWISE SPECIFIED</text>
          <text x="330" y="740" className={styles.noteText}>3. MATERIAL: CARBON FIBER COMPOSITE</text>
          <text x="330" y="760" className={styles.noteText}>4. FINISH: MATTE BLACK</text>
        </g>

        {/* Dimension Lines */}
        <g className={`${styles.drawPath} ${styles.dimensionLines}`}>
          {/* Horizontal */}
          <line x1="450" y1="550" x2="750" y2="550" stroke="rgba(150, 171, 194, 0.6)" strokeWidth="1"/>
          <line x1="450" y1="545" x2="450" y2="555" stroke="rgba(150, 171, 194, 0.6)" strokeWidth="1"/>
          <line x1="750" y1="545" x2="750" y2="555" stroke="rgba(150, 171, 194, 0.6)" strokeWidth="1"/>
          <text x="600" y="570" className={styles.dimensionText}>300.0</text>
          
          {/* Vertical */}
          <line x1="400" y1="250" x2="400" y2="550" stroke="rgba(150, 171, 194, 0.6)" strokeWidth="1"/>
          <text x="380" y="400" className={styles.dimensionText} transform="rotate(-90 380 400)">300.0</text>
        </g>

        {/* Main Drawing - Previous drone code here */}
        <g className={styles.mainDrawing}>
          {/* Complex Drone Assembly */}
          <g className={styles.droneAssembly}>
            {/* Frame Components - drawn first */}
            <g className={`${styles.drawPath} ${styles.frameGroup}`}>
              {/* Central Hub - Hexagonal */}
              <path
                d="M 550,350 
                   L 600,330 
                   L 650,350 
                   L 650,400
                   L 600,420 
                   L 550,400 Z"
                fill="none"
                stroke="rgba(150, 171, 194, 0.6)"
                strokeWidth="2"
              />
              
              {/* Structural Reinforcements */}
              <path
                d="M 575,340 L 625,340 M 575,410 L 625,410"
                fill="none"
                stroke="rgba(150, 171, 194, 0.6)"
                strokeWidth="1"
              />
            </g>

            {/* Arms Assembly - drawn second */}
            <g className={`${styles.drawPath} ${styles.armsGroup}`}>
              {[45, 135, 225, 315].map((angle, i) => (
                <g key={i} className={styles.arm}>
                  {/* Main Arm Structure */}
                  <path
                    d={`M ${600 + 50 * Math.cos(angle * Math.PI/180)},
                         ${375 + 50 * Math.sin(angle * Math.PI/180)}
                       L ${600 + 150 * Math.cos(angle * Math.PI/180)},
                         ${375 + 150 * Math.sin(angle * Math.PI/180)}`}
                    fill="none"
                    stroke="rgba(150, 171, 194, 0.6)"
                    strokeWidth="2"
                  />
                  
                  {/* Arm Details */}
                  <path
                    d={`M ${600 + 60 * Math.cos(angle * Math.PI/180)},
                         ${375 + 60 * Math.sin(angle * Math.PI/180)}
                       L ${600 + 140 * Math.cos(angle * Math.PI/180)},
                         ${375 + 140 * Math.sin(angle * Math.PI/180)}`}
                    fill="none"
                    stroke="rgba(150, 171, 194, 0.4)"
                    strokeWidth="1"
                    strokeDasharray="4 4"
                  />
                </g>
              ))}
            </g>

            {/* Motor Mounts - drawn third */}
            <g className={`${styles.drawPath} ${styles.motorGroup}`}>
              {[45, 135, 225, 315].map((angle, i) => (
                <g key={i} className={styles.motorMount}>
                  {/* Motor Housing */}
                  <circle
                    cx={600 + 150 * Math.cos(angle * Math.PI/180)}
                    cy={375 + 150 * Math.sin(angle * Math.PI/180)}
                    r="20"
                    fill="none"
                    stroke="rgba(150, 171, 194, 0.6)"
                    strokeWidth="2"
                  />
                  
                  {/* Motor Details */}
                  <circle
                    cx={600 + 150 * Math.cos(angle * Math.PI/180)}
                    cy={375 + 150 * Math.sin(angle * Math.PI/180)}
                    r="15"
                    fill="none"
                    stroke="rgba(150, 171, 194, 0.4)"
                    strokeWidth="1"
                  />
                  
                  {/* Mounting Holes */}
                  {[0, 90, 180, 270].map((holeAngle, j) => (
                    <circle
                      key={j}
                      cx={600 + 150 * Math.cos(angle * Math.PI/180) + 16 * Math.cos((angle + holeAngle) * Math.PI/180)}
                      cy={375 + 150 * Math.sin(angle * Math.PI/180) + 16 * Math.sin((angle + holeAngle) * Math.PI/180)}
                      r="1.5"
                      fill="rgba(150, 171, 194, 0.6)"
                    />
                  ))}
                </g>
              ))}
            </g>

            {/* Electronics Bay - drawn fourth */}
            <g className={`${styles.drawPath} ${styles.electronicsGroup}`}>
              {/* Main Board */}
              <rect
                x="575"
                y="350"
                width="50"
                height="50"
                fill="none"
                stroke="rgba(150, 171, 194, 0.6)"
                strokeWidth="1"
              />
              
              {/* Component Layout */}
              <circle cx="600" cy="375" r="5" fill="none" stroke="rgba(150, 171, 194, 0.4)" />
              <rect x="585" y="360" width="10" height="10" fill="none" stroke="rgba(150, 171, 194, 0.4)" />
              <path d="M 590,385 L 610,385" stroke="rgba(150, 171, 194, 0.4)" strokeWidth="1" />
            </g>

            {/* Technical Annotations - drawn last */}
            <g className={`${styles.drawPath} ${styles.annotationsGroup}`}>
              {/* Dimensions */}
              <g className={styles.dimensions}>
                <line x1="450" y1="550" x2="750" y2="550" stroke="rgba(150, 171, 194, 0.6)" strokeWidth="1"/>
                <text x="600" y="570" fill="rgba(150, 171, 194, 0.6)" fontSize="12" textAnchor="middle">300mm</text>
              </g>
              
              {/* Labels */}
              <g className={styles.labels}>
                {/* ... component labels ... */}
              </g>
            </g>
          </g>
        </g>

        {/* Detail Views */}
        <g className={`${styles.drawPath} ${styles.detailView}`}>
          <circle cx="900" cy="400" r="80" fill="none" stroke="rgba(150, 171, 194, 0.6)" />
          <text x="900" y="350" className={styles.detailText}>DETAIL A</text>
          <text x="900" y="370" className={styles.detailText}>SCALE 2:1</text>
          {/* Detail drawing components */}
        </g>

        {/* Section Views */}
        <g className={`${styles.drawPath} ${styles.sectionView}`}>
          <rect x="900" cy="200" width="160" height="120" fill="none" stroke="rgba(150, 171, 194, 0.6)" />
          <text x="900" y="180" className={styles.sectionText}>SECTION B-B</text>
          {/* Section view components */}
        </g>
      </svg>
    </div>
  );
};

export default TechnicalDrawing;