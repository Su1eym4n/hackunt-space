import React from 'react'
import css from '../styles/Home.module.css'
import TypeAnim from './TypeAnim'

const Message = ({ sender, text }) => {
    var prefix = ''
    if (sender == 'A') {
        prefix = 'Astronaout: '
    } else {
        prefix = 'You: '
    }
    return (
        <div className={css.msgWrapper}>
            <div className={sender == 'A' ?css.textMessageA:css.textMessageU }>
                {prefix}
            </div>
            <div className={css.msg}>
                {text}
            </div>

        </div>

    )
}
export default Message
