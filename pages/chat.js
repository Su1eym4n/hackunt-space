import { Canvas } from '@react-three/fiber'
import css from "../styles/Chat.module.css"
import huy from "../styles/Home.module.css"
import Message from '../components/Message';
import LightBulb from '../components/LightBulb'
import OrbitControls from '../components/OrbitControls'
import ChatPlanet from '../components/ChatPlanet'
import Button from '@mui/material/Button'
import React, { useState, useEffect } from 'react';
import Link from 'next/link'
import Choice from '../components/Choice';

class ListNode {
    constructor(data) {
        this.data = data
        this.next = null
        this.next1 = null
        this.next2 = null
    }
}

class LinkedList {
    constructor(head = null) {
        this.head = head
    }
}

let ast1 = new ListNode("Hello, I am Mr. Astronaut. It is so nice to meet you!")
let resp1_1 = new ListNode("Nice to you meet you too! Can you tell me more about daily life in space?")
let resp1_2 = new ListNode("What are you doing in space?")
ast1.next1 = resp1_1
ast1.next2 = resp1_2

// ------ AST 2 - 1
let ast2_1 = new ListNode("Living in space is not the same as living on Earth. Many things are different. Our bodies change in space. The way we stay clean and neat is different too. ")
resp1_1.next = ast2_1


let resp2_1_1 = new ListNode("How do your bodies change in space? ")
let resp2_1_2 = new ListNode("What do astronauts do to keep the space ship clean?")
ast2_1.next1 = resp2_1_1
ast2_1.next2 = resp2_1_2

// ------ AST 2 - 2
let ast2_2 = new ListNode("I am on an exploration mission of Mars. Did you know there have been nine successful US Mars landings? They were Viking 1 and Viking 2 (both 1976), Pathfinder (1997), Spirit and Opportunity (both 2004), Phoenix (2008), Curiosity (2012), InSight (2018) and Perseverance (2021).")
resp1_2.next = ast2_2

let resp2_2_1 = new ListNode("Wow, Mars huh? Tell me more… ")
let resp2_2_2 = new ListNode("You should explore a cooler planet like Jupiter.")
ast2_2.next1 = resp2_2_1
ast2_2.next2 = resp2_2_2

let list = new LinkedList(ast1)

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

    //set the choice
    const [choice, setChoice] = useState('')
    //to update feed
    const [feed, updateFeed] = useState(['Hello, I am Mr. Astronaut. It is so nice to meet you!'])
    const [message, setmessage] = useState('')


    const nextStage = () => {

        if (currentIndex <= 5) {
            setIndex(currentIndex + 1)
            console.log(currentIndex)
            setStage(stages[currentIndex])
        }

    }
    const updateHistory = ()=>{
        updateFeed(prevState => [...prevState, message])
        console.log(feed)
    }
    return (
        <>
            <div className={huy.nav}>
                <img className={huy.logo} src="/FINAL_FRONTIER_LOGO.png" />
                <div className={huy.title}>FINAL FRONTIER</div>
                <div className={css.navLinkContainer}>
                    <div className={css.navLinkTop}></div>

                    <Link href="/chat">
                        <div className={css.navLink}>Astronaut Chat</div>
                    </Link>
                    <Link href="/">
                        <div className={css.navLink}>Home</div>
                    </Link>

                </div>
            </div>
            <div className={css.container}>
                <div className={css.sideWrapper}>
                    <div className={css.avatar}>
                        Astronaut
                    </div>
                    <div className={css.history}>
                        History here
                        <Button onClick={(event) => setStage(stage2)}>Click Me</Button>
                        <Button onClick={(event) => setStage(stage1)}>stage1</Button>
                        <Button onClick={(event) => nextStage()}>Next</Button>
                        {feed.map((msg, index) => (
                            <Message
                            text={msg}
                            sender="u"
                        />
                        ))}
                    </div>
                    <div className={css.choices}>
                        <div className={huy.choiceWrapper}>
                            <div
                                onClick={() =>{
                                    //setChoice("choice 1")
                                    setmessage("cmth comes here")
                                    updateHistory()
                                }
                                }
                            >
                                choice 1
                            </div>
                        </div>
                        <div className={huy.choiceWrapper}>
                            <div
                                onClick={() =>{

                                    setChoice("choice 2")
                                }
                                }
                            >
                                choice 2
                            </div>
                        </div>
                    </div>
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