/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.7 sofa.gltf
*/

import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export function Model(props) {
  const { nodes, materials } = useGLTF('/sofa.gltf')
  return (
    <group {...props} dispose={null}>
      <mesh geometry={nodes.sofa.geometry} material={materials.sofa} rotation={[-Math.PI / 2, 0, 0]} />
    </group>
  )
}

useGLTF.preload('/sofa.gltf')
