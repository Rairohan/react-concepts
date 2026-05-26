import { useContext } from "react";
import { CountContext } from "../App";
export default function Productcard(){
    const value = useContext(CountContext)
    return(
        <button onClick={value.addtocart}>add to cart</button>
    )
}