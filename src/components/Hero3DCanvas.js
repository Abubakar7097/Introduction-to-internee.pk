import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Environment } from '@react-three/drei';
import MechanicalScene from './MechanicalScene';
import './Hero3D.css';

export default function Hero3DCanvas() {
  return (
    <div className="hero3d-canvas-wrap">
      <Canvas
        shadows
        camera={{ position: [0, 0, 6.5], fov: 42 }}
        gl={{ antialias: true, alpha: true }}
      >
        <Suspense fallback={null}>
          <MechanicalScene />
          <Environment preset="city" />
        </Suspense>
        <OrbitControls
          enablePan={false}
          enableZoom={false}
          autoRotate
          autoRotateSpeed={0.6}
          minPolarAngle={Math.PI / 2 - 0.5}
          maxPolarAngle={Math.PI / 2 + 0.5}
        />
      </Canvas>
      <div className="hero3d-hint">
        <span>drag to rotate</span>
      </div>
    </div>
  );
}
