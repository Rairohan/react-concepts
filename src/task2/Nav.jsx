import { useContext } from "react";
import { UserContext } from "../App";
export default function Nav(){
    const user = useContext(UserContext)
    return(
        <h1>Hello {user.name}</h1>
    )
}