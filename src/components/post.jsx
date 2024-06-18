import { List } from "@mui/material";
import React, { useEffect, useState } from "react";

const PostsContainer = (props) => {

    console.log("2", props);

    const postsData = props.postData;
    console.log("3", postsData);
    
    return(
        <>
        <List>
        {postsData && postsData.length > 0 ? (
            postsData.map((posts,index)=>(
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