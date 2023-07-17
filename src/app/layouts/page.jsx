"use client";

import { Canvas } from "@react-three/fiber";

import styles from "./layouts.module.scss";
import Scene from "../components/Scene";

export default function Layouts() {
  return (
    <main className={styles.layoutContainer}>
      <div className={styles.dimensions}></div>
      <div className={styles.objects}></div>
      <div className={styles.layout}>
        <div className={styles.canvasContainer}>
          <Canvas
            color="black"
            flat
            camera={{ fov: 35, position: [-6, 7, 7] }}
            className={styles.canvas}
          >
            <Scene />
          </Canvas>
        </div>

        {/* <div className={styles.cameraOptions}>
          <div className={styles.cameraOption}>
            <div className={styles.camera}></div>
          </div>
          <div className={styles.cameraOption}>
            <div className={styles.camera}></div>
          </div>
          <div className={styles.cameraOption}>
            <div className={styles.camera}></div>
          </div>
          <div className={styles.cameraOption}>
            <div className={styles.camera}></div>
          </div>
        </div> */}

        <div className={styles.sliderContainer}>
          <div className={styles.slider}></div>
        </div>
      </div>
      <div className={styles.option}></div>
    </main>
  );
}
