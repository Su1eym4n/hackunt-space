import { Canvas } from '@react-three/fiber'
import css from "../styles/Chat.module.css"

import LightBulb from '../components/LightBulb'
import OrbitControls from '../components/OrbitControls'
import ChatPlanet from '../components/ChatPlanet'

import React, { useState } from 'react';


export default function Chat() {

    const stage1 = {
        rotateAmount: 0.001,
        nextProp: 0
    }
    const stage2 = {
        rotateAmount: 0.00
    }

    const [currentStage, setStage] = useState(stage1)

    return (
        <>
            <div className={css.container}>

                <div className={css.history}>
                    History here
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
                        <ChatPlanet rotateX={5} rotateY={5} rotateAmount={currentStage.rotateAmount} />
                        {/* <OrbitControls/> */}
                    </Canvas>
                </div>

            </div>
<<<<<<< HEAD
            <TabBar 
            page="Adventure"
            className={css.tab}/>
        </div>
{/* scene */}
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
=======
        </>
>>>>>>> 62048f8f5ed3bdba2a69a2ff0fee465a6b8661f5
    )
}