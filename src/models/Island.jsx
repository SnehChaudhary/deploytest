import React, { useRef, useEffect, useState } from 'react';
import { useGLTF } from '@react-three/drei';
import { useFrame, useThree } from '@react-three/fiber';
import { a } from '@react-spring/three';
import islandscene from '../assets/3d/peach_castle.glb';

export function Island({ isRotating, setIsRotating,setCurrentStage, ...props }) {
  const islandRef = useRef();
  const { gl, viewport } = useThree();
  const { nodes, materials } = useGLTF(islandscene);

  const lastX = useRef(0);
  const rotationSpeed = useRef(0);
  const dampingFactor = 0.95;
  // const [currentStage, setCurrentStage] = useState(null);
  const handlePointerDown = (e) => {
    e.stopPropagation();
    setIsRotating(true);
    const clientX = e.touches ? e.touches[0].clientX : e.clientX;
    lastX.current = clientX;
  };

  const handlePointerUp = (e) => {
    e.stopPropagation();
    setIsRotating(false);
  };

  const handlePointerMove = (e) => {
    e.stopPropagation();
    if (isRotating) {
      const clientX = e.touches ? e.touches[0].clientX : e.clientX;
      const delta = (clientX - lastX.current) / viewport.width;
      islandRef.current.rotation.y += delta * 0.01 * Math.PI;

      lastX.current = clientX;
      rotationSpeed.current = delta * 0.01 * Math.PI;
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === 'ArrowLeft') {
      setIsRotating(true);
      islandRef.current.rotation.y += 0.005 * Math.PI;
      rotationSpeed.current = 0.007;
    } else if (e.key === 'ArrowRight') {
      setIsRotating(true);
      islandRef.current.rotation.y -= 0.005 * Math.PI;
      rotationSpeed.current = -0.007;
    }
  };

  const handleKeyUp = (e) => {
    if (e.key === 'ArrowLeft' || e.key === 'ArrowRight') {
      setIsRotating(false);
    }
  };

  useFrame(() => {
    // If not rotating, apply damping to slow down the rotation (smoothly)
    if (!isRotating) {
      // Apply damping factor
      rotationSpeed.current *= dampingFactor;

      // Stop rotation when speed is very small
      if (Math.abs(rotationSpeed.current) < 0.001) {
        rotationSpeed.current = 0;
      }

      islandRef.current.rotation.y += rotationSpeed.current;
    } else {
      // When rotating, determine the current stage based on island's orientation
      const rotation = islandRef.current.rotation.y;

      /**
       * Normalize the rotation value to ensure it stays within the range [0, 2 * Math.PI].
       * The goal is to ensure that the rotation value remains within a specific range to
       * prevent potential issues with very large or negative rotation values.
       *  Here's a step-by-step explanation of what this code does:
       *  1. rotation % (2 * Math.PI) calculates the remainder of the rotation value when divided
       *     by 2 * Math.PI. This essentially wraps the rotation value around once it reaches a
       *     full circle (360 degrees) so that it stays within the range of 0 to 2 * Math.PI.
       *  2. (rotation % (2 * Math.PI)) + 2 * Math.PI adds 2 * Math.PI to the result from step 1.
       *     This is done to ensure that the value remains positive and within the range of
       *     0 to 2 * Math.PI even if it was negative after the modulo operation in step 1.
       *  3. Finally, ((rotation % (2 * Math.PI)) + 2 * Math.PI) % (2 * Math.PI) applies another
       *     modulo operation to the value obtained in step 2. This step guarantees that the value
       *     always stays within the range of 0 to 2 * Math.PI, which is equivalent to a full
       *     circle in radians.
       */
      const normalizedRotation =
        ((rotation % (2 * Math.PI)) + 2 * Math.PI) % (2 * Math.PI);

      // Set the current stage based on the island's orientation
      switch (true) {
        case normalizedRotation >= 3.5 && normalizedRotation <= 4.3:
          setCurrentStage(4);
          break;
        // case normalizedRotation >= 0.85 && normalizedRotation <= 1.3:
        //   setCurrentStage(3);
        //   break;
        case normalizedRotation >=  4.5 && normalizedRotation <= 5.2:
          setCurrentStage(2);
          break;
        case normalizedRotation >= 0.1 && normalizedRotation <= 1.2:
          setCurrentStage(1);
          break;
        default:
          setCurrentStage(null);
      }
    }
  });

  useEffect(() => {
    const canvas = gl.domElement;
    canvas.addEventListener('pointerdown', handlePointerDown);
    canvas.addEventListener('pointerup', handlePointerUp);
    canvas.addEventListener('pointermove', handlePointerMove);
    window.addEventListener('keydown', handleKeyDown);
    window.addEventListener('keyup', handleKeyUp);

    return () => {
      canvas.removeEventListener('pointerdown', handlePointerDown);
      canvas.removeEventListener('pointerup', handlePointerUp);
      canvas.removeEventListener('pointermove', handlePointerMove);
      window.removeEventListener('keydown', handleKeyDown);
      window.removeEventListener('keyup', handleKeyUp);
    };
  }, [gl, isRotating]);

  return (
    <a.group ref={islandRef }{...props} dispose={null}>
    <group rotation={[-Math.PI / 2, 0, 0]}>
      <mesh
       
        
        geometry={nodes.Tree_1.geometry}
        material={materials['Tree.001']}
        position={[-26.704, -61.507, 3.296]}
        rotation={[0, 0, -1.262]}
        scale={2.2}
      />
      <mesh
       
        
        geometry={nodes.Tree025_1.geometry}
        material={materials['Tree.001']}
        position={[31.232, -68.644, 0.351]}
        rotation={[0, 0, -Math.PI]}
        scale={2.2}
      />
      <mesh
       
        
        geometry={nodes.Tree024_1.geometry}
        material={materials['Tree.001']}
        position={[18.716, -57.018, 5.073]}
        rotation={[0, 0, 0.109]}
        scale={2.2}
      />
      <mesh
       
        
        geometry={nodes.Tree023_1.geometry}
        material={materials['Tree.001']}
        position={[115.635, 78.553, 13.358]}
        rotation={[0, 0, -2.408]}
        scale={2.2}
      />
      <mesh
       
        
        geometry={nodes.Tree022_1.geometry}
        material={materials['Tree.001']}
        position={[106.248, 63.943, 10.096]}
        rotation={[0, 0, -1.519]}
        scale={2.2}
      />
      <mesh
       
        
        geometry={nodes.Tree021_1.geometry}
        material={materials['Tree.001']}
        position={[99.462, 43.689, 6.973]}
        rotation={[0, 0, 2.077]}
        scale={2.2}
      />
      <mesh
       
        
        geometry={nodes.Tree020_1.geometry}
        material={materials['Tree.001']}
        position={[107.97, 36.632, 6.802]}
        rotation={[0, 0, -1.082]}
        scale={2.2}
      />
      <mesh
       
        
        geometry={nodes.Tree019_1.geometry}
        material={materials['Tree.001']}
        position={[115.638, 16.675, 6.059]}
        rotation={[0, 0, -0.736]}
        scale={2.2}
      />
      <mesh
       
        
        geometry={nodes.Tree018_1.geometry}
        material={materials['Tree.001']}
        position={[104.933, 7.082, 4.453]}
        rotation={[0, 0, 1.948]}
        scale={2.2}
      />
      <mesh
       
        
        geometry={nodes.Tree017_1.geometry}
        material={materials['Tree.001']}
        position={[111.985, -14.637, 0.964]}
        rotation={[0, 0, -1.193]}
        scale={2.2}
      />
      <mesh
       
        
        geometry={nodes.Tree016_1.geometry}
        material={materials['Tree.001']}
        position={[-96.091, 46.813, 6.465]}
        rotation={[0, 0, 1.343]}
        scale={2.2}
      />
      <mesh
       
        
        geometry={nodes.Tree015_1.geometry}
        material={materials['Tree.001']}
        position={[-90.036, 32.864, 5.04]}
        rotation={[0, 0, -1.443]}
        scale={2.2}
      />
      <mesh
       
        
        geometry={nodes.Tree014_1.geometry}
        material={materials['Tree.001']}
        position={[-101.499, 24.502, 4.416]}
        rotation={[0, 0, 2.592]}
        scale={2.2}
      />
      <mesh
       
        
        geometry={nodes.Tree013_1.geometry}
        material={materials['Tree.001']}
        position={[-88.639, -1.237, 3.131]}
        rotation={[0, 0, -1.15]}
        scale={2.2}
      />
      <mesh
       
        
        geometry={nodes.Tree012_1.geometry}
        material={materials['Tree.001']}
        position={[-74.769, -19.589, 2.449]}
        rotation={[0, 0, -1.757]}
        scale={2.2}
      />
      <mesh
       
        
        geometry={nodes.Tree011_1.geometry}
        material={materials['Tree.001']}
        position={[-83.181, -25.874, 1.515]}
        rotation={[0, 0, -0.737]}
        scale={2.2}
      />
      <mesh
       
        
        geometry={nodes.Tree009_1.geometry}
        material={materials['Tree.001']}
        position={[-100.698, -71.297, 3.683]}
        rotation={[0, 0, 1.474]}
        scale={2.2}
      />
      <mesh
       
        
        geometry={nodes.Tree010_1.geometry}
        material={materials['Tree.001']}
        position={[-105.512, -36.173, 0.724]}
        rotation={[0, 0, 0.221]}
        scale={2.2}
      />
      <mesh
       
        
        geometry={nodes.Tree008_1.geometry}
        material={materials['Tree.001']}
        position={[-80.938, -67.23, 1.852]}
        rotation={[0, 0, -0.679]}
        scale={2.2}
      />
      <mesh
       
        
        geometry={nodes.Tree007_1.geometry}
        material={materials['Tree.001']}
        position={[60.055, -20.121, 0.674]}
        rotation={[0, 0, -Math.PI]}
        scale={2.2}
      />
      <mesh
       
        
        geometry={nodes.Tree006_1.geometry}
        material={materials['Tree.001']}
        position={[38.808, -31.955, 1.294]}
        rotation={[0, 0, -1.417]}
        scale={2.2}
      />
      <mesh
       
        
        geometry={nodes.Tree005_1.geometry}
        material={materials['Tree.001']}
        position={[25.205, -46.281, 2.64]}
        rotation={[0, 0, -2.204]}
        scale={2.2}
      />
      <mesh
       
        
        geometry={nodes.Tree004_1.geometry}
        material={materials['Tree.001']}
        position={[3.889, -63.858, 6.598]}
        rotation={[0, 0, 0.328]}
        scale={2.2}
      />
      <mesh
       
        
        geometry={nodes.Tree003_1.geometry}
        material={materials['Tree.001']}
        position={[-16.804, -44.338, 8.254]}
        rotation={[0, 0, -0.441]}
        scale={2.2}
      />
      <mesh
       
        
        geometry={nodes.Tree002_1.geometry}
        material={materials['Tree.001']}
        position={[-28.629, -37.304, 7.085]}
        rotation={[0, 0, 1.45]}
        scale={2.2}
      />
      <mesh
       
        
        geometry={nodes.Tree001_1.geometry}
        material={materials['Tree.001']}
        position={[-37.857, -57.26, 3.732]}
        rotation={[0, 0, -Math.PI]}
        scale={2.2}
      />
              
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Skybox_1.geometry}
        material={materials.Material}
        // position={[18.223, 111.323, -0.861]}
        scale={493.2}
      />

      <mesh
       
        
        geometry={nodes.Windows001_1.geometry}
        material={materials['Windows.001']}
        position={[-54.335, 82.357, -4.841]}
        rotation={[0, 0, 1.361]}
        scale={1.822}
      />
      <mesh
       
        
        geometry={nodes.Castle_1.geometry}
        material={materials['Castle.001']}
        position={[-48.653, 39.698, 36.838]}
        rotation={[0, 0, Math.PI / 2]}
        scale={2.2}
      />
      <mesh
       
        
        geometry={nodes.Grass_1.geometry}
        material={materials.Garden}
        position={[90.162, 4.438, 3.44]}
        rotation={[0, 0, -Math.PI]}
        scale={2.2}
      />
    </group>
  </a.group>
  );
}

export default Island;
