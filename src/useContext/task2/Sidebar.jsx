import { UserContext } from "../App";
import { useContext } from "react";
export default function Sidebar(){
    const user = useContext(UserContext)
    return <h1> Your role is {user.role}</h1>
}