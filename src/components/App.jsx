import React from 'react'
import {useState} from 'react'
import Post from './Post'
import Input from './Input'

function Beans(){
    const [post, setPost] = useState(['post1', 'post2', 'post3']);

    function handleNewPost(newPost){
        setPost([newPost, ...post])
    }



    return <div>
        <Input addNewPost={handleNewPost} ></Input>
        <Post post={post}></Post>
    </div>
}
export default Beans