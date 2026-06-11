import React from "react";  
export const UserCard = React.memo(function Usercard({ user,addAge}){
    console.log("UserCard")
    return(
        <div>
            <p>My name is {user.name} and i'm {user.age} yrs old</p>
            <button onClick={addAge}>Click to Add</button>
        </div>
    )
})
export default UserCard