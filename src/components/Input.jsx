import React from 'react'
import {useState} from 'react'
import { v4 as uuidv4 } from 'uuid';
import moment from 'moment';

function Input(props) {
    const [text, setText] = useState('')

    function handleButtonClick(){
        if (!text) return

        if (text.length > 44){
            return
        }
        let newPost = { chrpText: text, uuid: uuidv4(), timestamp: moment().format("[Ervin Howell Chrpd on] dddd, MMMM Do YYYY, h:mm:ss a")}
        props.addNewPost(newPost);
        setText('')
    }
    return <>
        <input maxLength={44} value={text} onChange={e => setText(e.target.value)}/>
        <button onClick={handleButtonClick}>Make a new Post!</button>
        </>
}

export default Input