"use client";

import { useGLTF } from "@react-three/drei";
import React, { Suspense, useEffect, useRef } from "react";
import { useLoader } from "@react-three/fiber";
import { TextureLoader } from "three";

function Asset() {
  // const texture = useLoader(TextureLoader, "/modals/Roughness.png");

  const [colorMap, normalMap, aoMap, roughnessMap, metalnessMap] = useLoader(
    TextureLoader,
    [
      // "/modals/sofa/BaseColor.png",
      "/modals/woodparquet_85-1K/woodparquet_85_basecolor-1K.png",
      "/modals/sofa/Normal.png",    
      
      "/modals/sofa/AO.png",
      "/modals/sofa/Roughness.png",
      "/modals/sofa/Metallic.png"
    ]
  );

  const SofaRef = useRef();
  const { nodes, materials } = useGLTF("/modals/sofa.gltf");

  useEffect(() => {
    // materials.sofa.wireFrame = true;
    materials.sofa.map = colorMap;
     materials.sofa.normalMap = normalMap;
    materials.sofa.aoMap = aoMap;
    materials.sofa.roughnessMap = roughnessMap;
    materials.sofa.roughness = 0.8;
    materials.sofa.metalness = 0.2;
    // materials.sofa.metalnessMap = metalnessMap;
      materials.sofa.displacementScale = 0.2;
    
  }, [materials]);

  return (
    <group dispose={null}>
      <mesh
        
        geometry={nodes.sofa.geometry}
        material={materials.sofa}
        position={[-4, 0.5, 0]}
        rotation={[-Math.PI * 0.5, 0, Math.PI * 0.5]}
        ref={SofaRef}
        scale={2.5}
       
        
        
      />
    </group>
  );
}

export default function Sofa() {
  return (
    <>
      <Suspense fallback={null}>
        <Asset />
      </Suspense>
    </>
  );
}
