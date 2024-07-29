import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';

const gradientShader = {
  uniforms: {
    color1: { value: new THREE.Color(0x0000ff) }, // Start color of the gradient (blue)
    color2: { value: new THREE.Color(0xff0000) }  // End color of the gradient (red)
  },
  vertexShader: `
    varying vec3 vPosition;
    void main() {
      vPosition = position;
      gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
    }
  `,
  fragmentShader: `
    varying vec3 vPosition;
    uniform vec3 color1;
    uniform vec3 color2;
    void main() {
      float gradient = (vPosition.y + 1.0) * 0.5; // Simple vertical gradient
      gl_FragColor = vec4(mix(color1, color2, gradient), 1.0);
    }
  `
};

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

    // Gradient shader material
    const gradientMaterial = new THREE.ShaderMaterial(gradientShader);

    // Cube with gradient shader
    const geometry = new THREE.BoxGeometry(1, 1, 1, 64, 64, 64); // Higher subdivisions for smoother appearance
    const cube = new THREE.Mesh(geometry, gradientMaterial);
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
