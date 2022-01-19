import { Blob, Ocean, Moon } from '../components';
import { Stars, Sky } from '@react-three/drei';

export const Dreamscape = (props: { blobColor?: string, moonColor?: string }) => {
  return (
    <group >
      <ambientLight />
      <pointLight position={[10, 10, 10]} />
      <Sky
        distance={450000}
        sunPosition={[10, 1, 2]}
        turbidity={16}
        rayleigh={0.7}
      />
      <Stars
        radius={50} // Radius of the inner sphere (default=100)
        count={5000} // Amount of stars (default=5000)
        factor={4} // Size factor (default=4)
        fade
      />
      <Ocean />
      <Moon position={[-3, 6, -30]} moonColor={props.moonColor} />
      <Blob position={[0.5, -10, -20]} blobColor={props.blobColor} />
    </group>
  )
}