import React, { useRef } from 'react'
import { Canvas, useFrame, useLoader } from '@react-three/fiber'
import { TextureLoader } from 'three/src/loaders/TextureLoader'

function ChatPlanet(props) {

  // Direct access to mesh
  const mesh = useRef()

  const [colorMap, normalMap, bumpMap] = useLoader(TextureLoader, [
    'mars.jpg',
    'mars_normal.jpg'
    ])

  useFrame(() => {

    console.log(mesh.current.rotation.x - props.rotateToX)

    if(Math.abs(mesh.current.rotation.x - props.rotateToX) > 0.5 || Math.abs(mesh.current.rotation.x - props.rotateToX) < 30 ) {
      mesh.current.rotation.x += props.rotateAmount
    }

    

  })


  mesh.scale = 10

  return (
    <mesh ref={mesh} visible userData={{ test: "hello" }} position={[0, 0, 0]} castShadow>
      <sphereGeometry attach="geometry" args={[1, 16, 16]} />
      <meshStandardMaterial
        map={colorMap}
        normalMap={normalMap}

        attach="material"
        color=""
        roughness={0.5}
        metalness={0.1}
      />
    </mesh>
  )
}

export default ChatPlanet;