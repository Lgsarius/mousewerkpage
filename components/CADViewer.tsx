/* eslint-disable */
"use client";
import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';

interface CADViewerProps {
  modelPath: string;
  backgroundColor?: string;
  modelColor?: string;
}

const CADViewer: React.FC<CADViewerProps> = ({
  modelPath,
  backgroundColor = '#1a1a1a',
  modelColor = '#96ABC2'
}) => {
  const mountRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!mountRef.current) return;

    const width = mountRef.current.clientWidth;
    const height = mountRef.current.clientHeight;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, width / height, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({
      antialias: true,
      alpha: true
    });

    renderer.setSize(width, height);
    renderer.setClearColor(0x000000, 0);
    mountRef.current.appendChild(renderer.domElement);

    scene.background = null;

    const controls = new OrbitControls(camera, renderer.domElement);
    controls.enableDamping = true;
    controls.dampingFactor = 0.05;
    controls.screenSpacePanning = true;
    controls.minDistance = 1;
    controls.maxDistance = 20;

    const ambientLight = new THREE.AmbientLight(0xffffff, 0.8);
    scene.add(ambientLight);

    const directionalLight1 = new THREE.DirectionalLight(0xffffff, 1.0);
    directionalLight1.position.set(1, 3, 2);
    scene.add(directionalLight1);

    const directionalLight2 = new THREE.DirectionalLight(0xffffff, 0.6);
    directionalLight2.position.set(-1, 1, -2);
    scene.add(directionalLight2);

    const loader = new GLTFLoader();
    loader.load(
      modelPath,
      (gltf) => {
        const model = gltf.scene;
        
        // Center the model
        const box = new THREE.Box3().setFromObject(model);
        const center = box.getCenter(new THREE.Vector3());
        const size = box.getSize(new THREE.Vector3());
        const maxDim = Math.max(size.x, size.y, size.z);
        
        // Scale model to fit view
        const scale = (2 / maxDim) * 6;
        model.scale.multiplyScalar(scale);
        
        // Center model using the same scale value
        model.position.sub(center.multiplyScalar(scale));
        model.position.y = -0.5;

        // Apply enhanced material properties
        model.traverse((child) => {
          if (child instanceof THREE.Mesh) {
            child.material = new THREE.MeshPhongMaterial({
              color: modelColor,
              specular: 0x333333,
              shininess: 30,
              flatShading: false
            });
          }
        });

        scene.add(model);

        // Position camera
        const distance = maxDim * 10;
        camera.position.set(distance, distance/2, distance);
        camera.lookAt(new THREE.Vector3(0, 0, 0));
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
      
      // Add rotation to the scene (adjust rotationSpeed as needed)
      const rotationSpeed = 0.002; // radians per frame
      scene.rotation.y += rotationSpeed;
      
      controls.update();
      renderer.render(scene, camera);
    };
    animate();

    const handleResize = () => {
      if (!mountRef.current) return;
      
      const newWidth = mountRef.current.clientWidth;
      const newHeight = mountRef.current.clientHeight;
      
      camera.aspect = newWidth / newHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(newWidth, newHeight);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
      mountRef.current?.removeChild(renderer.domElement);
      renderer.dispose();
    };
  }, [backgroundColor, modelColor, modelPath]);

  return <div ref={mountRef} style={{ width: '100%', height: '100%' }} />;
};

export default CADViewer; 