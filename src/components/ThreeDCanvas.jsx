import { useRef } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { OrbitControls, Sphere, MeshDistortMaterial } from '@react-three/drei'

const AnimatedSphere = () => {
  const sphereRef = useRef()

  useFrame(({ clock }) => {
    sphereRef.current.rotation.x = clock.getElapsedTime() * 0.2
    sphereRef.current.rotation.y = clock.getElapsedTime() * 0.3
  })

  return (
    <Sphere visible args={[1, 100, 200]} scale={2} ref={sphereRef}>
      <MeshDistortMaterial
        color="#42a5f5"
        attach="material"
        distort={0.5}
        speed={2}
        roughness={0}
      />
    </Sphere>
  )
}

const ThreeDCanvas = () => {
  return (
    <Canvas style={{ height: '400px' }}>
      <ambientLight intensity={0.5} />
      <directionalLight position={[10, 10, 5]} intensity={1} />
      <AnimatedSphere />
      <OrbitControls enableZoom={false} />
    </Canvas>
  )
}

export default ThreeDCanvas
