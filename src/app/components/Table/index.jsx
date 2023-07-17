"use client";

import { useLoader } from "@react-three/fiber";
import { useGLTF } from "@react-three/drei";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { ObjectLoader, TextureLoader } from "three";
import React, { Suspense, useEffect, useRef, useState } from "react";
import { FBXLoader } from "three/examples/jsm/loaders/FBXLoader";


function Asset(props) {
  // WoodFineDark004_Flat
  const texture = useLoader(
    TextureLoader,
    "/modals/tbltexture/WoodPlanksWorn33_Flat.jpg"
  );
  const TableRef = useRef();
  const { nodes, materials } = useGLTF("/modals/Table.gltf");



  // const [objects, setObjects] = useState();
  // const { camera, gl, scene } = useThree();
  // useEffect(() => {
  //   setObjects(groupRef.current.children);
  // }, [groupRef]);

  // useEffect(() => {
  //   nodes.Line01.material.map = texture;
  //   nodes.Cylinder01.material = texture;
  //   nodes.Cylinder03.material = texture;
  // }, [nodes.Line01,nodes.Cylinder01, nodes.Cylinder03, texture]);

  // useEffect(() => {
  //   console.log(TableRef)
  //   TableRef.current.position.y = 2.5;
  //   TableRef.current.position.z = 0;
  //   TableRef.current.position.x = 0;
  //   //TableRef.current.rotation.y = Math.PI * -0.2;
  // }, []);

  useEffect(() => {
    nodes.Cube.material.map = texture;

  }, [nodes.Cube.material]);

  return (
  //   <group dispose={null}>
  //   <primitive
  //     object={TableModel}
  //     dispose={null}
  //     scale={0.003}
  //     ref={TableRef}
     
  //   />
  // </group>
   <group {...props} dispose={null}>
   <mesh geometry={nodes.Cube.geometry} material={nodes.Cube.material} rotation={[-Math.PI / 2, 0, 0]} position={[-0.8, 0.5, 1]} scale={0.8}  ref={TableRef}/>
 </group>
  );
}

export default function Table() {
  return (
    <Suspense fallback={null}>
      <Asset />
    </Suspense>
  );
}
