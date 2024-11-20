/* eslint-disable */

import { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
import { GLTF } from 'three/examples/jsm/loaders/GLTFLoader.js';
import styles from '@/styles/HeroModel.module.css';

export default function HeroModel() {
  const mountRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!mountRef.current) return;

    // Scene setup
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      45,
      mountRef.current.clientWidth / mountRef.current.clientHeight,
      0.1,
      1000
    );
    camera.position.set(10, 7, 10);

    const renderer = new THREE.WebGLRenderer({ 
      antialias: true, 
      alpha: true 
    });
    renderer.setSize(mountRef.current.clientWidth, mountRef.current.clientHeight);
    renderer.setClearColor(0x1a1a1a, 0);
    renderer.setPixelRatio(window.devicePixelRatio);
    mountRef.current.appendChild(renderer.domElement);

    // Controls
    const controls = new OrbitControls(camera, renderer.domElement);
    controls.enableDamping = true;
    controls.dampingFactor = 0.05;
    controls.minDistance = 5;
    controls.maxDistance = 30;

    // Lighting
    const lights = [
      new THREE.DirectionalLight(0xffffff, 0.8),
      new THREE.DirectionalLight(0x96ABC2, 0.4),
      new THREE.DirectionalLight(0xffffff, 0.3),
      new THREE.AmbientLight(0xffffff, 0.4)
    ];

    lights[0].position.set(10, 10, 10);
    lights[1].position.set(-5, 5, -5);
    lights[2].position.set(0, -10, 5);

    lights.forEach(light => scene.add(light));

    // Grid Helper
    const gridHelper = new THREE.GridHelper(20, 20, 0x96ABC2, 0x353535);
    gridHelper.position.y = -3;
    gridHelper.material.opacity = 0.2;
    gridHelper.material.transparent = true;
    scene.add(gridHelper);

    // Create loading manager first
    const loadingManager = new THREE.LoadingManager(
      () => console.log('Loading complete!'),
      (url, itemsLoaded, itemsTotal) => {
        console.log(`Loading file: ${url}. ${itemsLoaded}/${itemsTotal} files.`);
      },
      (url) => console.error('Error loading:', url)
    );

    // Create loader with manager
    const loader = new GLTFLoader(loadingManager);
    
    // Make sure the path is correct
    const modelPath = '/static/models/GearboxAssy.gltf';
    
    try {
      loader.load(
        modelPath,
        (gltf) => {
          console.log('Model loaded successfully:', gltf);
          const model = gltf.scene;
          
          // Adjust model - reduced scale to 0.1
          model.scale.set(0.3, 0.3, 0.3);
          model.rotation.x = Math.PI / 2;
          
          // Optional: Adjust materials
          model.traverse((child) => {
            if (child instanceof THREE.Mesh) {
              child.material = new THREE.MeshPhysicalMaterial({
                color: 0x96ABC2,
                metalness: 0.9,
                roughness: 0.4,
                clearcoat: 0.6,
                clearcoatRoughness: 0.2
              });
            }
          });

          scene.add(model);

          // Center the model
          const box = new THREE.Box3().setFromObject(model);
          const center = box.getCenter(new THREE.Vector3());
          model.position.sub(center);

          // Adjust camera position for smaller model
          camera.position.set(5, 3.5, 5);
          camera.lookAt(0, 0, 0);

          // Adjust OrbitControls limits for smaller model
          controls.minDistance = 2;
          controls.maxDistance = 10;

          // Simple render loop
          const render = () => {
            requestAnimationFrame(render);
            controls.update();
            renderer.render(scene, camera);
          };
          render();
        },
        (progress) => {
          const percentComplete = (progress.loaded / progress.total) * 100;
          console.log('Loading progress:', percentComplete + '%');
        },
        (error) => {
          console.error('Error loading model:', error);
        }
      );
    } catch (error) {
      console.error('Error in model loading setup:', error);
    }

    // Handle window resize
    const handleResize = () => {
      if (!mountRef.current) return;
      camera.aspect = mountRef.current.clientWidth / mountRef.current.clientHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(mountRef.current.clientWidth, mountRef.current.clientHeight);
    };
    window.addEventListener('resize', handleResize);

    // Cleanup
    return () => {
      window.removeEventListener('resize', handleResize);
      mountRef.current?.removeChild(renderer.domElement);
      renderer.dispose();
    };
  }, []);

  return (
    <div className={styles.modelContainer} ref={mountRef}>
      <div className={styles.modelOverlay}>
       
      </div>
    </div>
  );
} 