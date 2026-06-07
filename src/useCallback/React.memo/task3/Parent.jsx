import { useCallback,useState } from "react";
import React from "react";
import { Child1,Child2 } from "./Child";
export default function Parent(){
    const[text,setText] = useState("")
    const[count,setCount] = useState(0)

    const onAdd = useCallback(()=>{
        setCount(count + 1)
    },[count])
    const onRemove = useCallback(()=>{
        setCount(count != 0 ? count - 1: count)
    },[count])

    return(
        <div>
            <input type="text" value={text} onChange={(e)=>{setText(e.target.value)}}/>
            <Child1 onAdd={onAdd} count={count}/>
            <Child2 onRemove={onRemove} count={count}/>

        </div>
    )
}