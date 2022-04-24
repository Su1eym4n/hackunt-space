import React, { useEffect, useRef } from 'react'
import { Canvas, useFrame, useLoader } from '@react-three/fiber'
import { TextureLoader } from 'three/src/loaders/TextureLoader'

function ChatPlanet(props) {

  // Direct access to mesh
  const mesh = useRef()

  const [colorMap] = useLoader(TextureLoader, [
    'mars.jpg',
    ])

  useFrame(() => {

    if(mesh.current.rotation.x < props.rotateToX) {
      mesh.current.rotation.x += props.rotateAmount
    }

  })

  return (
    <mesh ref={mesh} visible userData={{ test: "hello" }} position={[0, 0, 0]} castShadow>
      <sphereGeometry attach="geometry" args={[1, 16, 16]} />
      <meshStandardMaterial
        map={colorMap}

        attach="material"
        color=""
        roughness={0.5}
        metalness={0.1}
      />
    </mesh>
  )
}

export default ChatPlanet;