import React from "react";
const Child = React.memo(function Child({ onClick }) {
  console.log("Child re-rendered")  
  return (
    <div>
      <h2>Child Component</h2>
      <button onClick={onClick}>Click me</button>
    </div>
  )
})

export default Child