import React from "react";
import {GiKiwiBird} from 'react-icons/gi'



function Post(props){
    return <div>{props.post.map( (chrp, i) => (
        <div key= {`post${i}`}><div><GiKiwiBird/></div> {chrp.chrpText}</div>

    ))}</div>
}
export default Post