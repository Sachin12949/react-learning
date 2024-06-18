import React, { useEffect, useState } from "react";

const Toggle = () => {
    const [isVisible, setIsVisible] = useState(false);

    const handleToggle = () => {
        setIsVisible(!isVisible);
    }
    return(
        <div>
            <h2>Footer</h2>
            <button onClick={handleToggle}>Toggle message</button>
            {isVisible && <p>This message is {isVisible ? 'visible' : 'hidden' }</p>}
        </div>
    );
};

const Footer = () => {
    const [count, setCount] = useState(0);

    useEffect ( () => {
        const timer = setTimeout(() => {
        setCount(prevCount=> prevCount+1);
        }, 1000);
        return() => clearTimeout(timer);
    }, [count]);
    return(
        <>
        <div className="footer">

            <h2>component rendered {count} times</h2>
            <Toggle/>
        </div>
        </>
    )
}

export default Footer;