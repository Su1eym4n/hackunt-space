import { Canvas } from '@react-three/fiber'
import css from "../styles/Chat.module.css"
import Head from 'next/head'
import Message from '../components/Message';
import LightBulb from '../components/LightBulb'
import OrbitControls from '../components/OrbitControls'
import ChatPlanet from '../components/ChatPlanet'
import React, { useState, useEffect } from 'react';
import Link from 'next/link'
import Choice from '../components/Choice';
import Button from '@mui/material/Button'

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

const adventure = [
    {
        id: 1,
        content: "Hello, I am Mr. Astronaut. It is so nice to meet you!",
        choice1: "Nice to you meet you too! Can you tell me more about daily life in space?",
        choice1ID: 2,
        choice2: "What are you doing in space?",
        choice2ID: 3
    },
    {
        id: 2,
        content: "Living in space is not the same as living on Earth. Many things are different. Our bodies change in space. The way we stay clean and neat is different too.",
        choice1: "How do your bodies change in space?",
        choice1ID: 4,
        choice2: "What do astronauts do to keep the space ship clean?",
        choice2ID: 5
    },
    {
        id: 3,
        content: "I am on an exploration mission of Mars. Did you know there have been nine successful US Mars landings? They were Viking 1 and Viking 2 (both 1976), Pathfinder (1997), Spirit and Opportunity (both 2004), Phoenix (2008), Curiosity (2012), InSight (2018) and Perseverance (2021).",
        choice1: "Wow, Mars huh? Tell me more...",
        choice1ID: 6,
        choice2: "You should explore a cooler planet like Jupiter.",
        choice2ID: 7
    },
    {
        id: 4,
        content: "On Earth, our lower body and legs carry our weight. This helps keep our bones and muscles strong. In space, due to the lack of gravity, we float. We must exercise in space every day to maintain our muscle and bone strength. There are many dangerous things in space...a lack of oxygen... radiation..speaking of! My reader is saying I am in an area with 700 rem of radiation. Is that safe? (Use Google to help you out)",
        choice1: "Yup! Sounds safe to me.",
        choice1ID: 8,
        choice2: "No way! Get out of there Mr. Astronaut!",
        choice2ID: 9
    },
    {
        id: 5,
        content: "Doing chores is not always a fun thing. But we have to keep our rooms and houses clean and neat. In space, we astronauts live in a very small space! We have to keep their area clean in space just like we do on Earth. In space, the we have to wipe the walls, floors, and windows to keep them clean.",
        choice1: "Oh dang that sounds important! What happens if you skip the cleaning routine?",
        choice1ID: 10,
        choice2: "Skip the cleaning routine this week!",
        choice2ID: 11
    },
    {
        id: 6,
        content: "Mars is less than 56 million km (35 million miles) from Earth at its closest approach, but it recedes to almost 400 million km (250 million miles) when the two planets are on opposite sides of the solar system. Mars is the second smallest planet in the solar system, only larger than Mercury and slightly more than half the size of Earth.",
        choice1: "How many moons does Mars have?",
        choice1ID: 12,
        choice2: "How long is a day on Mars?",
        choice2ID: 13
    },
    {
        id: 7,
        content: "Jupiter is made of mostly hydrogen and helium gas. If you tried to land on Jupiter, it would be a bad idea. You'd face extremely hot temperatures and you'd free-float in mid-Jupiter with no way of escaping...so I will hang out on Mars for now.",
        choice1: "N/A",
        choice1ID: 0,
        choice2: "N/A",
        choice2ID: 0
    },
    {
        id: 8,
        content: "Mission Failed: That was WAY to much radiation. Click below to restart!",
        choice1: "N/A",
        choice1ID: 0,
        choice2: "N/A",
        choice2ID: 0
    },
    {
        id: 9,
        content: "Alright, just relocated! Did you know channels, valleys and gullies are found all over Mars? Some channels can be 60 miles wide and 1,200 miles long. Water may still lie in cracks and pores in underground rock, maybe life on Mars is possibility too!",
        choice1: "You should search for life on Mars!",
        choice1ID: 14,
        choice2: "Tell me more about the Martian landscape.",
        choice2ID: 15
    },
    {
        id: 10,
        content: "Sanitation is more important within the confines of a spaceship or space station than on Earth. Studies have shown that the population of some microbes can increase extraordinarily in microgravity and confined spaces. This means many infectious illnesses could easily spread to everyone aboard.",
        choice1: "What do you eat in outerspace?",
        choice1ID: 16,
        choice2: "What’s the nearest planet to Mars?",
        choice2ID: 17
    },
    {
        id: 11,
        content: "Mission Failed: Mr. Astronaut contracted a deadly disease. Click to restart!",
        choice1: "N/A",
        choice1ID: 0,
        choice2: "N/A",
        choice2ID: 0
    },
    {
        id: 12,
        content: "There are two Mars moons; Phobos and Deimos. Phobos is the larger of the two but it is still tiny, with a radius of around 11km. Both moons were named after the Greek gods (and twin sons of the god Mars) of fear and terror respectively. I’ve actually travelled to Phobos myself!",
        choice1: "N/A",
        choice1ID: 0,
        choice2: "N/A",
        choice2ID: 0
    },
    {
        id: 13,
        content: "Mars and Earth have very similar lengths of day. One day on Mars, known as a 'sol', lasts 24 hours, 39 minutes, and 35.244 Earth seconds.",
        choice1: "What do you do in those extra 39 minutes you get on Mars?",
        choice1ID: 6,
        choice2: "Have you found anything cool yet on your mission?",
        choice2ID: 7
    },
    {
        id: 14,
        content: "Mission Failed: The Martians attacked the Astronaut. Click below to restart!",
        choice1: "N/A",
        choice1ID: 0,
        choice2: "N/A",
        choice2ID: 0
    },
    {
        id: 15,
        content: "There’s many valleys on Mars. I personally love the the Warrego Valles– that’s my favorite vacation spot. The Warrego Valles are a set of channels in an ancient river valley in the Thaumasia quadrangle of Mars. Speaking of, I better get going! See you soon!",
        choice1: "N/A",
        choice1ID: 0,
        choice2: "N/A",
        choice2ID: 0
    },
    {
        id: 16,
        content: "Astronauts today eat many of the same foods we eat on Earth. Food is still dehydrated or prepared in special ways. But space shuttles now have full kitchens with hot water and an oven! I am hungry...gotta go cook up dinner! Goodbye!",
        choice1: "N/A",
        choice1ID: 0,
        choice2: "N/A",
        choice2ID: 0
    },
    {
        id: 17,
        content: "The closest planet to Mars is our own home planet, Earth. During their orbits, Earth and Mars can get as close as about 55 million kilometers. Sounds like a quick trip right?",
        choice1: "Yes, count me in!",
        choice1ID: 20,
        choice2: "No...sounds awful.",
        choice2ID: 21
    },
    {
        id: 18,
        content: "",
        choice1: "Wow, Mars huh? Tell me more...",
        choice1ID: 6,
        choice2: "You should explore a cooler planet like Jupiter.",
        choice2ID: 7
    },
    {
        id: 19,
        content: "",
        choice1: "Wow, Mars huh? Tell me more...",
        choice1ID: 6,
        choice2: "You should explore a cooler planet like Jupiter.",
        choice2ID: 7
    },
    {
        id: 20,
        content: "I hope to see you around Mars, explorer! Until then, I have got to go! There is a duststorm approaching. Talk to you later!",
        choice1: "N/A",
        choice1ID: 0,
        choice2: "N/A",
        choice2ID: 0
    },
    {
        id: 21,
        content: "Well that’s a bummer. Space travel is fascinating! I have got to go. There is a duststorm approaching. Talk to you later!",
        choice1: "N/A",
        choice1ID: 0,
        choice2: "N/A",
        choice2ID: 0
    },

]

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
        rotateSpeed: 0.01,
        planetX: 40000000
    }
    


    const stages = [stage1, stage2, stage3, stage4]

    const [currentStage, setStage] = useState(stage1)
    const [currentIndex, setIndex] = useState(0)

    const nextStage = () => {

        if (currentIndex <= 3) {
            setIndex(currentIndex + 1)
            console.log(currentIndex)
            setStage(stages[currentIndex])
        }

    }



    //set the choice
    const [choice, setChoice] = useState('')
    //to update feed
    const [feed, updateFeed] = useState(['Hello, I am Mr. Astronaut. It is so nice to meet you!'])
    const [message, setmessage] = useState('first')  

    //Handle nodes
    const [currentNode, setCurrentNode] = useState(list.head)

    const [currentID, setCurrentID] = useState(0)

    const [buttonOne, setButtonOne] = useState('Nice to you meet you too! Can you tell me more about daily life in space?')
    const [buttonTwo, setButtonTwo] = useState('What are you doing in space?')

    let flipFlop = true


    function senderFlipFlop() {
        // if(flipFlop) {
        //     flipFlop = false
        //     return "A"
        // }
        // else {
        //     flipFlop = true
        //     return "u"
        // }
        return "A"
    }

    function handleButton(number, choiceNumber, previousNumber) {
        nextStage()

        console.log(number - 1)
        setCurrentID(number - 1)
        updateFeed(prevState => [...prevState, adventure[number-1].content])

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
            <Link href="/chat"><div className={css.currentLink}>Astronaut Chat</div></Link>
            <Link href="/"><div className={css.navLink}>Home</div></Link>
        </div>
    </div>   
{/* body */}
<div className={css.container}>
                <div className={css.sideWrapper}>
                    <div className={css.avatar}>
                        Astronaut
                    </div>
                    <div className={css.history}>
                        <Button onClick={(event) => setStage(stage2)}>Click Me</Button>
                        <Button onClick={(event) => setStage(stage1)}>stage1</Button>
                        <Button onClick={(event) => nextStage()}>Next</Button>
                        {feed.map((msg, index) => (
                            <Message
                            text={msg}
                            sender={senderFlipFlop()}
                        />
                        ))}
                    </div>
                    <div className={css.choices}>
                        <div className={css.choiceWrapper}>
                            <div
                                //Button One
                                onClick={ () => handleButton(adventure[currentID].choice1ID, 1, currentID)}
                            >
                                {adventure[currentID].choice1}
                            </div>
                        </div>
                        <div className={css.choiceWrapper}>
                            <div
                                //Button Two
                                onClick={ () => handleButton(adventure[currentID].choice2ID, 2, currentID)}
                            >
                                {adventure[currentID].choice2}
                            </div>
                        </div>
                        {/* planet */}
            
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
        
        </div>
           
    </>
    )
}