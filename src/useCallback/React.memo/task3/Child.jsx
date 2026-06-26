import React from "react";  
export const Child1 = React.memo(function Child1({onAdd,count}){
    console.log("Child 1")
    return(
        <div>
            <p>Count: {count}</p>
            <button onClick={onAdd}>Click to Add</button>
        </div>
    )
})
export const Child2 = React.memo(function Child2({onRemove,count}){
    console.log("Child 2")
    return(
        <div>
            <button onClick={onRemove}>Click to remove</button>
        </div>
    )
})