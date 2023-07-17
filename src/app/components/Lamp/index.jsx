"use client";

import { useLoader } from "@react-three/fiber";
import { FBXLoader } from "three/examples/jsm/loaders/FBXLoader.js";
import React, { Suspense, useEffect, useRef } from "react";
import LightBulb from "../LightBulb";

function Asset() {

  const LampRef = useRef();
  let LampModel = useLoader(FBXLoader, "/modals/lmpRar/floor lamp 001.FBX");


  useEffect(() => {

    LampRef.current.position.x = -7.55;
    LampRef.current.position.y = 0.65;
    LampRef.current.position.z = -6.55;


    // SofaRef.current.position.x = -3;
  }, []);

  return (

   <>
  
      <primitive
        object={LampModel}
        dispose={null}
        scale={0.04}
        ref={LampRef}
       
       
      />
      </>


  );
}

export default function Lamp() {
  return (
    <Suspense fallback={null}>
      <LightBulb />
      <Asset />
    </Suspense>
  );
}
