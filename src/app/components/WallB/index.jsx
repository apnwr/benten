import React, { useEffect } from "react";
import { useFrame, useLoader } from "@react-three/fiber";
import { TextureLoader } from "three";

export default function WallB(props) {
 
    const myMesh = React.useRef()
    // const texture = useLoader(TextureLoader, "/modals/wallB.jpeg");

    // useFrame(({ clock }) => {
    //     myMesh.current.rotation.y = clock.getElapsedTime()
    //   })




    return (
    <mesh {...props} castShadow rotation-y={Math.PI }  ref={myMesh} position={[10,4.5,0]}>
      {/* <pointLight castShadow /> */}
      <boxGeometry args={[0.25,10,15]}  />
      <meshPhysicalMaterial color="#bbce8f" />
    </mesh>
  );
}

