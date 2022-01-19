import { useRef, useState } from "react"
import * as THREE from 'three';
import { useCursor, useFBO, PerspectiveCamera } from "@react-three/drei";
import { useFrame, createPortal } from "@react-three/fiber";

/* Referenced the Magic Mirror and Showcase examples from https://docs.pmnd.rs/react-three-fiber/getting-started/examples */

export const Card: React.FC<any> = ({ children, ...props }) => {
  const [hovered, setHovered] = useState(false);
  useCursor(hovered);

  const cardContent = useRef<THREE.Mesh>(null!);
  const cam = useRef<THREE.PerspectiveCamera>(null!);
  const fbo = useFBO();
  const [scene] = useState(() => new THREE.Scene())

  useFrame((state) => {
    // Zoom in effect upon hovering card
    cardContent.current.scale.x = THREE.MathUtils.lerp(cardContent.current.scale.x, 0.85 * (hovered ? 0.85 : 1), 0.1)
    cardContent.current.scale.y = THREE.MathUtils.lerp(cardContent.current.scale.y, 0.9 * (hovered ? 0.905 : 1), 0.1)

    cam.current.matrixWorldInverse.copy(state.camera.matrixWorldInverse);
    state.gl.setRenderTarget(fbo);
    state.gl.render(scene, cam.current);
    state.gl.setRenderTarget(null);
  })

  return (
    <group>
      <mesh ref={cardContent}
        onPointerOver={(e) => {
          e.stopPropagation();
          setHovered(true);
        }}
        onPointerOut={() => setHovered(false)}
        {...props}>
        <planeGeometry args={[3.5, 5]} />
        <meshBasicMaterial map={fbo.texture} />
      </mesh>
      <PerspectiveCamera manual ref={cam} fov={50} aspect={3.5 / 5} onUpdate={(c) => c.updateProjectionMatrix()} />
      {createPortal(children, scene)}
    </group >
  )
}