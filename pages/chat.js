import { Canvas } from '@react-three/fiber'
import css from "../styles/Chat.module.css"

import LightBulb from '../components/LightBulb'
import OrbitControls from '../components/OrbitControls'
import ChatPlanet from '../components/ChatPlanet'
import Button from '@mui/material/Button'

import React, { useState } from 'react';


export default function Chat() {

    const stage1 = {
        rotateAmount: 0.01,
        planetX: 5,
        planetY: 6

    }
    const stage2 = {
        rotateAmount: 0.00,
        planetX: 0,
        planetY: 0
    }




    



    const [currentStage, setStage] = useState(stage1)

    return (
        <>
            <div className={css.container}>

                <div className={css.history}>
                    History here
                    <Button onClick={ (event) => setStage(stage2) }>Click Me</Button>
                    <Button onClick={ (event) => setStage(stage1) }>stage1</Button>
                </div>

        

                <div className={css.scene}>
                    <Canvas
                        shadows={true}
                        className={css.canvas}
                        camera={{
                        position: [2, 2, 0],
                        }}
                    >
                        <ambientLight color={"white"} intensity={0.2} />
                        <LightBulb position={[0, 5, 3]} />
                        <ChatPlanet rotateToX={currentStage.planetX} rotateYamt={currentStage.planetY} rotateAmount={currentStage.rotateAmount} />
                        {/* <OrbitControls/> */}
                    </Canvas>
                </div>

            </div>
        </>
    )
}