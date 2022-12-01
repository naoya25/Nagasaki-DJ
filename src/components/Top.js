import React from 'react'
import { Vector3 } from 'three'
import { Canvas, useFrame } from '@react-three/fiber'
import { Text, OrbitControls } from '@react-three/drei'

const Rig = ({ v = new Vector3() }) => {
  return useFrame((state) => {
    state.camera.position.lerp(v.set(state.mouse.x*5, state.mouse.y*5, 10), 0.05)
  })
};

const Top = () => {
  return (
    <>
      <div id="top-all">
        <Canvas style={{width: '100%', height: '100%'}}>
          <OrbitControls />
          <Rig />
          <fog attach="fog" color={'#fff'} near={1} far={20} />
          <mesh><Text position={[0, 3, 0]} fontSize={5} color={'#222'}>NAGASAKI</Text></mesh>
          <mesh><Text position={[0, 0, 2]} fontSize={5} color={'#222'}>DJ</Text></mesh>
          <mesh><Text position={[0, -2, 4]} fontSize={5} color={'#222'}>CIRCLE</Text></mesh>
          <ambientLight intensity={0.5} />
          <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
          <pointLight position={[-10, -10, -10]} />
        </Canvas>
      </div>
    </>
  )
}

export default Top
