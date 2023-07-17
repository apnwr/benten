import React from "react";
import { useFrame, useLoader } from "@react-three/fiber";
import { TextureLoader } from "three";

function Box(props) {
  const myMesh = React.useRef()
  const texture = useLoader(TextureLoader, "/modals/dt.jpg");

  useFrame(({ clock }) => {
    myMesh.current.rotation.y = clock.getElapsedTime()
  })
  return (
    <mesh {...props} recieveShadow={true} castShadow ref={myMesh}>
      
      <sphereGeometry args={[2, 38]} />
      <meshPhysicalMaterial map={texture}  color={"white"} />
    </mesh>
  );
}
export default Box;