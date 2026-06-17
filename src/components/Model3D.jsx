import { Suspense, Component } from "react";
import { Canvas } from "@react-three/fiber";
import {
  useGLTF,
  OrbitControls,
  Environment,
  Float,
  MeshDistortMaterial,
} from "@react-three/drei";

function FallbackShape() {
  return (
    <Float speed={2} rotationIntensity={0.5} floatIntensity={0.5}>
      <mesh>
        <icosahedronGeometry args={[1.2, 1]} />
        <MeshDistortMaterial color="#a855f7" distort={0.4} speed={2} />
      </mesh>
    </Float>
  );
}

function ShowcaseModel() {
  const { scene } = useGLTF("/models/showcase.glb");
  return <primitive object={scene} scale={1.5} />;
}

class ModelErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  render() {
    if (this.state.hasError) return this.props.fallback;
    return this.props.children;
  }
}

export default function Model3D() {
  return (
    <div className="w-full h-full">
      <Canvas camera={{ position: [0, 0, 5], fov: 45 }}>
        <ambientLight intensity={0.6} />
        <directionalLight position={[3, 3, 3]} intensity={1} />
        <Suspense fallback={<FallbackShape />}>
          <ModelErrorBoundary fallback={<FallbackShape />}>
            <Float speed={1.5} rotationIntensity={0.3} floatIntensity={0.5}>
              <ShowcaseModel />
            </Float>
          </ModelErrorBoundary>
        </Suspense>
        <Environment preset="city" />
        <OrbitControls
          enableZoom={false}
          autoRotate
          autoRotateSpeed={1.5}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
      </Canvas>
    </div>
  );
}

useGLTF.preload("/models/showcase.glb");
