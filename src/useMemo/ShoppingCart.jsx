import { products } from "./product";  
import { useMemo,useState } from "react";
export default function ShoppingCart(){
const [cart,setCart] = useState([])
const total = useMemo(()=>{
   return cart.reduce((sum,product)=> sum + product.price,0)
},[cart])
    return(
        <div>
            <p>total : {total}</p>
            {
                products.map((product)=>(
                    <div key={product.id}>
                    <p>{product.name}: Rs{product.price}</p>
                    <button onClick={()=>setCart([...cart,product])}>Add</button>
                    <button onClick={()=>setCart(cart.filter(item=>item.id !== product.id))}>Remove</button>
                    </div>  
                ))

            }
            
        </div>
    )
}