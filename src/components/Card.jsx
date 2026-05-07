import { useContext } from "react"
import { ThemeContext } from "../App"

export default function Card(){
    const {theme} = useContext(ThemeContext)
    return(
        <div style={{backgroundColor: theme === "dark" ? "black" : "white",color: theme === "dark" ? "white" : "black"}} >
            <h2>Card</h2>
        </div>
    )
}