import { Canvas } from '@react-three/fiber'
import css from "../styles/Chat.module.css"

import LightBulb from '../components/LightBulb'
import OrbitControls from '../components/OrbitControls'
import ChatPlanet from '../components/ChatPlanet'
import Button from '@mui/material/Button'

import React, { useState, useEffect } from 'react';


export default function Chat() {

    //Rotate speed can vary, X must get higher each stage
    const stage1 = {
        rotateSpeed: 0.01,
        planetX: 1,
    }
    const stage2 = {
        rotateSpeed: 0.01,
        planetX: 2
    }
    const stage3 = {
        rotateSpeed: 0.005,
        planetX: 2.5
    }
    const stage4 = {
        rotateSpeed: 0.02,
        planetX: 3
    }
    const stage5 = {
        rotateSpeed: 0.03,
        planetX: 4
    }
    const stage6 = {
        rotateSpeed: 0.01,
        planetX: 40000
    }

    
    const stages = [stage1, stage2, stage3, stage4, stage5, stage6]

    const [currentStage, setStage] = useState(stage1)
    const [currentIndex, setIndex]= useState(1)

    const nextStage = () => {

        if(currentIndex <= 5) {
            setIndex(currentIndex+1)
            console.log(currentIndex)
            setStage( stages[currentIndex] )
        }
        
    }

    return (
        <>
            <div className={css.container}>

                <div className={css.history}>
                    History here
                    <Button onClick={ (event) => setStage(stage2) }>Click Me</Button>
                    <Button onClick={ (event) => setStage(stage1) }>stage1</Button>
                    <Button onClick={ (event) => nextStage() }>nextStage</Button>
                </div>

        

                <div className={css.scene}>
                    <Canvas
                        shadows={true}
                        className={css.canvas}
                        camera={{
                        position: [2, 2, 0],
                        }}
                    >
                        <ambientLight color={"white"} intensity={0.1} />
                        <LightBulb position={[0, 5, 3]} />
                        <ChatPlanet rotateToX={currentStage.planetX} rotateAmount={currentStage.rotateSpeed} />
                        {/* <OrbitControls/> */}
                    </Canvas>
                </div>

            </div>
        </>
    )
}