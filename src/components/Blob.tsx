import { useRef, useState } from 'react';
import { MeshDistortMaterial } from '@react-three/drei';
import * as THREE from 'three';
import { colors } from '../static/constants/colors';
// import { useLoader } from '@react-three/fiber';
// import { TextureLoader } from 'three/src/loaders/TextureLoader'

export const Blob = (props: JSX.IntrinsicElements['mesh'] & { distortFactor?: number, blobColor?: string }) => {
  const ref = useRef<THREE.Mesh>(null!);
  // const colorMap = useLoader(TextureLoader, new URL('../static/images/planet1.jpg', import.meta.url).href,)

  const [hovered, setHover] = useState(false);

  const [rotationX, setRotationX] = useState(0);
  const [rotationY, setRotationY] = useState(0);

  document.body.onwheel = () => {
    setRotationX((r) => r + 0.1);
    setRotationY((r) => r + 0.1);
  };

  return (
    <mesh
      rotation-x={rotationX}
      rotation-y={rotationY}
      ref={ref}
      scale={4}
      onPointerOver={(event) => setHover(true)}
      onPointerOut={(event) => setHover(false)}
      {...props}>
      <sphereGeometry args={[1, 32, 16]} />
      <MeshDistortMaterial
        attach="material"
        color={props.blobColor ?? colors.pink}
        distort={props.distortFactor ?? 0.5}
        speed={2}
        roughness={0}
      />
    </mesh>
  )
}