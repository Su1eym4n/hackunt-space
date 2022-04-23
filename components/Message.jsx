import React from 'react'
import css from '../styles/Home.module.css'
const Message = ({sender, text}) => {
    const prefix=''
    if(sender=='u'){
        prefix='Astronaout: '
    }else{
        prefix='You: '
    }
    return (
        <div className={css.msgWrapper}>
        <div className={sender=='u'?css.textMessageU:css.textMessageA}>
            {prefix}
        </div>
        <div className={css.msg}>
            {text}
        </div>
        </div>

    )
}

export default Message
