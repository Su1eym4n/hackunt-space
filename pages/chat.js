// import { Canvas as CanvasCSS3D, useFrame as useFrameCSS3D, useThree as useThreeCSS3D } from '@react-three/fiber'
import { Canvas } from '@react-three/fiber'
import css from "../styles/Home.module.css"

import Floor from "../components/Floor"
import LightBulb from '../components/LightBulb'
import OrbitControls from '../components/OrbitControls'
import ChatPlanet from '../components/ChatPlanet'

import { CSS3DObject } from 'three/examples/jsm/renderers/CSS3DRenderer'

export default function Chat() {

    return (
        <>

        
        
        <div className={css.scene}>
        <Canvas
            shadows={true}
            className={css.canvas}
            camera={{
            position: [2, 2, 2],
            }}
        >
            <ambientLight color={"white"} intensity={0.2} />
            <LightBulb position={[0, 5, 3]} />
            <ChatPlanet rotateX={5} rotateY={5} />
            {/* <OrbitControls/> */}
        </Canvas>
    </div>
    </>
    )
}