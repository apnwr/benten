"use client";

import { useLoader } from "@react-three/fiber";
import { FBXLoader } from "three/examples/jsm/loaders/FBXLoader.js";
import React, { Suspense, useEffect, useRef } from "react";
import { CylinderGeometry, TextureLoader } from "three";

function Asset() {
  const CoffeeTableRef = useRef();
//   let CoffeeTableModel = useLoader(FBXLoader, "/modals/coffeeTable/coffeeTable.fbx");
  const texture = useLoader(TextureLoader, "/modals/wallC.jpeg",);

//   useEffect(() => {
//      CoffeeTableRef.current.position.x = -1;
//      CoffeeTableRef.current.position.y = 0.45;
//      CoffeeTableRef.current.position.z = 1;
    
//     //  CoffeeTableRef.current.rotation.x = Math.PI * 0.5;
//       CoffeeTableRef.current.rotation.y = Math.PI  * 0.5;
//     //   CoffeeTableRef.current.rotation.z = Math.PI * 0.5 ;
//   }, []);

  return (
    <mesh position={[-0.20,1, 1]}>
        <cylinderGeometry args={[1.8,1.1, 0.8, 32]} />
        <meshPhysicalMaterial map={texture}/>
    </mesh>
  );
}

export default function CoffeeTable() {
  return (
    <Suspense fallback={null}>
      <Asset />
    </Suspense>
  );
}
