// import { Canvas as CanvasCSS3D, useFrame as useFrameCSS3D, useThree as useThreeCSS3D } from '@react-three/fiber'
import { Canvas } from '@react-three/fiber'
import css from "../styles/Home.module.css"

import Floor from "../components/Floor"
import LightBulb from '../components/LightBulb'
import OrbitControls from '../components/OrbitControls'
import Draggable from '../components/Draggable'
import ChatPlanet from '../components/ChatPlanet'

import { CSS3DObject } from 'three/examples/jsm/renderers/CSS3DRenderer'

export default function Three() {
    return (
        <>
        
        <div className={css.scene}>
        <Canvas
            shadows={true}
            className={css.canvas}
            camera={{
            position: [-6, 7, 7],
            }}
        >
            <ambientLight color={"white"} intensity={0.2} />
            <LightBulb position={[0, 5, 0]} />


            <Draggable>
          
                    <ChatPlanet rotateX={3} rotateY={0.2} />
                
            </Draggable>
            
            <OrbitControls/>
            <Floor position={[0, -10, 0]} />
        </Canvas>
    </div>
    </>
    )
}