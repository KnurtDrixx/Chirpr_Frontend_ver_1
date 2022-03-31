import React from "react";

function Post(props){
    return <div>{props.post.map((str, i) => (
        <div key= {`post${i}`} >{str}</div>

    ))}</div>
}
export default Post