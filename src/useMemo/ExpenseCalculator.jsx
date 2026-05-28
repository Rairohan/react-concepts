import {useState, useMemo} from 'react';
export default function ExpenseCalculator(){
    const [num,setNum] = useState()
    const [count,setCount] = useState(0)

    const sum = useMemo(()=>{
        let total = 0;
        for(let i=0;i<=num;i++){
            total+=i
        }
        return total
    },[num])

    return(
        <div>
            <p>{sum}</p>
            <input type="text" value={num} onChange={(e)=>setNum(Number(e.target.value))} />
            <button onClick={()=>setCount(count+1)}>Increase</button>
        </div>
    )
}