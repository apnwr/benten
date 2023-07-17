import React from "react";
import { useFrame, useLoader } from "@react-three/fiber";
import { TextureLoader } from "three";

export default function LightBulb(props) {
 
    const myMesh = React.useRef()
    

    // useFrame(({ clock }) => {
    //     myMesh.current.rotation.y = clock.getElapsedTime()
    //   })
 
    return (
    <mesh {...props}   ref={myMesh} position={[-7.55,3.45,-6.55]}>
      <pointLight castShadow intensity={1}/>
      <sphereGeometry args={[0.08, 0.1, 0.1]} />
      <meshPhongMaterial  color={"yellow"}  />
    </mesh>
  );
}

