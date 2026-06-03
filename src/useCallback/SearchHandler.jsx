import {useCallback,useMemo,useState} from 'react';
import { items } from './items';
export default function SearchHandler(){
    const [search,setSearch] = useState("")
    const [count,setCount] = useState(0)

    const handleSearch = useCallback((value)=>
    {
        setSearch(value)
    },[])
    const increment = useCallback(()=>{
        setCount(count + 1)
    },[count])
    const filtered = useMemo(()=>
    {
        return items.filter(item => item.toLowerCase().includes(search.toLowerCase()))
    },[search])
    return(
        <div>
            <input type="text" value={search} onChange={(e)=>setSearch(e.target.value)} />
            <button onClick={increment}>increment</button>
            {
                filtered.map((item,index)=>
                    <p key={index}>{item}</p>
                )
            }
        </div>
    )
}