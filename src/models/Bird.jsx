import React, { useEffect, useRef } from 'react';
import birdScene from '../assets/3d/seagull.glb';
import { useAnimations, useGLTF } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';

const Bird = () => {
  const birdRef = useRef();
  const { scene, animations } = useGLTF(birdScene);
  const { actions } = useAnimations(animations, birdRef);

  useEffect(() => {
    actions['ArmatureAction.006'].play();
  }, [actions]);

  useFrame(({ clock, camera }) => {
    // Update the Y position to simulate bird-like motion using a sine wave
    birdRef.current.position.y = Math.sin(clock.elapsedTime) * 0.2 + 2;
  
    // Define the boundaries relative to the camera's position
    const leftBoundary = camera.position.x - 10;
    const rightBoundary = camera.position.x + 10;
  
    // Check if the bird reached a certain endpoint relative to the camera
    if (birdRef.current.position.x < leftBoundary) {
      // Change direction to right and rotate the bird 180 degrees on the y-axis
      birdRef.current.rotation.y = 0; // Facing right
    } else if (birdRef.current.position.x > rightBoundary) {
      // Change direction to left and rotate the bird 180 degrees on the y-axis
      birdRef.current.rotation.y = Math.PI; // Facing left
    }
  
    // Randomly change direction
    if (Math.random() < 70) {
      birdRef.current.rotation.y = Math.random() < 5 ? 0 : Math.PI;
    }
  
    // Update the X and Z positions based on the direction
    if (birdRef.current.rotation.y === Math.PI) {
      // Moving to the left
      birdRef.current.position.x += 0.01;
      birdRef.current.position.z -= 0.01;
    } else {
      // Moving to the right
      birdRef.current.position.x -= 0.01;
      birdRef.current.position.z -= 0.01;
    }
  });

  return (
    <mesh ref={birdRef} position={[4, 2, 1]} scale={[1, 1, 1]}>
      <primitive object={scene} />
    </mesh>
  );
};

export default Bird;