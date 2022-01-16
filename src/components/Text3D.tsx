import { useMemo } from 'react';
import { extend, useLoader } from '@react-three/fiber'
import { TextGeometry } from 'three/examples/jsm/geometries/TextGeometry'
import { FontLoader } from 'three/examples/jsm/loaders/FontLoader';

extend({ TextGeometry })

export const Text3D = (props: JSX.IntrinsicElements['mesh'] & { text: string }) => {
  const font = useLoader(FontLoader, new URL("../static/fonts/bold.json", import.meta.url).href,);

  const config = useMemo(
    () => ({
      font,
      size: 2,
      height: 1,
      curveSegments: 3,
      bevelEnabled: true,
      bevelThickness: 0.03,
      bevelSize: 0.02,
      bevelOffset: 0,
      bevelSegments: 1,
    }),
    [],
  );

  return (
    <mesh
      position={props.position}>
      <textGeometry args={[props.text, config]} />
      <meshNormalMaterial />
    </mesh>
  )
}
