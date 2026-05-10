import { useContext } from "react";
import { CountContext } from "../App";

export default function Nbar(){
const value = useContext(CountContext)
return(
    <h1>{value.count}</h1>
)
}