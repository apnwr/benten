import React, { useEffect } from "react";
import { useFrame, useLoader } from "@react-three/fiber";
import { TextureLoader } from "three";

export default function Walls(props) {
 
    const myMesh = React.useRef()
    const texture = useLoader(TextureLoader, "/modals/wallB.jpeg");

    // useFrame(({ clock }) => {
    //     myMesh.current.rotation.y = clock.getElapsedTime()
    //   })


    return (
    <mesh {...props}  rotation-y={Math.PI * 0.5} ref={myMesh} position={[0,4.5,-7.40]}>
      {/* <pointLight castShadow /> */}
      <boxGeometry args={[0.25,10,20]}  />
      <meshPhysicalMaterial color="#bbbe8f" />
    </mesh>
  );
}

// args={[{color : "white"}]}
