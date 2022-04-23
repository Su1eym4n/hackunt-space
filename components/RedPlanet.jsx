import React from 'react'
import { useFrame } from '@react-three/fiber'

function RedPlanet() {
    const mesh = React.useRef()
    useFrame(({ clock }) => {
        //const a = clock.getElapsedTime()
        mesh.current.rotation.x = clock.getElapsedTime()

    })

    return (
            <mesh ref={mesh}>
                <torusGeometry />
                <meshBasicMaterial color='green' wireframe='true' />
            </mesh>
    )
}
export default RedPlanet
