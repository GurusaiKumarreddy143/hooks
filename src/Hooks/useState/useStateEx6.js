import React, { useState } from 'react';
import { Button } from '@mui/material';

const UseState6 = () => {

  const intialList = [
    {
      text: "sai",
      id: "jejjjeejjeejk"

    },
    {
      text: "sai",
      id: "jejjjeej"

    },
    {
      text: "sai",
      id: "jejjjeejjeejk"

    }

  ]

  // states for all 

  const [message, setMessage] = useState({
    text: "",
    id: "",
  })

  const [list, SetList] = useState([])


  const [editItem,setEditItem] = useState({
    id:"",
    isEditing:false
  
  })
  
  const [error, setError] = useState("");

 




  // change input in form 

  const handleChange = (e) => {
    setMessage({


      ...message,
      text: e.target.value
    })
  }

  // submit function 

   const handleSubmit =(e)=>{
      e.preventDefault()

       if (message.text.trim().length === 0) {
    setError("Please enter something before submitting");
    return 
  }

  
       setError("");

      SetList([...list,{
        text:message.text,
        id:new Date().getTime().toString()
      }])
      setMessage({
        id:"",
        text:""
      })

   }


   // delete function 

   const handleDelete =(id)=>{
          let newTodo = list.filter((eachItem)=>{
            return eachItem.id !== id
          })
          SetList(newTodo)

   }

// handle edit 


   const handleEdit =(id)=>{

    if(message.text.trip().length === 0){
      setError("please check empty message not allowed")
      return 
    }

    setEditItem({
      ...editItem,
      id:id,
      isEditing:"true"
    })
  let editableItem= list.find((eachItem)=>{
    return eachItem.id === id
  })
  setMessage({
    id:editableItem.id,
    text:editableItem.text
  })
   }

// handle edit submit 


   const EditItem = (e)=>{
        e.preventDefault()
       let  newTodo = list.map((eachItem)=>{
          if(eachItem.id === editItem.id){
            return {
              text:message.text,
              id:editItem.id
            }
          }else{
            return eachItem
          }
        })

        SetList(newTodo)

        setMessage({
          id:"",
          text:""
        })
        setEditItem({
          id:"",
          isEditing:false
        })
   }



  return (
    <div>
      <form>
        <input type="text" name="message" placeholder='enter text here  .....' id='message' value={message.text} onChange={handleChange}
          style={{ minWidth: "300px", height: "30px", borderRadius: "10px", border: "1px solid black" }} />
         <div>
           {error && <p style={{ color: "red" }}>{error}</p>}
         </div>
            {editItem.isEditing ?  
             <button type="submit" name="submit" onClick={EditItem}
          style={{ color: "white", backgroundColor: "green", marginLeft: "8px", marginBottom: "30px", minWidth: '150px', height: "35px", borderRadius: '10px', border: "1px solid black", marginTop: "20px" ,cursor:"pointer" }}>Edit</button>
          : 
           <button type="submit" name="submit" onClick={handleSubmit}
          style={{ color: "white", backgroundColor: "green", marginLeft: "8px", marginBottom: "30px", minWidth: '150px', height: "35px", borderRadius: '10px', border: "1px solid black", marginTop: "20px",cursor:"pointer" }}>submit</button> }
      
      </form>
      {list.length === 0 && <p>there is no list , please add list if you want through above send message </p>}


      <ul>
        {
          list.map((eachObj) => {
            const { id, text } = eachObj;
            return <li key={id}>
              <span>{text}</span>
              
             <button type= "submit" name = "edit"  onClick={()=>handleEdit(id)}                  
                 style={{ color: "white", backgroundColor: "blue", marginLeft: "8px" ,marginBottom:"30px",minWidth:'100px',height:"35px",borderRadius:'10px',border:"1px solid black",marginTop:"20px",cursor:"pointer"}}>edit</button>
                 <button type= "submit" name = "submit" onClick={()=>handleDelete(id)}                  
                 style={{ color: "white", backgroundColor: "red", marginLeft: "8px" ,marginBottom:"30px",minWidth:'100px',height:"35px",borderRadius:'10px',border:"1px solid black",marginTop:"20px",cursor:"pointer"}}>delete</button>

            </li>


          })
        }
      </ul>

    </div>
  );
};

export default UseState6;
