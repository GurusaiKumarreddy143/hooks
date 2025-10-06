import React,{useState} from 'react'

const UseState2 = () => {

let initialObj = {
    name:"gurusai",
    age:27,
    phone:9100949208,
    email : "basamgurusai123@gmail.com"
}


    const [data,setData]= useState(initialObj)

    const changeName =()=>{
        setData({
            ...data,
            name:"sai",
        })
    }

    // const handleDelete = (id)=>{
    //     data.filter((eachObj)=>{
    //       return eachObj.id !== id
    //     })
    // }

  return (
    <div>
        <p>{data.name}</p>
        <p>name:{data.age}</p>
        <p>phone:{data.phone}</p>
        <button style={{color:"red"}} onClick={changeName}>changeName</button>
        {/* <Button style={{color:"white",backgroundColor:"red"}} onClick={()=>handleDelete(id)}>delete</Button> */}
    </div>
  )
}

export default UseState2
