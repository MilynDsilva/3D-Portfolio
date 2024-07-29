import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';

const ThreeScene = () => {
  const threeContainerRef = useRef();

  useEffect(() => {
    // Scene
    const scene = new THREE.Scene();

    // Camera
    const camera = new THREE.PerspectiveCamera(
      25,
      threeContainerRef.current.clientWidth / threeContainerRef.current.clientHeight,
      0.1,
      1000
    );
    camera.position.z = 5;

    // Renderer
    const renderer = new THREE.WebGLRenderer({ antialias: true }); // Enable antialiasing for smoother edges
    renderer.setSize(threeContainerRef.current.clientWidth, threeContainerRef.current.clientHeight);
    threeContainerRef.current.appendChild(renderer.domElement);

    // Controls
    const controls = new OrbitControls(camera, renderer.domElement);
    controls.enableDamping = true; // Enable damping (inertia)
    controls.dampingFactor = 0.05;
    controls.rotateSpeed = 0.1;
    controls.autoRotate = true; // Enable auto-rotate
    controls.autoRotateSpeed = 4.0; // Speed of auto-rotate

    // Load texture
    const textureLoader = new THREE.TextureLoader();
    const texture = textureLoader.load('/goku.jpg', (texture) => {
      texture.anisotropy = renderer.capabilities.getMaxAnisotropy(); // Improve texture quality with anisotropic filtering
    });

    // Create materials for each face (using the same texture for simplicity)
    const materials = [
      new THREE.MeshBasicMaterial({ map: texture }), // right face
      new THREE.MeshBasicMaterial({ map: texture }), // left face
      new THREE.MeshBasicMaterial({ map: texture }), // top face
      new THREE.MeshBasicMaterial({ map: texture }), // bottom face
      new THREE.MeshBasicMaterial({ map: texture }), // front face
      new THREE.MeshBasicMaterial({ map: texture }), // back face
    ];

    // Cube with smooth geometry and image texture
    const geometry = new THREE.BoxGeometry(1, 1, 1, 64, 64, 64); // Higher subdivisions for smoother appearance
    const cube = new THREE.Mesh(geometry, materials);
    scene.add(cube);

    // Set initial rotation
    cube.rotation.x = Math.PI / 4; // 45 degrees
    cube.rotation.y = Math.PI / 4; // 45 degrees

    // Animation loop
    const animate = () => {
      requestAnimationFrame(animate);

      controls.update(); // Update controls (for damping and auto-rotate)

      renderer.render(scene, camera);
    };

    animate();

    // Clean up on component unmount
    return () => {
      controls.dispose();
      threeContainerRef.current.removeChild(renderer.domElement);
    };
  }, []);

  return <div ref={threeContainerRef} className="three-container" />;
};

export default ThreeScene;
