import React, { Suspense, useEffect, useRef, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";
import CanvasLoader from "../Loader";

const Computers = ({ isMobile }) => {
  const computer = useGLTF('./desktop_pc/scene.gltf');
  const modelRef = useRef();
  const controlsRef = useRef();
  const [isUserInteracting, setIsUserInteracting] = useState(false);
  const autoRotateRef = useRef({ speed: 0.005, time: 0 });

  useFrame((state, delta) => {
    // Only auto-rotate when user is not interacting
    if (!isUserInteracting && modelRef.current) {
      autoRotateRef.current.time += delta;
      
      // Create smooth rotation animation
      modelRef.current.rotation.y = Math.sin(autoRotateRef.current.time) * 0.3 - 0.2;
      
      // MODIFY THIS LINE to adjust the baseline position during animation
      modelRef.current.position.y = Math.sin(autoRotateRef.current.time * 0.5) * 0.05 - 2; // Lowered position from -2.25 to -2.75
    }
  });

  useEffect(() => {
    if (controlsRef.current) {
      // Event listeners for detecting user interaction
      const onStart = () => setIsUserInteracting(true);
      const onEnd = () => {
        // Add delay before auto-rotation resumes
        setTimeout(() => setIsUserInteracting(false), 2000);
      };

      controlsRef.current.addEventListener('start', onStart);
      controlsRef.current.addEventListener('end', onEnd);

      return () => {
        if (controlsRef.current) {
          controlsRef.current.removeEventListener('start', onStart);
          controlsRef.current.removeEventListener('end', onEnd);
        }
      };
    }
  }, []);

  return (
    <mesh>
      <hemisphereLight intensity={0.15} groundColor='black' />
      <spotLight
        position={[-20, 50, 10]}
        angle={0.12}
        penumbra={1}
        intensity={1}
        castShadow
        shadow-mapSize={1024}
      />
      <pointLight intensity={1} />
      <group 
        ref={modelRef}
        // MODIFY THESE LINES to adjust the initial position of the model
        position={isMobile ? [0, -1, -2.2] : [0, -2.75, -1.5]} // Lowered position from -2.25 to -2.75
        scale={isMobile ? 0.6 : 0.7} // Current scale
        rotation={[-0.01, -0.2, -0.1]}
      >
        <primitive object={computer.scene} />
      </group>
    </mesh>
  );
};

const ComputersCanvas = () => {
  const [isMobile, setIsMobile] = useState(false);
  const controlsRef = useRef();
  
  useEffect(() => {
    // Add a listener for changes to the screen size
    const mediaQuery = window.matchMedia("(max-width: 500px)");
    // Set the initial value of the `isMobile` state variable
    setIsMobile(mediaQuery.matches);
    // Define a callback function to handle changes to the media query
    const handleMediaQueryChange = (event) => {
      setIsMobile(event.matches);
    };
    // Add the callback function as a listener for changes to the media query
    mediaQuery.addEventListener("change", handleMediaQueryChange);
    // Remove the listener when the component is unmounted
    return () => {
      mediaQuery.removeEventListener("change", handleMediaQueryChange);
    };
  }, []);
  
  return (
    <Canvas
      frameloop='always'
      shadows
      dpr={[1, 2]}
      camera={{ position: [20, 3, 5], fov: 25 }}
      gl={{ preserveDrawingBuffer: true }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls
          ref={controlsRef}
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
          enableDamping={true}
          dampingFactor={0.05}
        />
        <Computers isMobile={isMobile} controlsRef={controlsRef} />
      </Suspense>
      <Preload all />
    </Canvas>
  );
};

export default ComputersCanvas;