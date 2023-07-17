
import React from "react";
import { useLoader } from "@react-three/fiber";
import { TextureLoader } from "three";

export default function Carpet(props) {
   const texture = useLoader(TextureLoader, "/modals/crpt.jpeg");
  
  return (
    <mesh {...props} recieveShadow>
      <boxGeometry args={[20,0.1,9]} />
      <meshPhysicalMaterial attach="material"
      args={[{ wireframe : false}]}
      displacementScale={0.2}
        map={texture}
        
         />
    </mesh>
  );
}

