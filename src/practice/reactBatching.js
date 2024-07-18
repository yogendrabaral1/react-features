import React, { useEffect, useState } from 'react';

const ReactBatching = () => {
    const [count,setCount] = useState(0);
    const [toggle,setToggle] = useState(false);

    const handleClick = () => {
        setTimeout(() => { //stop react automatic batching of component render
            setCount(count => count + 1);
        }, 200)
        setToggle(toggle => !toggle);
    }

    useEffect(() => {
        console.log("Rendered");
    })

    return (
        <div>
            <button onClick={() => handleClick()}>Click Me!</button>
            <p>Count: {count}</p>
            <p>Toggle: {`${toggle}`}</p>
        </div>
    )
}

export default ReactBatching