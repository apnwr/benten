
import React from "react";
import { useLoader } from "@react-three/fiber";
import { TextureLoader } from "three";

export default function Floor(props) {
  // const texture = useLoader(TextureLoader, "/modals/wallC.jpeg");
  // const [colorMap, displacementMap, roughnessMap] = useLoader(TextureLoader, [
  //   'modals/floorC/textures/marble_01_diff_4k.jpg',
  //   'modals/floorC/textures/marble_01_disp_4k.png',
  //   // 'benten/public/modals/floorC/textures/marble_01_nor_gl_4k.exr',
  //   'modals/floorC/textures/marble_01_rough_4k.jpg',
    
    
  // ])

  const texture = useLoader(TextureLoader, "/modals/whitish-gray-brick-wall.jpg");
  return (
    <mesh {...props} recieveShadow>
      <boxGeometry args={[20,1,15]} />
      <meshPhysicalMaterial attach="material" displacementScale={0.2}
        map={texture}
        // displacementMap={displacementMap}
        // normalMap={normalMap}
        // roughnessMap={roughnessMap}
        // aoMap={aoMap} 
         />
    </mesh>
  );
}

