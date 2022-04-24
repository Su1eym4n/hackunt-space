import React from 'react'
import css from '../styles/Home.module.css'

const Choice = ({ text }) => {
    const [choice, setChoice]=useState('')
    
    const decide = (event)=>{
        event.preventDefault()
        console.log(choice)

    }
    return (
        <div className={css.choiceWrapper}>
            <div
            onClick={(event)=>
                decide(setChoice(text))
            } 
            >
                {text}
            </div>
        </div>
    )
}

export default Choice
