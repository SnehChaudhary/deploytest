import React, { useState,useEffect,useRef } from 'react'
import {Suspense} from 'react'
import {Canvas} from '@react-three/fiber'
import Loader from '../components/Loader'
import Island from '../models/Island';
import Bird from '../models/Bird';
import Plane from '../models/Plane';
import Homeinfo from '../components/Homeinfo';
import music from '../assets/music.mp3';
import { soundoff, soundon } from "../assets/icons";
const Home = () => {
  const audioRef = useRef(new Audio(music));
  audioRef.current.loop=true;
  audioRef.current.volume=0.7;
  const[isPlayingmusic,setIsPlayingmusic]=useState(false);
  useEffect(()=>{
   if(isPlayingmusic){ audioRef.current.play();}
   return()=>{
    audioRef.current.pause();
   }

  },[isPlayingmusic])
  const [isRotating,setIsRotating]=useState(false)
  const [currentStage, setCurrentStage] = useState(1);
  const adjustIslandForScreenSize=()=>
    {
      let screenscale = null;
      let screenPosition = [3,-30.5,-180];
      let rotation = [1,10,3];
      if(window.innerWidth < 786){
        screenscale = [0.8,0.8,0.8];
      }
      else{
        screenscale=[1,1,1];
      }

      return [screenscale,screenPosition,rotation];
    }
  const [islandScale, islandPosition]=
  adjustIslandForScreenSize();


  const adjustPlaneForScreenSize=()=>
    {
      let screenscale,screenPosition ;
      let rotation = [0.1,-6.3,0];
      if(window.innerWidth < 786){
        screenscale = [-2,2,1.5];
        screenPosition = [0,-1.5,0];
      }
      else{
        screenscale=[3,3,3];
        screenPosition = [0,-4,-4];
      }

      return [screenscale,screenPosition];
    }
  const [planeScale, planePosition]=
  adjustPlaneForScreenSize();


  return (
    <section className='w-full h-screen relative'>
      <div className='absolute top-28 left-0 right-0 z-10 flex items-center justify-center'>
        {currentStage && <Homeinfo currentStage={currentStage} />}
      </div>
        <Canvas
        className={`w-full h-screen bg-transparent ${isRotating ? "cursor-grabbing" : "cursor-grab"}`}
        camera={{ near: 0.1, far: 1000 }}
        >
        <Suspense fallback={<Loader/>}>
          <directionalLight position={[1,1,1]} intensity={2}/>
          <ambientLight/>
          <pointLight/>
          <spotLight/>
          <hemisphereLight/>
          <Bird />
          <Island
            isRotating={isRotating}
            setIsRotating={setIsRotating}
            setCurrentStage={setCurrentStage}
            position={islandPosition}
            rotation={[0.1,-6.3,0]}
            scale={islandScale}
          />
          <Plane
          planePosition={planePosition}
          planeScale={planeScale}
          isRotating={isRotating}
          rotation={[0,20,0]}
          />

        </Suspense>
      </Canvas>
      <div className='absolute bottom-2 left-2 '>
        <img
          src={!isPlayingmusic ? soundoff : soundon}
          alt='jukebox'
          onClick={() => setIsPlayingmusic(!isPlayingmusic)}
          className='w-10 h-10 cursor-pointer object-contain'
        />
      </div>



    </section>
  )
}

export default Home

