import { useGLTF, MeshDistortMaterial } from '@react-three/drei'
import { GLTF } from 'three-stdlib';
import { colors } from '../static/constants/colors';

export type DreiGLTF = GLTF & {
  nodes: Record<string, THREE.Mesh>;
  materials: Record<string, THREE.MeshStandardMaterial>;
};

export const Moon = () => {
  const { nodes, materials } = useGLTF(new URL('../static/assets/moon.glb', import.meta.url).href,) as DreiGLTF;

  // useFrame((state, delta) => (
  //   ref.current.rotation.z = state.mouse.y * 2 * Math.PI / 3
  // ));

  return (
    <mesh
      castShadow
      receiveShadow
      geometry={nodes.NurbsPath.geometry}
      material={nodes.NurbsPath.material}
      position={[-5, 5, 0]}
      rotation-z={2 * Math.PI / 3}
      scale={4}
    >
      <MeshDistortMaterial
        attach="material"
        color={colors.blue}
        distort={0.2}
        speed={3}
        roughness={0}
      />
    </mesh>
  )
}

