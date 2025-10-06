import React, { useEffect, useState } from 'react'

const UseEffectEx2 = () => {

    const [count,setCount] = useState(0)
    const [toggle,setToggle] = useState(false)
    const [windowSize,setwindowSize] = useState(window.innerWidth)
   

useEffect(()=>{

    const handleResize = ()=>setwindowSize(window.innerWidth)
    window.addEventListener("resize", handleResize)

   console.log("i am comming from useEffect") 
   return ()=>{
    window.removeEventListener("resize",handleResize)
   }
},[])

let backgroundColor = "red"
if(toggle){
    backgroundColor="blue"
}else {
    backgroundColor="red"
}


  return (
    <div>
        <h3>currect window Size : {windowSize}</h3>
        <p>useState example : 2 </p>
        <p>count : {count}</p>
        <button    style={{ background: "green", color: "white", fontSize: "20px", marginLeft: "30px" ,padding:"15px 20px"}} onClick={()=>{
            setCount(count+1)
        }} >+</button>

<div>
            <button 
            onClick={()=>setToggle(!toggle)}
            style={{ color: "white", backgroundColor: backgroundColor, marginLeft: "8px" ,marginBottom:"30px",minWidth:'100px',height:"35px",borderRadius:'10px',border:"1px solid black",marginTop:"20px",cursor:"pointer"}}>{toggle ? "open":"close"}</button>
</div>
    </div>
    
  )
}

export default UseEffectEx2