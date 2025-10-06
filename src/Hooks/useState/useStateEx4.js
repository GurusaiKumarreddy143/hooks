import React, { useState } from "react";
import { Button } from "@mui/material";

const UseState4 = () => {


    const [showdata,setShowData] = useState(false)

    const handleChange = ()=>{
        setShowData(!showdata)
    }


  return (
    <div>
       
        {showdata ? 
         <p style ={{border:"1px solid black",maxWidth:"400px",margin:"auto",padding:"50px",marginTop:"30px"}}>show content here </p>
         :<p style ={{border:"1px solid black",maxWidth:"400px",margin:"auto",padding:"50px",marginTop:"30px"}}>hide your content if you want click abover button show </p> }
         <Button  sx={{ background: "green", color: "white", fontSize: "10px", margin: "30px" }} onClick={handleChange}>{showdata ? "hide":"show"}</Button>
       
       
    </div>
  );
};

export default UseState4;
