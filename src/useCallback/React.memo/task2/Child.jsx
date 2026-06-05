import React from "react";
export const Child = React.memo(function Child({onClick,count}){
    console.log("Child rendered")
    return(
        <div>
            <p>Count : {count}</p>
            <button onClick={onClick}>Click me</button>
        </div>
    )
})
export default Child
