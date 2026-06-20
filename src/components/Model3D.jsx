import { useMemo, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import {
  ContactShadows,
  Environment,
  Float,
  OrbitControls,
  RoundedBox,
  Text,
} from "@react-three/drei";
import { MathUtils } from "three";

function OrbitalRig() {
  const group = useRef();
  const rings = useRef();

  const nodes = useMemo(
    () => [
      [-1.35, 0.35, 0.1, 0.22, "#38bdf8"],
      [1.18, -0.25, -0.35, 0.18, "#a855f7"],
      [0.25, 1.22, -0.5, 0.14, "#f59e0b"],
      [-0.45, -1.05, 0.32, 0.16, "#22c55e"],
    ],
    []
  );

  useFrame(({ clock, pointer }) => {
    const elapsed = clock.getElapsedTime();

    if (group.current) {
      group.current.rotation.y = MathUtils.lerp(
        group.current.rotation.y,
        pointer.x * 0.28 + elapsed * 0.08,
        0.04
      );
      group.current.rotation.x = MathUtils.lerp(
        group.current.rotation.x,
        -pointer.y * 0.2,
        0.04
      );
    }

    if (rings.current) {
      rings.current.rotation.z = elapsed * 0.22;
      rings.current.rotation.x = Math.sin(elapsed * 0.45) * 0.12;
    }
  });

  return (
    <group ref={group}>
      <Float speed={1.6} rotationIntensity={0.35} floatIntensity={0.55}>
        <RoundedBox args={[1.9, 1.9, 1.9]} radius={0.18} smoothness={8}>
          <meshPhysicalMaterial
            color="#67e8f9"
            emissive="#0e7490"
            emissiveIntensity={0.35}
            metalness={0.18}
            opacity={0.34}
            roughness={0.1}
            transparent
          />
        </RoundedBox>

        <mesh scale={1.02}>
          <icosahedronGeometry args={[0.86, 1]} />
          <meshStandardMaterial
            color="#f8fafc"
            emissive="#7c3aed"
            emissiveIntensity={0.22}
            metalness={0.65}
            roughness={0.16}
          />
        </mesh>

        <mesh rotation={[0.88, 0.35, 0.18]}>
          <torusKnotGeometry args={[0.72, 0.095, 180, 22]} />
          <meshStandardMaterial
            color="#a78bfa"
            emissive="#5b21b6"
            emissiveIntensity={0.35}
            metalness={0.72}
            roughness={0.18}
          />
        </mesh>

        <group ref={rings}>
          <mesh rotation={[Math.PI / 2.2, 0, 0]}>
            <torusGeometry args={[1.58, 0.011, 16, 160]} />
            <meshBasicMaterial color="#67e8f9" transparent opacity={0.62} />
          </mesh>
          <mesh rotation={[Math.PI / 3, Math.PI / 3, 0]}>
            <torusGeometry args={[1.86, 0.008, 16, 160]} />
            <meshBasicMaterial color="#c084fc" transparent opacity={0.5} />
          </mesh>
          <mesh rotation={[Math.PI / 1.75, Math.PI / 5, Math.PI / 7]}>
            <torusGeometry args={[2.18, 0.006, 16, 160]} />
            <meshBasicMaterial color="#f8fafc" transparent opacity={0.25} />
          </mesh>
        </group>

        {nodes.map(([x, y, z, size, color], index) => (
          <mesh key={index} position={[x, y, z]}>
            <sphereGeometry args={[size, 32, 32]} />
            <meshStandardMaterial
              color={color}
              emissive={color}
              emissiveIntensity={0.7}
              metalness={0.5}
              roughness={0.2}
            />
          </mesh>
        ))}

        <Text
          position={[0, -1.72, 0.2]}
          fontSize={0.18}
          letterSpacing={0.08}
          anchorX="center"
          anchorY="middle"
          color="#e0f2fe"
        >
          3D / DESIGN / DEV
        </Text>
      </Float>
    </group>
  );
}

export default function Model3D() {
  return (
    <div className="h-full min-h-[360px] w-full overflow-hidden rounded-[2rem] border border-white/10 bg-slate-950/70 shadow-2xl shadow-cyan-950/40">
      <Canvas camera={{ position: [0, 0.25, 5.2], fov: 42 }} dpr={[1, 1.75]}>
        <color attach="background" args={["#050816"]} />
        <fog attach="fog" args={["#050816", 6, 11]} />
        <ambientLight intensity={0.55} />
        <spotLight
          position={[3, 4, 4]}
          angle={0.45}
          penumbra={0.8}
          intensity={3.8}
          color="#67e8f9"
        />
        <pointLight position={[-3, -2, 3]} intensity={2.8} color="#a855f7" />
        <OrbitalRig />
        <ContactShadows
          position={[0, -2.3, 0]}
          opacity={0.35}
          scale={7}
          blur={2.8}
          far={4}
        />
        <Environment preset="city" />
        <OrbitControls
          enablePan={false}
          enableZoom={false}
          autoRotate
          autoRotateSpeed={0.45}
          maxPolarAngle={Math.PI / 1.7}
          minPolarAngle={Math.PI / 3}
        />
      </Canvas>
    </div>
  );
}
