import { useGLTF, MeshDistortMaterial } from '@react-three/drei'
import { GLTF } from 'three-stdlib';

export type DreiGLTF = GLTF & {
  nodes: Record<string, THREE.Mesh>;
  materials: Record<string, THREE.MeshStandardMaterial>;
};

export const Moon = (props: JSX.IntrinsicElements['mesh'] & { moonColor?: string }) => {
  const { nodes, materials } = useGLTF(new URL('../static/assets/moon.glb', import.meta.url).href,) as DreiGLTF;

  return (
    <mesh
      castShadow
      receiveShadow
      geometry={nodes.NurbsPath.geometry}
      material={nodes.NurbsPath.material}
      rotation-z={2 * Math.PI / 3}
      scale={3}
      {...props}
    >
      <MeshDistortMaterial
        attach="material"
        color={props.moonColor ?? 'orange'}
        distort={0.2}
        speed={3}
        roughness={0}
      />
    </mesh>
  )
}

