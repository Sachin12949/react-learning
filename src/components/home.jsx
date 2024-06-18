import React, { useState, useEffect } from "react";
import PostsContainer from "./post";
import SortableTable from "./sort";
import FetchApi from "./userData";

const Counter = ({initialCount}) => {
    const [count, setCount] = useState(initialCount);
    const [error, setError] = useState("");

    const handleIncrement = () => {
        setCount(prevCount => prevCount+1);
        setError("");
    };

    const handleDecrement = () => {
        if(count > 0) {
            setCount(prevCount => prevCount - 1);
            setError("");
        } else {
            setError("Count cannot be negative");
        }
    };

    return(
        <div>
            <p>count {count}</p>
            {error && <p style={{color:'red'}}>{error}</p>}
            <button onClick={handleIncrement}>Increment</button>
            <button onClick={handleDecrement}>Decrement</button>
        </div>
    );
};

const Home = () => {

    const [text, setText] = useState("click me to change text");

    const handleClick = () => {
        setText("Button Clicked");
    }

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

    console.log("1",post);

    return(
        <>
        <div className="home">
            <h4>
                Welcome
            </h4>
            <p>{text}</p>
            <button onClick={handleClick}>Click me</button>
            <Counter initialCount={0}/>
            {/* <FetchApi userData={allUserData}/> */}
            <PostsContainer postData={post}/>
            {/* <SortableTable/> */}
        </div>
        </>
    )
}

export default Home;