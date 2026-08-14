import React, { useRef, useMemo } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

// Procedurally build a gear-shaped extruded geometry — a nod to Abubakar's
// CAD modeling background (SolidWorks gear assemblies).
function createGearShape(teeth = 14, outerR = 1.6, innerR = 1.3, boreR = 0.5) {
  const shape = new THREE.Shape();
  const toothAngle = (Math.PI * 2) / teeth;

  for (let i = 0; i < teeth; i++) {
    const a0 = i * toothAngle;
    const a1 = a0 + toothAngle * 0.28;
    const a2 = a0 + toothAngle * 0.42;
    const a3 = a0 + toothAngle * 0.72;
    const a4 = a0 + toothAngle;

    const pts = [
      [innerR * Math.cos(a0), innerR * Math.sin(a0)],
      [outerR * Math.cos(a1), outerR * Math.sin(a1)],
      [outerR * Math.cos(a2), outerR * Math.sin(a2)],
      [innerR * Math.cos(a3), innerR * Math.sin(a3)],
      [innerR * Math.cos(a4), innerR * Math.sin(a4)],
    ];

    if (i === 0) shape.moveTo(pts[0][0], pts[0][1]);
    pts.forEach(([x, y]) => shape.lineTo(x, y));
  }
  shape.closePath();

  const bore = new THREE.Path();
  bore.absarc(0, 0, boreR, 0, Math.PI * 2, true);
  shape.holes.push(bore);

  return shape;
}

function Gear({ position, scale = 1, speed = 0.25, color = '#8ECAE6', teeth = 14, opacity = 1 }) {
  const ref = useRef();
  const shape = useMemo(() => createGearShape(teeth), [teeth]);

  const extrudeSettings = useMemo(
    () => ({ depth: 0.35, bevelEnabled: true, bevelThickness: 0.03, bevelSize: 0.03, bevelSegments: 2, curveSegments: 8 }),
    []
  );

  useFrame((_, delta) => {
    if (ref.current) ref.current.rotation.z += delta * speed;
  });

  return (
    <mesh ref={ref} position={position} scale={scale} castShadow receiveShadow>
      <extrudeGeometry args={[shape, extrudeSettings]} />
      <meshStandardMaterial
        color={color}
        metalness={0.65}
        roughness={0.3}
        transparent={opacity < 1}
        opacity={opacity}
      />
    </mesh>
  );
}

function Bolt({ position, scale = 1 }) {
  const ref = useRef();
  useFrame((_, delta) => {
    if (ref.current) ref.current.rotation.y += delta * 0.4;
  });
  return (
    <group ref={ref} position={position} scale={scale}>
      <mesh castShadow>
        <cylinderGeometry args={[0.32, 0.32, 0.18, 6]} />
        <meshStandardMaterial color="#FF6B35" metalness={0.5} roughness={0.35} />
      </mesh>
      <mesh position={[0, -0.35, 0]}>
        <cylinderGeometry args={[0.12, 0.12, 0.5, 16]} />
        <meshStandardMaterial color="#FF6B35" metalness={0.5} roughness={0.35} />
      </mesh>
    </group>
  );
}

export default function MechanicalScene() {
  return (
    <>
      <ambientLight intensity={0.55} />
      <directionalLight position={[4, 5, 5]} intensity={1.2} castShadow />
      <directionalLight position={[-4, -2, -3]} intensity={0.35} color="#8ECAE6" />

      <group rotation={[0.35, 0.4, 0]}>
        <Gear position={[0, 0, 0]} scale={1.15} speed={0.22} color="#8ECAE6" teeth={16} />
        <Gear position={[1.85, 1.05, -0.4]} scale={0.65} speed={-0.4} color="#F7F4EA" teeth={12} opacity={0.92} />
        <Gear position={[-1.7, -1.15, -0.6]} scale={0.5} speed={-0.55} color="#FF6B35" teeth={10} opacity={0.85} />
        <Bolt position={[1.3, -1.4, 0.5]} scale={1.1} />
      </group>
    </>
  );
}
