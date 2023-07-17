"use client";

import { useLoader } from "@react-three/fiber";
import { FBXLoader } from "three/examples/jsm/loaders/FBXLoader.js";
import React, { Suspense, useEffect, useRef } from "react";
import { TextureLoader } from "three";

function Asset() {

  const TableRef = useRef();
  const texture = useLoader(TextureLoader, "/modals/wallC.jpeg",);


  return (

      <mesh position={[6.8,1,0]} ref={TableRef}>
        <boxGeometry args={[1.75, 0.75, 7]}/>
        <meshBasicMaterial args={[{color : "", wireframe : false}]} map={texture}/>
      </mesh>


  );
}

export default function TvTable() {
  return (
    <Suspense fallback={null}>
      <Asset />
    </Suspense>
  );
}
