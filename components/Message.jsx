import React from 'react'
import css from '../styles/Home.module.css'
const Message = ({sender, text}) => {
    const prefix=''
    if(sender=='u'){
        prefix='Astronaout:  '
    }else{
        prefix='You:   '
    }
    return (
        <div className={sender=='u'?css.textMessageU:css.textMessageA}>
            {prefix+text}
        </div>
    )
}

export default Message
