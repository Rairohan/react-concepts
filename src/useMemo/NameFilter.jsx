import {names} from './names'
import { useState,useMemo } from 'react'
export default function NameFilter(){
    const[search,setSearch] = useState("")
    const filter = useMemo(()=>{
        if(search === "") return []
       return names.filter(name=> name.toLowerCase().includes(search.toLowerCase()))
    },[search])
    return(
        <div>
            <input type="text" value={search} onChange={(e)=>setSearch(e.target.value)} />
            {
                filter.map((name,index)=>{
                   return <p key={index}>{name}</p>
                })
            }
        </div>
    )
}