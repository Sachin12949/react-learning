import { List } from "@mui/material";
import React, { useEffect, useState } from "react";

const PostsContainer = (props) => {

    const [post, setPost] = useState();


    useEffect(()=>{
        fetch("https://jsonplaceholder.typicode.com/posts")
        .then((response)=> response.json())
        .then((data)=>{
            setPost(data);
        })
        .catch((error)=>{
            console.error("Error posting data", error);
        });
    },[]);
    
    return(
        <>
        <div>
            Post container
        </div>
        <List>
        {post && post.length > 0 ? (
            post.map((posts,index)=>(
                <div>
                <h1>{index+1}</h1>
                <h2> {posts.title}</h2>
                <h3> {posts.body}</h3>
                </div>

            ))
        ) :
        <></>
        }
        </List>
        </>
    );
};

export default PostsContainer;