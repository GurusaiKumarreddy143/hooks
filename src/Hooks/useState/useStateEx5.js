import React, { useState } from 'react';
import { Button } from '@mui/material';

const UseState5 = () => {

    const [password,setPassword] = useState("")
    const [userName,setUserName]=useState("")


    const handleChange =(e,name)=>{
        if(name === "userName"){
            setUserName(e.target.value)
        } else if (name==="password"){
            setPassword(e.target.value)
        }
    }


    const handleSubmit =  (e)=>{
    e.preventDefault();

        let obj = {
            "userName":userName,
            "password":password,
        }
        console.log(obj)
        setPassword("")
        setUserName("")


    }
  
  return (
    <div>
        <form style={{display:"flex",flexDirection:"column",gap:"10px"}} onSubmit={handleSubmit}>
            <div >
                <input type= "text" name = "userName" placeholder='enter your userName here .....' id='userName' value={userName} onChange={(e)=>handleChange(e,"userName")}
                style={{minWidth:"300px",height:"30px",borderRadius:"10px",border:"1px solid black"}} />
            </div>

             <div>
                <input type= "password" name = "password" placeholder='enter your password here .....' id="password" value={password}  onChange={(e)=>handleChange(e,"password")}
                style={{minWidth:"300px",height:"30px",borderRadius:"10px",border:"1px solid black"}}/>
            </div>
            
             <div>
                <button type= "submit" name = "submit"                   
                 style={{ color: "white", backgroundColor: "green", marginLeft: "8px" ,marginBottom:"30px",minWidth:'150px',height:"35px",borderRadius:'10px',border:"1px solid black",marginTop:"20px"}}>submit</button>
            </div>


        </form>
    </div>
  );
};

export default UseState5;
