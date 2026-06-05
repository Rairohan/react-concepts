import { useState, useCallback } from 'react'
import Child from './Child'

export default function Parent() {
  const [count, setCount] = useState(0)
  const [text, setText] = useState("")

  const handleClick = useCallback(() => {
    console.log("button clicked")
  }, [])  // no dependencies — never needs to change

  return (
    <div>
      <h1>Count: {count}</h1>
      <input 
        type="text" 
        value={text}
        onChange={(e) => setText(e.target.value)} 
        placeholder="type here..."
      />
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <Child onClick={handleClick} />
    </div>
  )
}