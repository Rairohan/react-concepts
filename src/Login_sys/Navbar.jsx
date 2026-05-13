import { useContext } from "react";
import { AuthContext } from "../App";
export default function Navbar(){
    const value = useContext(AuthContext)
    return(
        <div>
            <h1>{value.isLoggedIn  ? `Welcome ${value.user.name}`: "guest"}</h1>
        </div>
    )
}