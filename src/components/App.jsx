import React from 'react'
import {useState} from 'react'
import Post from './Post'
import Input from './Input'
import { v4 as uuidv4 } from 'uuid';
import moment from 'moment';

function Beans(){
    const [post, setPost] = useState([{ chrpText: 'post1', uuid: uuidv4(), timestamp: moment().format("[Ervin Howell Chrpd on] dddd, MMMM Do YYYY, h:mm:ss a")},
    { chrpText: 'post2', uuid: uuidv4(), timestamp: moment().format("[Ervin Howell Chrpd on] dddd, MMMM Do YYYY, h:mm:ss a")},
    { chrpText: 'post3', uuid: uuidv4(), timestamp: moment().format("[Ervin Howell Chrpd on] dddd, MMMM Do YYYY, h:mm:ss a")}]);

    function handleNewPost(newPost){
        setPost([(newPost), ...post])
    }



    return <div>
        <Input addNewPost={handleNewPost} ></Input>
        <Post  post={post}></Post>
    </div>
}
export default Beans