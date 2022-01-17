import React, { Suspense } from 'react';
import ReactDOM from 'react-dom';
import { Canvas } from '@react-three/fiber';
import { Planet, CameraControls, Text3D, Ocean, Moon } from '../components';
import '../static/styles/index.css';

const App = () => {
  return (
    <Canvas >
      <CameraControls />
      <ambientLight />
      <pointLight position={[10, 10, 10]} />
      <Suspense fallback={null}>
        <Ocean />
        <Moon />
        <Planet position={[4.5, 0.6, 0.5]} />
        <Text3D text="sn   w" position={[0, 0, 0]} />
        <Text3D text="HELLO WOOT" position={[0, 10, 0]} />
      </Suspense>
    </Canvas>
  )
}

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
)
