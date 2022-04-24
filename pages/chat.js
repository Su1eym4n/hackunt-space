import { Canvas } from '@react-three/fiber'
import css from "../styles/Chat.module.css"
import Head from 'next/head'
import Message from '../components/Message';
import LightBulb from '../components/LightBulb'
import OrbitControls from '../components/OrbitControls'
import ChatPlanet from '../components/ChatPlanet'
import Button from '@mui/material/Button'
import React, { useState, useEffect } from 'react';
import Link from 'next/link'
import Choice from '../components/Choice';


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
    const [currentIndex, setIndex] = useState(1)

    const nextStage = () => {

        if (currentIndex <= 5) {
            setIndex(currentIndex + 1)
            console.log(currentIndex)
            setStage(stages[currentIndex])
        }

    }

    return (
        <>
        <div className="background">
        <Head>
        <link rel="stylesheet" href="https://use.typekit.net/lho8hpo.css"></link>
        </Head>
{/* navbar */}
    <div className={css.nav}>
        <img className={css.logo} src="/FINAL_FRONTIER_LOGO.png"/>
        <div className={css.title}>FINAL FRONTIER</div>
        <div className={css.navLinkContainer}>
            <Link href="/chat"><div className={css.navLink}>Astronaut Chat</div></Link>
            <Link href="/"><div className={css.navLink}>Home</div></Link>
        </div>
    </div>   
{/* body */}
        <div className={css.container}>
            {/* messages */}
            <div classname={css.sideWrapper}>
                <div className={css.history}>
                    History here
                    <Button onClick={(event) => setStage(stage2)}>Click Me</Button>
                    <Button onClick={(event) => setStage(stage1)}>stage1</Button>
                    <Button onClick={(event) => nextStage()}>Next</Button>
                    <Message
                        text="kyoyo wasj; j;kk[pko[h jtyuhbmrot 8;iyuhog8rhijohru 9tijokpti0u9t hrij4kogkrti0 u9hir4nkljrkothi ren4kmlrgkogjnf hietink43mlokjtihnkm4 l3kjoehienk5m hjongftk5sap"
                        sender="A"
                    />
                    <Message
                        text="kyoyo wasj; j;kk[pko[h jtyuhbmrot 8;iyuhog8"
                        sender="U"
                    />
                    <Message
                        text="kyoyo wasj; j;kk[pko[h jtyuhbmrot 8;iyuhog8rhijohru 9tijokpti0u9t hrij4kogkrti0 u9hir4nkljrkothi ren4kmlrgkogjnf hietink43mlokjtihnkm4 l3kjoehienk5m hjongftk5sap"
                        sender="A"
                    />
                    <Message
                        text="kyoyo wasj; j;kk[pko[h jtyuhbmrot 8;iyuhog8"
                        sender="U"
                    />
                    <Message
                        text="kyoyo wasj; j;kk[pko[h jtyuhbmrot 8;iyuhog8rhijohru 9tijokpti0u9t hrij4kogkrti0 u9hir4nkljrkothi ren4kmlrgkogjnf hietink43mlokjtihnkm4 l3kjoehienk5m hjongftk5sap"
                        sender="A"
                    />
                    <Message
                        text="kyoyo wasj; j;kk[pko[h jtyuhbmrot 8;iyuhog8"
                        sender="U"
                    />
                    <Message
                        text="kyoyo wasj; j;kk[pko[h jtyuhbmrot 8;iyuhog8rhijohru 9tijokpti0u9t hrij4kogkrti0 u9hir4nkljrkothi ren4kmlrgkogjnf hietink43mlokjtihnkm4 l3kjoehienk5m hjongftk5sap"
                        sender="A"
                    />
                    <Message
                        text="kyoyo wasj; j;kk[pko[h jtyuhbmrot 8;iyuhog8"
                        sender="U"
                    />
                    <Message
                        text="kyoyo wasj; j;kk[pko[h jtyuhbmrot 8;iyuhog8rhijohru 9tijokpti0u9t hrij4kogkrti0 u9hir4nkljrkothi ren4kmlrgkogjnf hietink43mlokjtihnkm4 l3kjoehienk5m hjongftk5sap"
                        sender="A"
                    />
                    <Message
                        text="kyoyo wasj; j;kk[pko[h jtyuhbmrot 8;iyuhog8"
                        sender="U"
                    />
                    <Message
                        text="kyoyo wasj; j;kk[pko[h jtyuhbmrot 8;iyuhog8rhijohru 9tijokpti0u9t hrij4kogkrti0 u9hir4nkljrkothi ren4kmlrgkogjnf hietink43mlokjtihnkm4 l3kjoehienk5m hjongftk5sap"
                        sender="A"
                    />
                    <Message
                        text="kyoyo wasj; j;kk[pko[h jtyuhbmrot 8;iyuhog8"
                        sender="U"
                    />
                    <Message
                        text="kyoyo wasj; j;kk[pko[h jtyuhbmrot 8;iyuhog8rhijohru 9tijokpti0u9t hrij4kogkrti0 u9hir4nkljrkothi ren4kmlrgkogjnf hietink43mlokjtihnkm4 l3kjoehienk5m hjongftk5sap"
                        sender="A"
                    />
                    <Message
                        text="kyoyo wasj; j;kk[pko[h jtyuhbmrot 8;iyuhog8"
                        sender="U"
                    />
                    <Message
                        text="kyoyo wasj; j;kk[pko[h jtyuhbmrot 8;iyuhog8rhijohru 9tijokpti0u9t hrij4kogkrti0 u9hir4nkljrkothi ren4kmlrgkogjnf hietink43mlokjtihnkm4 l3kjoehienk5m hjongftk5sap"
                        sender="A"
                    />
                    <Message
                        text="kyoyo wasj; j;kk[pko[h jtyuhbmrot 8;iyuhog8"
                        sender="U"
                    />
                    <Message
                        text="kyoyo wasj; j;kk[pko[h jtyuhbmrot 8;iyuhog8rhijohru 9tijokpti0u9t hrij4kogkrti0 u9hir4nkljrkothi ren4kmlrgkogjnf hietink43mlokjtihnkm4 l3kjoehienk5m hjongftk5sap"
                        sender="A"
                    />
                    <Message
                        text="kyoyo wasj; j;kk[pko[h jtyuhbmrot 8;iyuhog8"
                        sender="U"
                    />
                </div>
                {/* buttons */}
                <div className={css.choices}>
                    <Choice text="Greet"/>
                    <Choice text="Ask who t f asked"/>
                </div>
            </div>
            {/* planet */}
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
        </div>
       
    </>
    )
}