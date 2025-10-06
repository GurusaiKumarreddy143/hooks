import React, { useEffect, useState } from 'react'

const UseEffectEx1 = () => {

    const [count,setCount] = useState(0)

useEffect(()=>{
   console.log("i am comming from useEffect") 
},[])


  return (
    <div>
        <p>count : {count}</p>
        <button    style={{ background: "green", color: "white", fontSize: "20px", marginLeft: "30px" ,padding:"15px 20px"}} onClick={()=>{
            setCount(count+1)
        }} >+</button>
    </div>
    
  )
}

export default UseEffectEx1