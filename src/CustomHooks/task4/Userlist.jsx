import useFetch from "./useFetch";
export default function Userlist(){
  const {data,loading,error} = useFetch("https://jsonplaceholder.typicode.com/users")
  if (loading) return <p>Loading...</p>
  if (error) return <p>Error...</p>
  return(
    <div>
         {
            data.map(user =>(
           <p key={user.id}>{user.name}</p> 
        ))
    }
    </div>
  )
}