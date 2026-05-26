import { useContext } from "react";
import { NotifContext } from "../../App";

export default function Notification(){
    const value = useContext(NotifContext)
    const color ={
        success: "green",
        error: "red",
        warning: "yellow"
    }
    return(
        <div>
            <p style={{backgroundColor: color[value.type]}}>{value.message}</p>
        </div>
    )
}