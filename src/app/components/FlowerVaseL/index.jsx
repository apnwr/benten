"use client";

import { useLoader } from "@react-three/fiber";
import { FBXLoader } from "three/examples/jsm/loaders/FBXLoader.js";
import React, { Suspense, useEffect, useRef } from "react";
import { TextureLoader } from "three";
import { useGLTF } from "@react-three/drei";

function Asset(props) {
  const FlowerPotRef = useRef();
  // let FlowerPotModel = useLoader(FBXLoader, "/modals/flowerPot/anturium.fbx");
  const { nodes, materials } = useGLTF("/modals/flowerPot/anturium.gltf")

  const [leavesMap, flowersMap, aoMap, roughnessMap, metalnessMap] = useLoader(
    TextureLoader,
    [
      "/modals/flowerPot/Leaves0111_6_S.png",
      "/modals/flowerPot/Flowers0186_7_S_2.png",
      
      "/modals/sofa/AO.png",
      "/modals/sofa/Roughness.png",
      "/modals/sofa/Metallic.png"
    ]
  );

  useEffect(() => {
    FlowerPotRef.current.position.x = 6.8;
    FlowerPotRef.current.position.y = 1.45;
    FlowerPotRef.current.position.z = -7.5;
    //  CoffeeTableRef.current.rotation.x = Math.PI * 0.5;
    //   CoffeeTableRef.current.rotation.y = Math.PI  * 0.5;
    //   CoffeeTableRef.current.rotation.z = Math.PI * 0.5 ;
  }, []);

  return (
    // <group dispose={null}>
    //   <primitive
    //     object={FlowerPotModel}
    //     dispose={null}
    //      scale={0.030}
    //     ref={FlowerPotRef}
    //   />
    // </group>
    <group {...props} dispose={null} ref={FlowerPotRef}>
    <group position={[1.8, -.1, 1.5]} rotation={[-Math.PI / 2, 0, 0]} scale={0.030}>
      <group position={[-2.295, 6.293, 4.124]} rotation={[0, 0, -2.163]} scale={0.056} >
        <mesh geometry={nodes.Plane001.geometry} material={materials.flower}  position={[-16.143, -97.87, 228.991]} rotation={[Math.PI / 2, 0, 0]} >
        <meshPhysicalMaterial attach="material" map={flowersMap} />
        </mesh>
        <mesh geometry={nodes.Plane005.geometry} material={materials.stebel} position={[-59.547, -97.218, 205.468]} rotation={[2.763, 0.578, -0.696]} scale={1.819} >
        <meshBasicMaterial attach="material" map={leavesMap} />
        </mesh>
      </group>
      <mesh geometry={nodes.Cylinder005.geometry} material={materials.stebel}  position={[8.232, 3.583, -13.467]} rotation={[-0.352, 0.165, -2.123]} scale={0.344} />
      <mesh geometry={nodes.Cylinder006.geometry} material={materials.stebel}  position={[8.232, 3.583, -13.467]} rotation={[-0.352, 0.165, 2.24]} scale={0.344} />
      <mesh geometry={nodes.Cylinder007.geometry} material={materials.stebel}  position={[8.232, 3.583, -13.467]} rotation={[-0.352, 0.165, 0.32]} scale={0.344} />
      <mesh geometry={nodes.Cylinder008.geometry} material={materials.stebel}  position={[8.232, 3.583, -13.467]} rotation={[-0.352, 0.165, -1.6]} scale={0.344} />
      <mesh geometry={nodes.Cylinder009.geometry} material={materials.stebel}  position={[8.232, 3.583, -13.467]} rotation={[-0.352, 0.165, 2.764]} scale={0.344} />
      <mesh geometry={nodes.Cylinder010.geometry} material={materials.stebel}  position={[8.232, 3.583, -13.467]} rotation={[-0.352, 0.165, 0.844]} scale={0.344} />
      <mesh geometry={nodes.Cylinder011.geometry} material={materials.stebel}  position={[8.232, 3.583, -13.467]} rotation={[-0.352, 0.165, -1.076]} scale={0.344} />
      <mesh geometry={nodes.Cylinder012.geometry} material={materials.stebel}  position={[8.232, 3.583, -13.467]} rotation={[-0.352, 0.165, -2.996]} scale={0.344} />
      <mesh geometry={nodes.Cylinder013.geometry} material={materials.stebel}  position={[8.182, 1.465, -13.467]} rotation={[0.213, 0.326, 1.545]} scale={0.323} />
      <mesh geometry={nodes.Cylinder014.geometry} material={materials.stebel}  position={[8.182, 1.465, -13.467]} rotation={[0.213, 0.326, -0.898]} scale={0.247} />
      <mesh geometry={nodes.Cylinder015.geometry} material={materials.stebel}  position={[8.182, 1.465, -13.467]} rotation={[0.213, 0.326, -1.422]} scale={0.286} />
      <mesh geometry={nodes.Cylinder016.geometry} material={materials.stebel}  position={[8.182, 1.465, -13.467]} rotation={[0.213, 0.326, -2.818]} scale={0.344} />
      <mesh geometry={nodes.Cylinder017.geometry} material={materials.stebel}  position={[8.182, 1.465, -13.467]} rotation={[0.213, 0.326, 2.942]} scale={0.384} />
      <mesh geometry={nodes.Cylinder018.geometry} material={materials.stebel}  position={[8.182, 1.465, -13.467]} rotation={[0.213, 0.326, 2.418]} scale={0.344} />
      <mesh geometry={nodes.Cylinder019.geometry} material={materials.stebel}  position={[8.182, 1.465, -13.467]} rotation={[0.213, 0.326, 1.022]} scale={0.298} />
      <mesh geometry={nodes.Cylinder020.geometry} material={materials.stebel}  position={[8.182, 1.465, -13.467]} rotation={[0.213, 0.326, 0.498]} scale={0.344} />
      <mesh geometry={nodes.Cylinder021.geometry} material={materials.stebel}  position={[1.593, -1.083, -11.777]} rotation={[0.052, -0.598, -0.337]} scale={0.267} />
      <mesh geometry={nodes.Cylinder022.geometry} material={materials.stebel}  position={[1.593, -1.083, -11.777]} rotation={[0.052, -0.598, -2.78]} scale={0.267} />
      <mesh geometry={nodes.Cylinder023.geometry} material={materials.stebel}  position={[1.593, -1.083, -11.777]} rotation={[0.052, -0.598, 2.98]} scale={0.267} />
      <mesh geometry={nodes.Cylinder024.geometry} material={materials.stebel}  position={[1.593, -1.083, -11.777]} rotation={[-0.449, -0.412, 0.614]} scale={0.29} />
      <mesh geometry={nodes.Cylinder025.geometry} material={materials.stebel}  position={[1.593, -1.083, -11.777]} rotation={[0.052, -0.598, 1.06]} scale={0.267} />
      <mesh geometry={nodes.Cylinder026.geometry} material={materials.stebel}  position={[1.926, -0.679, -12.954]} rotation={[0.052, -0.598, 0.536]} scale={0.344} />
      <mesh geometry={nodes.Cylinder027.geometry} material={materials.stebel}  position={[1.593, -1.083, -11.777]} rotation={[0.052, -0.598, -0.86]} scale={0.267} />
      <mesh geometry={nodes.Cylinder028.geometry} material={materials.stebel}  position={[1.593, -1.083, -11.777]} rotation={[0.052, -0.598, -1.384]} scale={0.267} />
      <mesh geometry={nodes.Cylinder029.geometry} material={materials.stebel}  position={[0.412, -2.383, -11.84]} rotation={[0.537, 0.206, 1.681]} scale={0.243} />
      <mesh geometry={nodes.Cylinder030.geometry} material={materials.stebel}  position={[0.412, -2.383, -11.84]} rotation={[0.537, 0.206, -0.763]} scale={0.267} />
      <mesh geometry={nodes.Cylinder031.geometry} material={materials.stebel}  position={[1.203, -2.611, -13.035]} rotation={[0.527, -0.231, -1.991]} scale={0.284} />
      <mesh geometry={nodes.Cylinder032.geometry} material={materials.stebel}  position={[1.203, -2.611, -13.035]} rotation={[0.527, -0.231, 2.896]} scale={0.311} />
      <mesh geometry={nodes.Cylinder033.geometry} material={materials.stebel}  position={[1.203, -2.611, -13.035]} rotation={[0.527, -0.231, 2.373]} scale={0.262} />
      <mesh geometry={nodes.Cylinder034.geometry} material={materials.stebel}  position={[1.203, -2.611, -13.035]} rotation={[0.527, -0.231, 1.849]} scale={0.296} />
      <mesh geometry={nodes.Cylinder035.geometry} material={materials.stebel}  position={[0.412, -2.383, -11.84]} rotation={[0.537, 0.206, 1.157]} scale={0.22} />
      <mesh geometry={nodes.Cylinder036.geometry} material={materials.stebel}  position={[0.412, -2.383, -11.84]} rotation={[0.537, 0.206, 0.634]} scale={0.267} />
      <mesh geometry={nodes.Cylinder037.geometry} material={materials.stebel}  position={[-5.38, 2.374, -10.829]} rotation={[-0.571, 0.015, -1.814]} scale={0.201} />
      <mesh geometry={nodes.Cylinder038.geometry} material={materials.stebel}  position={[-5.38, 2.374, -10.829]} rotation={[-0.571, 0.015, 2.025]} scale={0.201} />
      <mesh geometry={nodes.Cylinder039.geometry} material={materials.stebel}  position={[-5.38, 2.374, -10.829]} rotation={[-0.571, 0.015, 1.502]} scale={0.201} />
      <mesh geometry={nodes.Cylinder040.geometry} material={materials.stebel}  position={[-5.38, 2.374, -10.829]} rotation={[-0.571, 0.015, 0.106]} scale={0.201} />
      <mesh geometry={nodes.Cylinder041.geometry} material={materials.stebel}  position={[-5.38, 2.374, -10.829]} rotation={[-0.571, 0.015, -0.418]} scale={0.201} />
      <mesh geometry={nodes.Cylinder042.geometry} material={materials.stebel}  position={[-5.38, 2.374, -10.829]} rotation={[-0.571, 0.015, -0.942]} scale={0.201} />
      <mesh geometry={nodes.Cylinder043.geometry} material={materials.stebel}  position={[-5.38, 2.374, -10.829]} rotation={[-0.571, 0.015, -2.338]} scale={0.201} />
      <mesh geometry={nodes.Cylinder044.geometry} material={materials.stebel}  position={[-5.38, 2.374, -10.829]} rotation={[-0.571, 0.015, -2.861]} scale={0.201} />
      <group position={[10.668, -10.165, 0.568]} rotation={[-2.625, -0.633, 2.336]} scale={0.041}>
        <mesh geometry={nodes.mesh_40.geometry} material={materials.leaf} map={leavesMap} />
        <mesh geometry={nodes.mesh_40_1.geometry} material={materials.stebel} map={leavesMap} />
      </group>
      <mesh geometry={nodes.Box003.geometry} material={materials.tychinka} position={[8.634, 0.841, 20.228]} rotation={[0.029, 0.797, 1.724]} scale={0.077} />
      <mesh geometry={nodes.Plane002.geometry} material={materials.flower}  map={flowersMap}position={[8.419, -0.793, 22.298]} rotation={[-2.464, 1.364, -2.119]} scale={0.077} />
      <group position={[-8.186, 3.929, 0.402]} rotation={[-2.477, -0.473, 2.614]} scale={0.039}>
        <mesh geometry={nodes.mesh_43.geometry} material={materials.leaf} map={leavesMap} />
        <mesh geometry={nodes.mesh_43_1.geometry} material={materials.stebel} map={leavesMap} />
      </group>
      <mesh geometry={nodes.Box004.geometry} material={materials.tychinka} position={[-8.041, -9.4, 23.615]} rotation={[1.121, -0.548, -0.247]} scale={[0.081, 0.093, 0.082]} />
      <group position={[-0.464, 10.249, 0.647]} rotation={[-2.356, 0.128, -3.015]} scale={0.04}>
        <mesh geometry={nodes.mesh_45.geometry} material={materials.leaf} map={leavesMap} />
        <mesh geometry={nodes.mesh_45_1.geometry} material={materials.stebel} map={leavesMap} />
      </group>
      <mesh geometry={nodes.Cylinder003.geometry} material={materials.stebel} map={leavesMap} position={[1.394, -1.448, -4.096]} rotation={[0.408, -0.407, 0.509]} scale={[-0.083, 0.08, 0.09]} />
      <group position={[-7.032, 1.776, 1.155]} rotation={[2.803, 0.733, -1.086]} scale={0.042}>
        <mesh geometry={nodes.mesh_47.geometry} material={materials.leaf} map={leavesMap} />
        <mesh geometry={nodes.mesh_47_1.geometry} material={materials.stebel} map={leavesMap} />
      </group>
      <mesh geometry={nodes.Cylinder052.geometry} material={materials.stebel} map={leavesMap} position={[4.173, -0.535, -13.035]} rotation={[0.537, 0.206, 1.681]} scale={0.331} />
      <group position={[10.639, 5.097, 10.154]} rotation={[-2.453, -0.433, 2.67]} scale={0.076}>
        <mesh geometry={nodes.mesh_49.geometry} material={materials.leaf} map={leavesMap} />
        <mesh geometry={nodes.mesh_49_1.geometry} material={materials.stebel} map={leavesMap} />
      </group>
      <group position={[-6.899, 3.288, 1.419]} rotation={[2.378, 0.243, -0.246]} scale={0.043}>
        <mesh geometry={nodes.mesh_50.geometry} material={materials.leaf} map={leavesMap} />
        <mesh geometry={nodes.mesh_50_1.geometry} material={materials.stebel} map={leavesMap} />
      </group>
      <group position={[4.897, -4.558, 9.196]} rotation={[2.509, -0.518, 0.594]} scale={0.072}>
        <mesh geometry={nodes.mesh_51.geometry} material={materials.leaf} map={leavesMap} />
        <mesh geometry={nodes.mesh_51_1.geometry} material={materials.stebel} map={leavesMap} />
      </group>
      <group position={[-9.536, 4.023, 3.538]} rotation={[2.421, -0.368, 0.388]} scale={0.044}>
        <mesh geometry={nodes.mesh_52.geometry} material={materials.leaf} map={leavesMap} />
        <mesh geometry={nodes.mesh_52_1.geometry} material={materials.stebel} map={leavesMap} />
      </group>
      <mesh geometry={nodes.Cylinder051.geometry} material={materials.stebel} map={leavesMap} position={[4.173, -0.535, -13.035]} rotation={[0.537, 0.206, 0.634]} scale={0.344} />
      <mesh geometry={nodes.Cylinder050.geometry} material={materials.stebel} map={leavesMap} position={[4.173, -0.535, -13.035]} rotation={[0.537, 0.206, 1.157]} scale={0.374} />
      <mesh geometry={nodes.Cylinder049.geometry} material={materials.stebel} map={leavesMap} position={[5.415, -2.24, -13.035]} rotation={[0.527, -0.231, 1.849]} scale={0.223} />
      <mesh geometry={nodes.Cylinder048.geometry} material={materials.stebel} map={leavesMap} position={[3.956, -1.168, -11.84]} rotation={[0.527, -0.231, 2.373]} scale={0.267} />
      <group position={[5.978, 10.305, 4.844]} rotation={[-2.901, -0.765, 1.911]} scale={0.056}>
        <mesh geometry={nodes.mesh_57.geometry} material={materials.leaf} map={leavesMap} />
        <mesh geometry={nodes.mesh_57_1.geometry} material={materials.stebel} map={leavesMap} />
      </group>
      <group position={[4.417, 5.279, 4.487]} rotation={[2.602, -0.615, 0.766]} scale={0.055}>
        <mesh geometry={nodes.mesh_58.geometry} material={materials.leaf} map={leavesMap} />
        <mesh geometry={nodes.mesh_58_1.geometry} material={materials.stebel} map={leavesMap} />
      </group>
      <mesh geometry={nodes.Cylinder047.geometry} material={materials.stebel} map={leavesMap} position={[4.975, -0.789, -13.035]} rotation={[0.527, -0.231, 2.896]} scale={0.289} />
      <group position={[-3.313, -0.508, 3.8]} rotation={[2.734, -0.702, 0.982]} scale={0.053}>
        <mesh geometry={nodes.mesh_60.geometry} material={materials.leaf} map={leavesMap}  />
        <mesh geometry={nodes.mesh_60_1.geometry} material={materials.stebel} map={leavesMap} />
      </group>
      <group position={[-11.31, -3.859, 1.966]} rotation={[2.971, -0.78, 1.331]} scale={0.045}>
        <mesh geometry={nodes.mesh_61.geometry} material={materials.leaf} map={leavesMap} />
        <mesh geometry={nodes.mesh_61_1.geometry} material={materials.stebel} map={leavesMap} />
      </group>
      <mesh geometry={nodes.Cylinder046.geometry} material={materials.stebel} map={leavesMap} position={[4.975, -0.789, -13.035]} rotation={[0.527, -0.231, -1.991]} scale={0.332} />
      <mesh geometry={nodes.Cylinder045.geometry} material={materials.stebel} map={leavesMap} position={[4.173, -0.535, -13.035]} rotation={[0.537, 0.206, -0.763]} scale={0.323} />
      <group position={[7.417, -3.56, 2.522]} rotation={[-2.75, -0.71, 2.135]} scale={0.048}>
        <mesh geometry={nodes.mesh_64.geometry} material={materials.leaf} map={leavesMap} />
        <mesh geometry={nodes.mesh_64_1.geometry} material={materials.stebel} map={leavesMap} />
      </group>
      <group position={[9.55, -4.63, 2.221]} rotation={[2.721, -0.695, 0.962]} scale={0.047}>
        <mesh geometry={nodes.mesh_65.geometry} material={materials.leaf} map={leavesMap} />
        <mesh geometry={nodes.mesh_65_1.geometry} material={materials.stebel} map={leavesMap} />
      </group>
      <group position={[-3.487, -9.94, 1.929]} rotation={[2.362, -0.173, 0.172]} scale={0.046}>
        <mesh geometry={nodes.mesh_66.geometry} material={materials.leaf} map={leavesMap} />
        <mesh geometry={nodes.mesh_66_1.geometry} material={materials.stebel} map={leavesMap} />
      </group>
      <group position={[0.417, -12.219, 1.643]} rotation={[2.453, 0.433, -0.472]} scale={0.045}>
        <mesh geometry={nodes.mesh_67.geometry} material={materials.leaf} map={leavesMap} />
        <mesh geometry={nodes.mesh_67_1.geometry} material={materials.stebel} map={leavesMap} />
      </group>
      <group position={[2.56, 14.806, 18.318]} rotation={[-2.625, -0.633, 2.336]} scale={0.105}>
        <mesh geometry={nodes.mesh_68.geometry} material={materials.leaf} map={leavesMap} />
        <mesh geometry={nodes.mesh_68_1.geometry} material={materials.stebel} map={leavesMap} />
      </group>
      <group position={[7.73, 24.753, 3.083]} rotation={[-3.072, -0.163, -2.826]} scale={0.087}>
        <mesh geometry={nodes.mesh_69.geometry} material={materials.leaf} map={leavesMap} />
        <mesh geometry={nodes.mesh_69_1.geometry} material={materials.stebel} map={leavesMap} />
      </group>
      <group position={[10.179, 10.184, 10.65]} rotation={[-2.362, 0.173, -2.969]} scale={0.078}>
        <mesh geometry={nodes.mesh_70.geometry} material={materials.leaf} map={leavesMap} />
        <mesh geometry={nodes.mesh_70_1.geometry} material={materials.stebel} map={leavesMap} />
      </group>
      <group position={[-4.401, 21.295, 4.227]} rotation={[2.584, -0.475, 1.764]} scale={0.058}>
        <mesh geometry={nodes.mesh_71.geometry} material={materials.leaf} map={leavesMap} />
        <mesh geometry={nodes.mesh_71_1.geometry} material={materials.stebel} map={leavesMap} />
      </group>
      <group position={[12.869, -2.276, 0.316]} rotation={[2.867, -0.755, 1.181]} scale={0.04}>
        <mesh geometry={nodes.mesh_72.geometry} material={materials.leaf} map={leavesMap} />
        <mesh geometry={nodes.mesh_72_1.geometry} material={materials.stebel} map={leavesMap} />
      </group>
      <group position={[7.493, -14.121, 0.07]} rotation={[2.392, -0.294, 0.302]} scale={0.039}>
        <mesh geometry={nodes.mesh_73.geometry} material={materials.leaf} map={leavesMap} />
        <mesh geometry={nodes.mesh_73_1.geometry} material={materials.stebel} map={leavesMap} />
      </group>
      <group position={[11.269, -12.485, -0.17]} rotation={[2.401, 0.319, -0.33]} scale={0.038}>
        <mesh geometry={nodes.mesh_74.geometry} material={materials.leaf} map={leavesMap} />
        <mesh geometry={nodes.mesh_74_1.geometry} material={materials.stebel} map={leavesMap} />
      </group>
      <group position={[-3.233, 6.477, 1.247]} rotation={[-2.56, -0.575, 2.451]} scale={0.046}>
        <mesh geometry={nodes.mesh_75.geometry} material={materials.leaf} map={leavesMap} />
        <mesh geometry={nodes.mesh_75_1.geometry} material={materials.stebel} map={leavesMap} />
      </group>
      <mesh geometry={nodes.Box002.geometry} material={materials.tychinka} position={[-7.195, 9.302, 15.724]} rotation={[0.055, 0.082, -2.165]} scale={0.056} />
      <group position={[1.069, -5.093, 12.68]} rotation={[2.524, 0.289, -0.121]} scale={0.095}>
        <mesh geometry={nodes.mesh_79.geometry} material={materials.leaf} map={leavesMap} />
        <mesh geometry={nodes.mesh_79_1.geometry} material={materials.stebel} map={leavesMap} />
      </group>
      <group position={[-6.396, 12.937, 3.718]} rotation={[3.025, -0.133, 2.326]} scale={0.089}>
        <mesh geometry={nodes.mesh_80.geometry} material={materials.leaf} map={leavesMap} />
        <mesh geometry={nodes.mesh_80_1.geometry} material={materials.stebel} map={leavesMap} />
      </group>
      <group position={[-1.186, -15.593, 8.734]} rotation={[2.35, 0.075, -0.074]} scale={0.071}>
        <mesh geometry={nodes.mesh_81.geometry} material={materials.leaf} map={leavesMap} />
        <mesh geometry={nodes.mesh_81_1.geometry} material={materials.stebel} map={leavesMap} />
      </group>
      <group position={[0.034, -2.388, 9.949]} rotation={[-2.421, 0.368, -2.753]} scale={0.074}>
        <mesh geometry={nodes.mesh_82.geometry} material={materials.leaf} map={leavesMap} />
        <mesh geometry={nodes.mesh_82_1.geometry} material={materials.stebel} map={leavesMap} />
      </group>
      <group position={[-1.628, 10.234, 7.241]} rotation={[-3.015, -0.816, 2.083]} scale={0.071}>
        <mesh geometry={nodes.mesh_83.geometry} material={materials.leaf} map={leavesMap} />
        <mesh geometry={nodes.mesh_83_1.geometry} material={materials.stebel} map={leavesMap} />
      </group>
      <group position={[-3.887, -14.638, 3.409]} rotation={[2.368, 0.129, -0.114]} scale={0.051}>
        <mesh geometry={nodes.mesh_84.geometry} material={materials.leaf} map={leavesMap} />
        <mesh geometry={nodes.mesh_84_1.geometry} material={materials.stebel} map={leavesMap} />
      </group>
      <group position={[-14.469, -0.354, -1.835]} rotation={[1.708, 0.733, 0.387]} scale={0.05}>
        <mesh geometry={nodes.mesh_85.geometry} material={materials.leaf} map={leavesMap} />
        <mesh geometry={nodes.mesh_85_1.geometry} material={materials.stebel} map={leavesMap} />
      </group>
      <group position={[8.659, 16.96, 5.581]} rotation={[2.818, 0.028, -2.368]} scale={0.048}>
        <mesh geometry={nodes.mesh_86.geometry} material={materials.leaf} map={leavesMap} />
        <mesh geometry={nodes.mesh_86_1.geometry} material={materials.stebel} map={leavesMap} />
      </group>
      <group position={[6.821, 16.735, 0.975]} rotation={[-2.928, -0.35, -2.942]} scale={0.047}>
        <mesh geometry={nodes.mesh_87.geometry} material={materials.leaf} map={leavesMap} />
        <mesh geometry={nodes.mesh_87_1.geometry} material={materials.stebel} map={leavesMap} />
      </group>
      <mesh geometry={nodes.Cylinder002.geometry} material={materials.stebel} map={leavesMap} position={[4.166, 3.96, -5.757]} rotation={[0.12, 0.176, 1.68]} scale={0.077} />
      <group position={[-9.854, -0.285, 11.951]} rotation={[2.705, -0.687, 0.937]} scale={0.081}>
        <mesh geometry={nodes.mesh_89.geometry} material={materials.leaf} map={leavesMap} />
        <mesh geometry={nodes.mesh_89_1.geometry} material={materials.stebel} map={leavesMap} />
      </group>
      <group position={[-9.677, -12.024, 8.614]} rotation={[-2.713, -0.526, 1.584]} scale={0.074}>
        <mesh geometry={nodes.mesh_90.geometry} material={materials.leaf} map={leavesMap} />
        <mesh geometry={nodes.mesh_90_1.geometry} material={materials.stebel} map={leavesMap} />
      </group>
      <group position={[-8.403, 0.051, 14.33]} rotation={[3.06, -0.541, 1.59]} scale={0.097}>
        <mesh geometry={nodes.mesh_91.geometry} material={materials.leaf} map={leavesMap} />
        <mesh geometry={nodes.mesh_91_1.geometry} material={materials.stebel} map={leavesMap} />
      </group>
      <group position={[7.476, -20.656, 3.083]} rotation={[-3.06, 0.157, -0.576]} scale={0.087}>
        <mesh geometry={nodes.mesh_92.geometry} material={materials.leaf} map={leavesMap} />
        <mesh geometry={nodes.mesh_92_1.geometry} material={materials.stebel} map={leavesMap} />
      </group>
      <mesh geometry={nodes.Line001.geometry} material={materials['23 - Default']} position={[9.124, 7.888, -19.394]} rotation={[-Math.PI / 2, -0.978, Math.PI]} scale={[0.049, 0.056, 0.049]} />
      <group position={[-9.915, -13.895, 14.28]} rotation={[2.547, 0.41, -0.253]} scale={0.098}>
        <mesh geometry={nodes.mesh_94.geometry} material={materials.leaf} map={leavesMap} />
        <mesh geometry={nodes.mesh_94_1.geometry} material={materials.stebel} map={leavesMap} />
      </group>
      <mesh geometry={nodes.Cylinder004.geometry} material={materials['21 - Default']} position={[3.021, -1.265, -9.868]} rotation={[0, 0, -2.163]} scale={0.056} />
      <group position={[19.09, -2.336, 0.827]} rotation={[-2.35, -0.075, 3.067]} scale={0.042}>
        <mesh geometry={nodes.mesh_96.geometry} material={materials.leaf} map={leavesMap} />
        <mesh geometry={nodes.mesh_96_1.geometry} material={materials.stebel} map={leavesMap} />
      </group>
      <group position={[11.993, 14.259, 8.26]} rotation={[-2.882, -0.714, 2.455]} scale={0.081}>
        <mesh geometry={nodes.mesh_97.geometry} material={materials.leaf} map={leavesMap} />
        <mesh geometry={nodes.mesh_97_1.geometry} material={materials.stebel} map={leavesMap} />
      </group>
      <group position={[14, -13.876, 2.906]} rotation={[-2.509, 0.518, -2.548]} scale={0.043}>
        <mesh geometry={nodes.mesh_98.geometry} material={materials.leaf} map={leavesMap} />
        <mesh geometry={nodes.mesh_98_1.geometry} material={materials.stebel} map={leavesMap} />
      </group>
      <group position={[-14.632, 12.218, 14.408]} rotation={[3.037, -0.415, 1.17]} scale={0.1}>
        <mesh geometry={nodes.mesh_99.geometry} material={materials.leaf} map={leavesMap} />
        <mesh geometry={nodes.mesh_99_1.geometry} material={materials.stebel} map={leavesMap} />
      </group>
      <group position={[16.051, -5.784, 1.364]} rotation={[3.072, 0.792, -1.473]} scale={0.044}>
        <mesh geometry={nodes.mesh_100.geometry} material={materials.leaf} map={leavesMap} />
        <mesh geometry={nodes.mesh_100_1.geometry} material={materials.stebel} map={leavesMap} />
      </group>
      <group position={[20.038, 12.856, 10.875]} rotation={[-2.686, -0.025, -2.869]} scale={0.091}>
        <mesh geometry={nodes.mesh_101.geometry} material={materials.leaf} map={leavesMap} />
        <mesh geometry={nodes.mesh_101_1.geometry} material={materials.stebel} map={leavesMap} />
      </group>
      <group position={[18.251, -9.857, -2.365]} rotation={[-1.687, -0.497, -2.718]} scale={0.049}>
        <mesh geometry={nodes.mesh_102.geometry} material={materials.leaf} map={leavesMap} />
        <mesh geometry={nodes.mesh_102_1.geometry} material={materials.stebel} map={leavesMap} />
      </group>
      <group position={[12.687, 3.094, 11.829]} rotation={[-2.766, 0.718, -2.111]} scale={0.08}>
        <mesh geometry={nodes.mesh_103.geometry} material={materials.leaf} map={leavesMap} />
        <mesh geometry={nodes.mesh_103_1.geometry} material={materials.stebel} map={leavesMap} />
      </group>
      <group position={[10.357, -2.256, 4.139]} rotation={[-2.752, 0.711, -2.132]} scale={0.054}>
        <mesh geometry={nodes.mesh_104.geometry} material={materials.leaf} map={leavesMap} />
        <mesh geometry={nodes.mesh_104_1.geometry} material={materials.stebel} map={leavesMap} />
      </group>
      <mesh geometry={nodes.Line002.geometry} material={materials.gorshok} position={[7.971, 6.449, -28.404]} rotation={[-Math.PI / 2, -0.978, Math.PI]} scale={0.056} />
      <group position={[17.285, 4.244, 7.413]} rotation={[-2.392, 0.294, -2.84]} scale={0.066}>
        <mesh geometry={nodes.mesh_106.geometry} material={materials.leaf} map={leavesMap} />
        <mesh geometry={nodes.mesh_106_1.geometry} material={materials.stebel} map={leavesMap} />
      </group>
      <group position={[18.441, -8.28, 7.67]} rotation={[-3.111, 0.606, -1.931]} scale={0.068}>
        <mesh geometry={nodes.mesh_107.geometry} material={materials.leaf} map={leavesMap} />
        <mesh geometry={nodes.mesh_107_1.geometry} material={materials.stebel} map={leavesMap} />
      </group>
      <group position={[3.557, -16.975, 6.539]} rotation={[2.781, 0.758, -0.73]} scale={0.069}>
        <mesh geometry={nodes.mesh_108.geometry} material={materials.leaf} map={leavesMap} />
        <mesh geometry={nodes.mesh_108_1.geometry} material={materials.stebel} map={leavesMap} />
      </group>
      <group position={[13.836, -8.854, 11.159]} rotation={[-2.907, 0.766, -1.903]} scale={0.079}>
        <mesh geometry={nodes.mesh_109.geometry} material={materials.leaf} map={leavesMap} />
        <mesh geometry={nodes.mesh_109_1.geometry} material={materials.stebel} map={leavesMap} />
      </group>
      <mesh geometry={nodes.Plane003.geometry} material={materials.flower}  map={flowersMap} position={[-9.314, -9.263, 26.053]} rotation={[2.233, -0.277, 0.21]} scale={[0.081, 0.09, 0.085]} />
      <group position={[-17.401, -9.236, 5.397]} rotation={[-3.139, 0.002, 0.592]} scale={0.082}>
        <mesh geometry={nodes.mesh_111.geometry} material={materials.leaf} map={leavesMap} />
        <mesh geometry={nodes.mesh_111_1.geometry} material={materials.stebel} map={leavesMap} />
      </group>
      <group position={[18.413, -4.559, 11.161]} rotation={[-2.383, 0.223, -2.518]} scale={0.089}>
        <mesh geometry={nodes.mesh_112.geometry} material={materials.leaf} map={leavesMap} />
        <mesh geometry={nodes.mesh_112_1.geometry} material={materials.stebel} map={leavesMap} />
      </group>
      <group position={[13.916, -2.012, 15.084]} rotation={[-2.602, 0.615, -2.375]} scale={0.093}>
        <mesh geometry={nodes.mesh_113.geometry} material={materials.leaf} map={leavesMap} />
        <mesh geometry={nodes.mesh_113_1.geometry} material={materials.stebel} map={leavesMap} />
      </group>
      <group position={[12.374, -8.838, 13.493]} rotation={[3.079, 0.543, -1.273]} scale={0.095}>
        <mesh geometry={nodes.mesh_114.geometry} material={materials.leaf} map={leavesMap} />
        <mesh geometry={nodes.mesh_114_1.geometry} material={materials.stebel} map={leavesMap} />
      </group>
      <group position={[-14.278, -1.962, 8.394]} rotation={[2.95, -0.58, 0.925]} scale={0.069}>
        <mesh geometry={nodes.mesh_115.geometry} material={materials.leaf} map={leavesMap} />
        <mesh geometry={nodes.mesh_115_1.geometry} material={materials.stebel} map={leavesMap} />
      </group>
    </group>
  </group>
  );
}

export default function FlowerVaseL() {
  return (
    <Suspense fallback={null}>
      <Asset />
    </Suspense>
  );
}
