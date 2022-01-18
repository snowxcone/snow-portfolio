import { useRef } from 'react';
import {
  extend, useFrame, useThree, ReactThreeFiber
} from '@react-three/fiber';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';

extend({ OrbitControls });

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'orbitControls': ReactThreeFiber.Object3DNode<OrbitControls, typeof OrbitControls>;
    }
  }
}

export const CameraControls = () => {
  const {
    camera,
    gl: { domElement },
  } = useThree();

  camera.position.set(10, 10, 30);

  const controls = useRef<OrbitControls>(null!);
  useFrame((state) => {
    controls.current.update()
  });

  return (
    <orbitControls
      ref={controls}
      args={[camera, domElement]}
    />
  );
};

export default CameraControls;
