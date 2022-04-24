import React from 'react'
import css from '../styles/Home.module.css'
const Choice = ({ text }) => {


    const decide = (event)=>{
        event.preventDefault()
        console.log(text)
    }
    return (
        <div className={css.choiceWrapper}>
            <div
            onClick={(event)=>
                decide(event)
            } 
            >
                {text}
            </div>
        </div>
    )
}

export default Choice
