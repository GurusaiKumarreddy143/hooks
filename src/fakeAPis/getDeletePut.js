import React,{useEffect} from 'react'

const GetDeletePut = () => {


    // const handlePost = async ()=>{
    //    let res =  await fetch("http://localhost:3000/products",{
    //         method:"POST",
    //         body:JSON.stringify({
    //         "name": "Wire Mouse",
    //         "category": "Electronics",
    //         "price": 20.99,
    //         "stock": 20
    //         }),
    //         headers:{
    //             "content-type" :"application/json"
    //         }
    //     })

    //     let result = await res.json() 
    //     console.log(result)
    // }


    const handleGet = async ()=>{
       let res =  await fetch("http://localhost:3000/products")
        let data = await res.json() 
        console.log(data)
    }

    const handlePut = async ()=>{
          const res = await fetch('http://localhost:3000/products/3',{
            method:"PUT",
            body:JSON.stringify({
            
              "name": "tea maker",
              "category": "Home Appliances",
      "price": 89.99,
      "stock": 40
     
          }),
          headers:{
            "content-type":"application/json"
          }
          })
 
          const result = await res.json();

          console.log(result);

        }
    

    const handleDelete = async()=>{
      const res = await fetch('http://localhost:3000/products/4',{
        method:"DELETE"
        
      })

      const result = await res.json()
      console.log(result)
    }

  return (
    <>
    <div>
              <button onClick={handleGet} 
        style={{ color: "white", backgroundColor: "blue", marginLeft: "8px" ,marginBottom:"30px",minWidth:'100px',height:"35px",borderRadius:'10px',border:"1px solid black",marginTop:"20px",cursor:"pointer"}}>get</button>
                <button onClick={handleDelete}
         style={{ color: "white", backgroundColor: "red", marginLeft: "8px" ,marginBottom:"30px",minWidth:'100px',height:"35px",borderRadius:'10px',border:"1px solid black",marginTop:"20px",cursor:"pointer"}}>Delete</button>
          <button onClick={handlePut}
         style={{ color: "white", backgroundColor: "green", marginLeft: "8px" ,marginBottom:"30px",minWidth:'100px',height:"35px",borderRadius:'10px',border:"1px solid black",marginTop:"20px",cursor:"pointer"}}>Put</button>
    </div>


    
    </>

   
  )
}

export default GetDeletePut