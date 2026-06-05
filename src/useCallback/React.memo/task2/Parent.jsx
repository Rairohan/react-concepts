import React, { useState } from "react";
import { useCallback } from "react";
import Child from "./Child";
export default function Parent(){
    const [count,setCount] = useState(0)
    const [text,setText] = useState("")

        const handleIncrement = useCallback(()=>{
            setCount(count+1)
        },[count])
 
    return(
        <div>
            <input
                 type="text"
                 value={text}
                onChange={(e)=>{setText(e.target.value)}}
            />
            <Child onClick={handleIncrement} count={count}/>
        </div>
    )
}