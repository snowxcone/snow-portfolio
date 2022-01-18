import { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { Planet, CameraControls, Text3D, Ocean, Moon } from '../components';

export const Dreamscape = () => {
  return (
    <Canvas>
      <CameraControls />
      <ambientLight />
      <pointLight position={[10, 10, 10]} />
      <Suspense fallback={null}>
        <Ocean />
        <Moon />
        <Planet position={[4.5, 0.6, 0.5]} />
        <Text3D text="sn   w" position={[0, 0, 0]} />
        <Text3D text="" position={[0, 10, 0]} />
      </Suspense>
    </Canvas>
  )
}