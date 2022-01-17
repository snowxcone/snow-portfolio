import { useRef, useMemo } from "react";
import { extend, useThree, useLoader, useFrame, ReactThreeFiber } from "@react-three/fiber";
import * as THREE from "three";
import { Water } from "three/examples/jsm/objects/Water.js";
import { colors } from "../static/constants/colors";

extend({ Water });

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'water': ReactThreeFiber.Object3DNode<Water, typeof Water>;
    }
  }
}

export const Ocean = () => {
  const ref = useRef<Water>(null!);
  const gl = useThree((state) => state.gl);
  const waterNormals = useLoader(
    THREE.TextureLoader, "https://raw.githubusercontent.com/mrdoob/three.js/master/examples/textures/waternormals.jpg"
  );

  waterNormals.wrapS = waterNormals.wrapT = THREE.RepeatWrapping;
  const plane = useMemo(() => new THREE.PlaneGeometry(2000, 2000), []);
  const config = useMemo(
    () => ({
      // textureWidth: 20,
      // textureHeight: 20,
      // fog: true,
      waterNormals,
      sunDirection: new THREE.Vector3(),
      sunColor: 0xeb8934,
      waterColor: colors.blue,
      distortionScale: 20,
      format: gl.outputEncoding,
    }),
    [waterNormals]
  );

  useFrame(
    (state, delta) => (ref.current.material.uniforms.time.value += delta)
  );

  return (
    <water
      ref={ref}
      args={[plane, config]}
      rotation-x={-Math.PI / 2}
      position={[0, 0, 0]}
    />
  );
}

export default Ocean;