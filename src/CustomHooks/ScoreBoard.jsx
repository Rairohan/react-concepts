import useCounter from "./useCounter";
export default function ScoreBoard(){
    const{count,increment,decrement,reset} = useCounter()
    return(
        <div>
             <p>{count}</p>
             <button onClick={increment}>+</button>
             <button onClick={decrement}>-</button>
             <button onClick={reset}>Reset</button>
        </div>
    )
}