import { useContext } from "react";
import { CountContext } from "../App";
export default function CartSummary(){
    const value = useContext(CountContext)
    return(
        <button onClick={value.remove}>Remove</button>
    )
}