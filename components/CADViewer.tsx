/* eslint-disable */
"use client";
import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
import { STLLoader } from 'three/examples/jsm/loaders/STLLoader.js';
import styles from '@/styles/CADViewer.module.css';

interface CADViewerProps {
  modelPath: string;
  backgroundColor?: string;
  modelColor?: string;
}

const CADViewer: React.FC<CADViewerProps> = ({
  modelPath,
  backgroundColor = 'transparent',
  modelColor = '#96ABC2'
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const rendererRef = useRef<THREE.WebGLRenderer | null>(null);
  const sceneRef = useRef<THREE.Scene | null>(null);
  const cameraRef = useRef<THREE.PerspectiveCamera | null>(null);
  const modelRef = useRef<THREE.Mesh | null>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const scene = new THREE.Scene();
    sceneRef.current = scene;

    const camera = new THREE.PerspectiveCamera(
      35,
      containerRef.current.clientWidth / containerRef.current.clientHeight,
      0.1,
      1000
    );
    cameraRef.current = camera;
    camera.position.set(0, 1, 4);

    const renderer = new THREE.WebGLRenderer({ 
      antialias: true,
      alpha: true
    });
    renderer.setClearColor(0x000000, 0);
    rendererRef.current = renderer;
    renderer.setSize(containerRef.current.clientWidth, containerRef.current.clientHeight);
    renderer.setPixelRatio(window.devicePixelRatio);
    containerRef.current.appendChild(renderer.domElement);

    const controls = new OrbitControls(camera, renderer.domElement);
    controls.enableDamping = true;
    controls.dampingFactor = 0.05;
    controls.screenSpacePanning = true;
    controls.target.set(0, 0.5, 0);
    controls.minDistance = 2;
    controls.maxDistance = 10;

    const ambientLight = new THREE.AmbientLight(0xffffff, 0.7);
    scene.add(ambientLight);

    const directionalLight1 = new THREE.DirectionalLight(0xffffff, 0.8);
    directionalLight1.position.set(1, 2, 2);
    scene.add(directionalLight1);

    const directionalLight2 = new THREE.DirectionalLight(0xffffff, 0.4);
    directionalLight2.position.set(-1, 0, -2);
    scene.add(directionalLight2);

    const loader = new STLLoader();
    loader.load(
      modelPath,
      (geometry) => {
        geometry.center();
        
        const box = new THREE.Box3().setFromObject(new THREE.Mesh(geometry));
        const size = box.getSize(new THREE.Vector3());
        const maxDim = Math.max(size.x, size.y, size.z);
        
        const material = new THREE.MeshPhongMaterial({
          color: modelColor,
          specular: 0x111111,
          shininess: 200,
          side: THREE.DoubleSide
        });

        const mesh = new THREE.Mesh(geometry, material);
        modelRef.current = mesh;
        
        const scale = 2 / maxDim;
        mesh.scale.multiplyScalar(scale);
        
        mesh.position.y = 0.5;

        scene.add(mesh);

        const wireframe = new THREE.LineSegments(
          new THREE.WireframeGeometry(geometry),
          new THREE.LineBasicMaterial({
            color: 0xffffff,
            transparent: true,
            opacity: 0.1
          })
        );
        wireframe.scale.copy(mesh.scale);
        wireframe.position.copy(mesh.position);
        scene.add(wireframe);

        const distance = maxDim * 1.5;
        camera.position.set(distance, distance/1.5, distance);
        camera.lookAt(new THREE.Vector3(0, 0.5, 0));
        controls.update();
      },
      (xhr) => {
        console.log((xhr.loaded / xhr.total) * 100 + '% loaded');
      },
      (error) => {
        console.error('Error loading model:', error);
      }
    );

    const animate = () => {
      requestAnimationFrame(animate);
      controls.update();
      renderer.render(scene, camera);
    };
    animate();

    const handleResize = () => {
      if (!containerRef.current || !cameraRef.current || !rendererRef.current) return;
      
      const camera = cameraRef.current;
      const renderer = rendererRef.current;
      
      camera.aspect = containerRef.current.clientWidth / containerRef.current.clientHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(containerRef.current.clientWidth, containerRef.current.clientHeight);
    };
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
      if (containerRef.current && renderer.domElement) {
        containerRef.current.removeChild(renderer.domElement);
      }
      renderer.dispose();
    };
  }, [modelPath, backgroundColor, modelColor]);

  return <div className={styles.viewerContainer} ref={containerRef} />;
};

export default CADViewer; 