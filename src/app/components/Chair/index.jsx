"use client";

import { useLoader } from "@react-three/fiber";
import { FBXLoader } from "three/examples/jsm/loaders/FBXLoader.js";
import React, { Suspense, useEffect, useRef } from "react";

function Asset() {
  const ChairRef = useRef();
  let ChairModel = useLoader(FBXLoader, "/modals/ArmChair.fbx");

  useEffect(() => {
    ChairRef.current.position.x = 1;
    ChairRef.current.position.z = -1;
    ChairRef.current.rotation.y = -Math.PI * 0.25;
  }, []);

  return (
    <group dispose={null}>
      <primitive
        object={ChairModel}
        dispose={null}
        scale={0.03}
        ref={ChairRef}
      />
    </group>
  );
}

export default function Chair() {
  return (
    <Suspense fallback={null}>
      <Asset />
    </Suspense>
  );
}
