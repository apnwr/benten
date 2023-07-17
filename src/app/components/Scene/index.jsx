import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";
import {
  Canvas,
  useFrame,
  extend,
  useLoader,
  useThree,
} from "@react-three/fiber";
import Sofa from "../Sofa";
// import Chair from "../components/Chair";
import Table from "../Table";
import Lamp from "../Lamp";
import { PresentationControls } from "@react-three/drei";
import TvTable from "../TvTable";
import OrbitControl from "../OrbitControl";
import Floor from "../Floor";
import Box from "../BoxThree";
import LightBulb from "../LightBulb";
import Draggable from "../Controls/Draggable";
import { Suspense } from "react";
import LED from "../LED";
import Walls from "../Walls";
import WallB from "../WallB";
import CoffeeTable from "../CoffeeTable";
import Carpet from "../Carpet";
import FlowerVaseR from "../FlowerVaseR";
import FlowerVaseL from "../FlowerVaseL";

export default function Scene() {
  //   const { camera, gl } = useThree();
  //   extend({ OrbitControls });

  return (
    <>
      <ambientLight color={"white"} intensity={0.3} />
      {/* <LightBulb position={[2, 5, -18]} /> */}
      {/* <Draggable> */}
      <Suspense fallback={null}>
      <Lamp />
      <Sofa />
      {/* <Table /> */}
      <CoffeeTable />
      <TvTable />
      <LED />
      <FlowerVaseL />
      <FlowerVaseR />
        {/* <Box rotateX={0.2} rotateY={0.4} position={[19, 5, 0]}/> */}
        </ Suspense >
      {/* </Draggable> */}
     

      <OrbitControl />
      {/* <Walls />
      <WallB /> */}
      <Walls />
       <WallB />
      <Carpet position={[0,0.55,0]} />
      <Floor />
      {/* <ambientLight intensity={0.1} />
      <pointLight intensity={0.1} />
      <orbitControls args={[camera, gl.domElement]} />
      <PresentationControls enabled global rotation />
      <group>
        <Lamp />
        <Sofa />
        
        <Table />
      </group> */}
    </>
  );
}
