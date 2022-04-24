import React from 'react'
import css from '../styles/Home.module.css'
const Choice = ({ text }) => {
    return (
        <div className={css.choiceWrapper}>
            <div>
                {text}
            </div>
        </div>
    )
}

export default Choice
