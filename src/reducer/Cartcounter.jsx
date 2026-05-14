import { useReducer } from "react";

function reducer(state, action) {
  switch(action.type) {
    case "add":    return state + 1
    case "remove": return state > 0 ? state - 1 : 0
    case "clear":  return 0
    default:       return state
  }
}

export default function Cartcounter() {
  const [count, dispatch] = useReducer(reducer, 0)

  return (
    <div>
      <h1>Cart:{count}</h1>
      <button onClick={()=>dispatch({type : "add"})}>Add</button>
      <button onClick={()=>dispatch({type: "remove"})}>Remove</button>
      <button onClick={()=>dispatch ({type:"clear"})}>Clear</button>
    </div>
  )
}