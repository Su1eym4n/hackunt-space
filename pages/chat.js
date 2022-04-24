import { Canvas } from '@react-three/fiber'
import css from "../styles/Chat.module.css"
import Message from '../components/Message';
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
                    <Button onClick={(event) => setStage(stage2)}>Click Me</Button>
                    <Button onClick={(event) => setStage(stage1)}>stage1</Button>
                    <Message
                        text="kyoyo wasj; j;kk[pko[h jtyuhbmrot 8;iyuhog8rhijohru9tijokpti0u9t hrij4kogkrti0u9hir4nkljrkothi ren4kmlrgkogjnfhietink43mlokjtihnkm4l3kjoehienk5mhjongftk5sap"
                        sender="A"
                    />
                    <Message
                        text="kyoyo wasj; j;kk[pko[h jtyuhbmrot 8;iyuhog8"
                        sender="U"
                    />
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