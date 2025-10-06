import React,{useEffect} from 'react'

const GetAndPost = () => {


    const handlePost = async ()=>{
       let res =  await fetch("http://localhost:3000/products",{
            method:"POST",
            body:JSON.stringify({
            "name": "Wire Mouse",
            "category": "Electronics",
            "price": 20.99,
            "stock": 20
            }),
            headers:{
                "content-type" :"application/json"
            }
        })

        let result = await res.json() 
        console.log(result)
    }
    const handleGet = async ()=>{
       let res =  await fetch("http://localhost:3000/products")
        let data = await res.json() 
        console.log(data)
    }
  return (
    <>
        <button onClick={handleGet} 
        style={{ color: "white", backgroundColor: "blue", marginLeft: "8px" ,marginBottom:"30px",minWidth:'100px',height:"35px",borderRadius:'10px',border:"1px solid black",marginTop:"20px",cursor:"pointer"}}>get</button>
        <button onClick={handlePost}
         style={{ color: "white", backgroundColor: "green", marginLeft: "8px" ,marginBottom:"30px",minWidth:'100px',height:"35px",borderRadius:'10px',border:"1px solid black",marginTop:"20px",cursor:"pointer"}}>post</button>
    
    </>

   
  )
}

export default GetAndPost