import {React,useEffect,useRef} from 'react'
import planeScene from '../assets/3d/pigeon_plane_-_dae_flying_circus_-_ww1_aircraft.glb';
import {useAnimations,useGLTF} from '@react-three/drei';

const Plane = ({isRotating, ...props})=>
  { 
    const ref=useRef();
    const{scene,animations}=useGLTF(planeScene);
    const {actions}=useAnimations(animations,ref);

    useEffect(()=>{
    if(isRotating){
      actions['Take 001'].play();
    }
    else{
      actions['Take 001'].stop();
    }
    },[actions,isRotating])
    return(
      <mesh scale={[0.215,0.215,0.215]} position={[-4,1,-1]}
       {...props} ref={ref}>
        <primitive object={scene} />
      </mesh>
    )
  }

  export default Plane
