import { useReducer, useState } from "react";

function reducer(state, action) {
  switch(action.type) {
    case "add": return [...state, action.payload]
    case "delete": return state.filter(todo=> todo.id !== action.payload)
    case "clear" : return []
    default:    return state
  }
}

export default function Todo() {
  const [todos, dispatch] = useReducer(reducer, [])
  const [input, setInput] = useState("")

    return (
  <div>
    <input 
      type="text" 
      value={input} 
      onChange={(e) => setInput(e.target.value)} 
    />
    <button onClick={() => dispatch({ type: "add", payload: { id: Date.now(), text: input } })}>
      Add
    </button>
    <button onClick={() => dispatch({ type: "clear" })}>Clear All</button>

    {todos.map(todo => (
      <div key={todo.id}>
        <p>{todo.text}</p>
        <button onClick={() => dispatch({ type: "delete", payload: todo.id })}>
          Delete
        </button>
      </div>
    ))}
  </div>
)
}