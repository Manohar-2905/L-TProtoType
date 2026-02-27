import React, { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, PerspectiveCamera, Grid, Float, Environment, ContactShadows } from '@react-three/drei';
import * as THREE from 'three';

const BuildingModel = () => {
    const groupRef = useRef();

    useFrame((state) => {
        if (groupRef.current) {
            groupRef.current.rotation.y += 0.0005;
        }
    });

    return (
        <group ref={groupRef}>
            {/* Core Structure - Solid */}
            <mesh position={[0, 4, 0]}>
                <boxGeometry args={[8, 8, 8]} />
                <meshStandardMaterial color="#1a2533" roughness={0.7} metalness={0.2} transparent opacity={0.8} />
            </mesh>

            {/* Structure Wireframe */}
            <mesh position={[0, 4, 0]}>
                <boxGeometry args={[8.1, 8.1, 8.1]} />
                <meshBasicMaterial color="#00F5FF" wireframe transparent opacity={0.1} />
            </mesh>

            {/* Vertical Pillars */}
            {[-4, 4].map((x) =>
                [-4, 4].map((z) => (
                    <mesh key={`${x}-${z}`} position={[x, 4, z]}>
                        <cylinderGeometry args={[0.3, 0.3, 8]} />
                        <meshStandardMaterial color="#333" roughness={0.5} />
                    </mesh>
                ))
            )}

            {/* Active Staging Zone */}
            <Float speed={1.5} rotationIntensity={0.2} floatIntensity={0.5}>
                <mesh position={[0, 9, 0]}>
                    <boxGeometry args={[4, 0.2, 4]} />
                    <meshStandardMaterial color="#00F5FF" emissive="#00F5FF" emissiveIntensity={2} transparent opacity={0.4} />
                </mesh>
            </Float>

            {/* Scanner Ring Effect */}
            <ScannerRing />
        </group>
    );
}

const ScannerRing = () => {
    const ringRef = useRef();
    useFrame((state) => {
        if (ringRef.current) {
            ringRef.current.position.y = 4 + Math.sin(state.clock.elapsedTime * 0.5) * 4;
        }
    });

    return (
        <mesh ref={ringRef} rotation={[-Math.PI / 2, 0, 0]}>
            <ringGeometry args={[5, 5.2, 64]} />
            <meshBasicMaterial color="#00F5FF" transparent opacity={0.3} side={THREE.DoubleSide} />
        </mesh>
    );
};

const DigitalTwinView = () => {
    return (
        <div className="w-full h-full bg-[#050A14]">
            <Canvas shadows gl={{ antialias: true, alpha: true }}>
                <color attach="background" args={['#050A14']} />
                <PerspectiveCamera makeDefault position={[18, 12, 18]} fov={40} />
                <OrbitControls
                    makeDefault
                    enableDamping
                    dampingFactor={0.05}
                    maxPolarAngle={Math.PI / 2.1}
                    minDistance={5}
                    maxDistance={40}
                />

                <fog attach="fog" args={['#050A14', 20, 45]} />

                <ambientLight intensity={0.4} />
                <spotLight position={[20, 20, 10]} angle={0.15} penumbra={1} intensity={2} castShadow color="#fff" />
                <pointLight position={[-10, 5, -10]} intensity={1} color="#00F5FF" />

                <BuildingModel />

                <Grid
                    infiniteGrid
                    fadeDistance={40}
                    cellColor="#1a2533"
                    sectionColor="#00F5FF"
                    cellThickness={0.6}
                    sectionThickness={1.2}
                    opacity={0.15}
                    position={[0, -0.01, 0]}
                />

                <ContactShadows
                    position={[0, 0, 0]}
                    opacity={0.4}
                    scale={20}
                    blur={2}
                    far={4.5}
                />

                <Environment preset="night" />
            </Canvas>
        </div>
    );
};

export default DigitalTwinView;
