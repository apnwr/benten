"use client";

import { useLoader } from "@react-three/fiber";
import { FBXLoader } from "three/examples/jsm/loaders/FBXLoader.js";
import React, { Suspense, useEffect, useRef } from "react";

function Asset() {
  const LedRef = useRef();
  let LedModel = useLoader(FBXLoader, "/modals/led.fbx");

  useEffect(() => {
    LedRef.current.position.x = 7;
    LedRef.current.position.y = 3.1;
    LedRef.current.position.z = 0;
    LedRef.current.rotation.x = Math.PI * 0.5;
     LedRef.current.rotation.y = Math.PI ;
     LedRef.current.rotation.z = Math.PI ;
  }, []);

  return (
    <group dispose={null}>
      <primitive
        object={LedModel}
        dispose={null}
        scale={0.050}
        ref={LedRef}
      />
    </group>
  );
}

export default function LED() {
  return (
    <Suspense fallback={null}>
      <Asset />
    </Suspense>
  );
}
