import {useState,useCallback} from 'react'
export default function ButtonHandler(){
    const [count,setCount] = useState(0)
    const [text,setText] = useState(" ")

    const increment = useCallback(()=>{
        setCount(count+1)
       console.log("increment") 
    },[count])
     const decrement = useCallback(()=>{
       setCount( count>0 ? count - 1 : count)
       console.log("decrement") 
    },[count])
return(
    <div>
        <input type="text" onChange={(e)=>{setText(e.target.value)}} />
        <p>{count}</p>
        <button onClick={increment}>Increment</button>
        <button onClick={decrement}>Decrement</button>
    </div>
)
}