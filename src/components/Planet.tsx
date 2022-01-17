import { useRef, useState } from 'react';
import { MeshDistortMaterial } from '@react-three/drei';
import * as THREE from 'three';
// import { useLoader } from '@react-three/fiber';
// import { TextureLoader } from 'three/src/loaders/TextureLoader'

export const Planet = (props: JSX.IntrinsicElements['mesh']) => {
  const planetRef = useRef<THREE.Mesh>(null!);
  // const colorMap = useLoader(TextureLoader, new URL('../static/images/planet1.jpg', import.meta.url).href,)

  const [hovered, setHover] = useState(false);
  const [active, setActive] = useState(false);

  const [rotationX, setRotationX] = useState(0);
  const [rotationY, setRotationY] = useState(0);

  document.body.onwheel = () => {
    setRotationX((r) => r + 0.1);
    setRotationY((r) => r + 0.1);
  };

  return (
    <mesh
      position={props.position}
      rotation-x={rotationX}
      rotation-y={rotationY}
      ref={planetRef}
      scale={active ? 1.5 : 1}
      onClick={(event) => setActive(!active)}
      onPointerOver={(event) => setHover(true)}
      onPointerOut={(event) => setHover(false)}>
      <sphereGeometry args={[1, 32, 16]} />
      <MeshDistortMaterial
        attach="material"
        color={'#FF69B4'}
        distort={0.3}
        speed={2}
        roughness={0}
      />
    </mesh>
  )
}