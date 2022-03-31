import React from 'react'
import {useState} from 'react'

function Input(props) {
    const [text, setText] = useState('')

    function handleButtonClick(){
        if (!text) return

        if (text.length > 44){
            return
        }

        props.addNewPost(text);
        setText('')
    }
    return <>
        <input maxLength={44} value={text} onChange={e => setText(e.target.value)}/>
        <button onClick={handleButtonClick}>Make a new Post!</button>
        </>
}

export default Input