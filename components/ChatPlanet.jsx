import React, { useRef } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'

function ChatPlanet(props) {
  // Direct access to mesh
  const mesh = useRef()

  useFrame(() => {
    mesh.current.rotation.x += 0.01
  })

  return (
    <mesh ref={mesh} visible userData={{ test: "hello" }} position={[0, 0, 0]} castShadow>
      <sphereGeometry attach="geometry" args={[1, 16, 16]} />
      <meshStandardMaterial
        attach="material"
        color="white"
        transparent
        roughness={0.1}
        metalness={0.1}
      />
    </mesh>
  )
}

export default ChatPlanet;