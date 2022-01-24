import { Suspense, useRef } from 'react';
import { OrbitControls } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';
import { Card, Portal } from '../components';
import { colors } from '../static/constants/colors';
import { Dreamscape } from './dreamscape';

export const Playground = () => {
  const controls = useRef(null!);

  return (
    <Card>
      <Canvas dpr={[1, 2]} camera={{ position: [0, 1, 8], fov: 50 }} gl={{ alpha: true }} >
        <Suspense fallback={null}>
          <Portal position={[-3.5, 0, 0.5]} rotation={[0, 0.3, 0]}>
            <Dreamscape blobColor={'orange'} moonColor={'white'} />
          </Portal>
          <Portal position={[0, 0, 0]} rotation={[0, 0, 0]}>
            <Dreamscape blobColor={colors.pink} />
          </Portal>
          <Portal position={[3.5, 0, 0.5]} rotation={[0, -0.3, 0]}>
            <Dreamscape blobColor='white' moonColor={colors.pink} />
          </Portal>
        </Suspense>
        <OrbitControls ref={controls} />
      </Canvas>
    </Card>
  )
}