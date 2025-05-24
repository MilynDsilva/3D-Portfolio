import React, { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import { EffectComposer } from 'three/examples/jsm/postprocessing/EffectComposer';
import { RenderPass } from 'three/examples/jsm/postprocessing/RenderPass';
import { UnrealBloomPass } from 'three/examples/jsm/postprocessing/UnrealBloomPass';

// Sample Portfolio Data
const portfolioProjects = [
  {
    id: 1,
    planetName: "Earth",
    title: "Eco Warriors Unite!",
    description: "A platform for connecting environmental activists and organizing local cleanup events. Features include event mapping, volunteer sign-ups, and progress tracking.",
    technologies: ["React", "Firebase", "Mapbox GL JS", "Node.js"],
    imageUrl: "https://via.placeholder.com/300x200.png?text=Eco+Warriors",
    projectUrl: "https://github.com/MilynDsilva/3D-Portfolio" // Placeholder
  },
  {
    id: 2,
    planetName: "Mars",
    title: "Mars Colony Planner",
    description: "An interactive 3D simulation tool for designing and visualizing sustainable habitats on Mars. Users can place modules, manage resources, and simulate environmental challenges.",
    technologies: ["Three.js", "Vue.js", "Electron", "Python (for simulation backend)"],
    imageUrl: "https://via.placeholder.com/300x200.png?text=Mars+Colony",
    projectUrl: "https://github.com/MilynDsilva/3D-Portfolio" // Placeholder
  },
  {
    id: 3,
    planetName: "Jupiter",
    title: "Galactic Data Explorer",
    description: "A data visualization tool for exploring astronomical datasets from various telescopes. Features interactive charts, 3D galaxy rendering, and collaborative analysis tools.",
    technologies: ["D3.js", "React", "GraphQL", "PostgreSQL"],
    imageUrl: "https://via.placeholder.com/300x200.png?text=Galactic+Data",
    projectUrl: "https://github.com/MilynDsilva/3D-Portfolio" // Placeholder
  },
   {
    id: 4,
    planetName: "Moon",
    title: "Lunar Navigation System",
    description: "A real-time navigation and mapping application for future lunar rovers and astronauts, providing high-resolution terrain data and optimal pathfinding.",
    technologies: ["CesiumJS", "Angular", "Java Spring Boot", "MongoDB"],
    imageUrl: "https://via.placeholder.com/300x200.png?text=Lunar+Nav",
    projectUrl: "https://github.com/MilynDsilva/3D-Portfolio" // Placeholder
  }
];

const ThreeScene = () => {
  const threeContainerRef = useRef();
  const [selectedPlanet, setSelectedPlanet] = useState(null);
  const [currentProjectData, setCurrentProjectData] = useState(null); // State for project details
  const controlsRef = useRef(); // Ref to store controls for access in click handler
  const composerRef = useRef(); // Ref for EffectComposer

  useEffect(() => {
    const currentRef = threeContainerRef.current; // Capture ref for cleanup
    // Scene
    const scene = new THREE.Scene();
    scene.background = new THREE.Color(0x333333); // Dark grey background

    // Camera
    const camera = new THREE.PerspectiveCamera(
      25, // fov
      currentRef.clientWidth / currentRef.clientHeight, // aspect
      0.1, // near
      1000 // far
    );
    camera.position.set(0, 0, 25); // Explicitly position camera
    camera.lookAt(0, 0, 0); // Look at origin

    // Renderer
    const renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setSize(currentRef.clientWidth, currentRef.clientHeight);
    // renderer.toneMapping = THREE.ReinhardToneMapping; // Commented out for simplification
    // renderer.outputColorSpace = THREE.SRGBColorSpace; // Commented out for simplification
    currentRef.appendChild(renderer.domElement);

    // Controls
    const controls = new OrbitControls(camera, renderer.domElement);
    controlsRef.current = controls; // Store controls in ref
    controls.enableDamping = true;
    controls.dampingFactor = 0.05;
    controls.rotateSpeed = 0.1;
    controls.autoRotate = false; // Disable auto-rotate
    // controls.autoRotateSpeed = 4.0; // Commented out

    // Ambient light
    const ambientLight = new THREE.AmbientLight(0xffffff, 1.0); // Increased intensity for testing
    scene.add(ambientLight);

    // Point light (Sun)
    const pointLight = new THREE.PointLight(0xffffff, 2.0, 2000); // Increased intensity for testing
    pointLight.position.set(0, 0, 0);
    scene.add(pointLight);

    const textureLoader = new THREE.TextureLoader();
    const clickableMeshes = []; // Kept for now, but bodies using it are commented out
    const sunPosition = new THREE.Vector3(0, 0, 0);

    // Starfield Background - COMMENTED OUT
    // const starfieldTexture = textureLoader.load('https://www.solarsystemscope.com/textures/download/2k_stars_milky_way.jpg');
    // const starfieldGeometry = new THREE.SphereGeometry(500, 64, 64);
    // const starfieldMaterial = new THREE.MeshBasicMaterial({
    //   map: starfieldTexture,
    //   side: THREE.BackSide,
    // });
    // const starfield = new THREE.Mesh(starfieldGeometry, starfieldMaterial);
    // scene.add(starfield);

    // GLTF Loader for Spaceship - COMMENTED OUT
    // const gltfLoader = new GLTFLoader();
    // gltfLoader.load(
    //   'https://raw.githubusercontent.com/KhronosGroup/glTF-Sample-Models/master/2.0/DamagedHelmet/glTF/DamagedHelmet.gltf', // Placeholder model
    //   (gltf) => {
    //     const spaceship = gltf.scene;
    //     spaceship.scale.set(0.5, 0.5, 0.5);
    //     spaceship.position.set(0, 1, 10); // Positioned in front of camera, slightly above sun
    //     scene.add(spaceship);
    //   },
    //   undefined, // onProgress callback (optional)
    //   (error) => {
    //     console.error('An error happened loading the GLTF model:', error);
    //   }
    // );

    const celestialBodiesData = [
      {
        name: 'Sun',
        textureUrl: 'https://www.solarsystemscope.com/textures/download/2k_sun.jpg',
        size: 5, // Increased size
        position: { x: 0, y: 0, z: 0 },
        materialType: 'MeshBasicMaterial',
        isClickable: false, // Sun is not clickable in this context
        emissive: 0xffddaa,
        emissiveIntensity: 1,
      },
      // {
      //   name: 'Earth',
      //   textureUrl: 'https://www.solarsystemscope.com/textures/download/2k_earth_daymap.jpg',
      //   size: 1,
      //   position: { x: 5, y: 0, z: 0 },
      //   materialType: 'MeshStandardMaterial',
      //   isClickable: true,
      // },
      // {
      //   name: 'Mars',
      //   textureUrl: 'https://www.solarsystemscope.com/textures/download/2k_mars.jpg',
      //   size: 0.7,
      //   position: { x: 8, y: 0, z: 0 },
      //   materialType: 'MeshStandardMaterial',
      //   isClickable: true,
      // },
      // {
      //   name: 'Jupiter',
      //   textureUrl: 'https://www.solarsystemscope.com/textures/download/2k_jupiter.jpg',
      //   size: 2,
      //   position: { x: 12, y: 0, z: 0 },
      //   materialType: 'MeshStandardMaterial',
      //   isClickable: true,
      // },
      // {
      //   name: 'Moon',
      //   textureUrl: 'https://www.solarsystemscope.com/textures/download/2k_moon.jpg',
      //   size: 0.3,
      //   position: { x: 5.5, y: 0, z: 0 }, // Positioned near Earth
      //   materialType: 'MeshStandardMaterial',
      //   isClickable: true,
      // },
    ];

    celestialBodiesData.forEach(bodyData => { // This will now only process the Sun
      const geometry = new THREE.SphereGeometry(bodyData.size, 32, 32);
      const texture = textureLoader.load(bodyData.textureUrl);
      let material;

      if (bodyData.materialType === 'MeshBasicMaterial') {
        material = new THREE.MeshBasicMaterial({
          map: texture,
          emissive: bodyData.emissive || 0x000000, // Add emissive for Sun
          emissiveIntensity: bodyData.emissiveIntensity || 0,
        });
      } else {
        material = new THREE.MeshStandardMaterial({ map: texture });
      }

      const mesh = new THREE.Mesh(geometry, material);
      mesh.position.set(bodyData.position.x, bodyData.position.y, bodyData.position.z);
      mesh.userData = { name: bodyData.name, isClickable: bodyData.isClickable }; // Store name and clickability
      scene.add(mesh);

      if (bodyData.isClickable) {
        clickableMeshes.push(mesh);
      }
    });

    // Raycaster and mouse vector
    const raycaster = new THREE.Raycaster();
    const mouse = new THREE.Vector2();

    const onClick = (event) => {
      if (!threeContainerRef.current) return;

      // Calculate mouse position in normalized device coordinates (-1 to +1) for both components
      const rect = renderer.domElement.getBoundingClientRect();
      mouse.x = ((event.clientX - rect.left) / rect.width) * 2 - 1;
      mouse.y = -((event.clientY - rect.top) / rect.height) * 2 + 1;

      raycaster.setFromCamera(mouse, camera);
      const intersects = raycaster.intersectObjects(clickableMeshes);

      if (intersects.length > 0) {
        const clickedObject = intersects[0].object;
        const planetName = clickedObject.userData.name;
        setSelectedPlanet(planetName);

        const project = portfolioProjects.find(p => p.planetName === planetName);
        setCurrentProjectData(project || null);

        if (controlsRef.current) {
          controlsRef.current.target.copy(clickedObject.position);
        }
      } else {
        setSelectedPlanet(null);
        setCurrentProjectData(null);
        if (controlsRef.current) {
          controlsRef.current.target.copy(sunPosition); // Reset target to Sun or origin
        }
      }
    };

    renderer.domElement.addEventListener('click', onClick);

    // Animation loop
    const animate = () => {
      requestAnimationFrame(animate);
      if (controlsRef.current) {
        controlsRef.current.update();
      }
      renderer.render(scene, camera); // Reverted to direct rendering
      // if (composerRef.current) { // Commented out post-processing
      //   composerRef.current.render();
      // }
    };

    // Post-processing - Bloom - COMMENTED OUT
    // const renderScene = new RenderPass(scene, camera);
    // const bloomPass = new UnrealBloomPass(new THREE.Vector2(currentRef.clientWidth, currentRef.clientHeight), 1.5, 0.4, 0.85);
    // bloomPass.threshold = 0.21;
    // bloomPass.strength = 1.2;
    // bloomPass.radius = 0.55;

    // const composer = new EffectComposer(renderer);
    // composer.addPass(renderScene);
    // composer.addPass(bloomPass);
    // composerRef.current = composer; // Commented out

    // Handle window resize
    const handleResize = () => {
      if (!currentRef) return; // Ensure currentRef is still valid
      const { clientWidth, clientHeight } = currentRef;
      camera.aspect = clientWidth / clientHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(clientWidth, clientHeight);
      // composer.setSize(clientWidth, clientHeight); // Commented out post-processing
    };
    window.addEventListener('resize', handleResize);

    animate();

    // Clean up on component unmount
    return () => {
      controls.dispose();
      if (currentRef && renderer.domElement) {
        if (currentRef.contains(renderer.domElement)) {
            currentRef.removeChild(renderer.domElement);
        }
      }
      renderer.domElement.removeEventListener('click', onClick);
      window.removeEventListener('resize', handleResize);
      if (composerRef.current) { // Dispose composer resources if needed
        // composerRef.current.dispose(); // This method might not exist, check three.js docs
      }
       // Dispose materials and geometries if necessary for full cleanup
      scene.traverse(object => {
        if (object.geometry) object.geometry.dispose();
        if (object.material) {
          if (Array.isArray(object.material)) {
            object.material.forEach(material => material.dispose());
          } else {
            object.material.dispose();
          }
        }
      });
    };
  }, []);

  return (
    <div style={{ position: 'relative', width: '100%', height: '100vh' }}>
      <div ref={threeContainerRef} className="three-container" style={{ width: '100%', height: '100%' }} />
      {currentProjectData ? (
        <div className="portfolio-details">
          <h2>{currentProjectData.title}</h2>
          <img src={currentProjectData.imageUrl} alt={currentProjectData.title} style={{ maxWidth: '100%', borderRadius: '4px' }} />
          <p>{currentProjectData.description}</p>
          <h3>Technologies Used:</h3>
          <ul>
            {currentProjectData.technologies.map((tech, index) => (
              <li key={index}>{tech}</li>
            ))}
          </ul>
          <a href={currentProjectData.projectUrl} target="_blank" rel="noopener noreferrer">
            View Project
          </a>
        </div>
      ) : selectedPlanet ? (
         <div className="portfolio-details" style={{ padding: '15px' }}> {/* Basic styling for this message too */}
          <p>No project details available for {selectedPlanet}.</p>
        </div>
      ) : (
         <div className="portfolio-details" style={{ padding: '15px' }}> {/* Basic styling for this message too */}
          <p>Click a planet to see a project.</p>
        </div>
      )}
    </div>
  );
};

export default ThreeScene;
