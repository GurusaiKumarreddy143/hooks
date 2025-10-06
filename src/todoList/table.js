import React, { useEffect, useState } from 'react';
import { Button } from '@mui/material';
import { handleGet,handleDelete} from '../apis/productAPIs';

const Table = (props) => {
  let initialObj = [
    {
      id: 1,
      name: "sai",
      age: 27,
      phone: 9100949208,
      email: "basamgurusai123@gmail.com"
    },
    {
      id: 2,
      name: "gurusai",
      age: 27,
      phone: 9100949208,
      email: "basamgurusai123@gmail.com"
    },
    {
      id: 3,
      name: "gurusai",
      age: 27,
      phone: 9100949208,
      email: "basamgurusai123@gmail.com"
    }
  ];

  const [data, setData] = useState([]);

 


      const fetchData = async()=>{
        // const res = await fetch("http://localhost:3000/products")
        // const data = await res.json()
        const result = await handleGet();
        setData(result) 
        //  setData(data) 
    }

  useEffect(()=>{


    fetchData();
     
  },[])

  console.log(data)
  const changeName = (id) => {
    setData(
      data.map((item) =>
        item.id === id
          ? { ...item, name: "sai" }
          : item
      )
    );
  };


  const handleEdit =(id)=>[
    props.setEditState({
        id:id,
        isEdit:true
    })
  ]

  

  return (
    <div>
      <div style ={{display:"flex",flexDirection:"row",justifyContent:"space-between",alignItems:"center",width:"70%",margin:"auto"}}>
          <div>
         <h2 style={{ color: "blue", fontSize: "27px"}}>product list in our website</h2>
        
        </div>
        <div>
              <button type="submit" name="submit"
            style={{ color: "white", backgroundColor: "green", marginLeft: "8px", marginBottom: "30px", minWidth: '150px', height: "35px", borderRadius: '10px', border: "1px solid black", marginTop: "20px" }}>Add new product </button>
        </div>
        
        

        </div>
        <hr style={{width:"75%",marginBottom:"30px"}}/>

      <table border="1" cellPadding="5" style={{margin:"auto"}}  >
        <thead>
          <tr>
            <th>product Name</th>
            <th>Catagory</th>
            <th>Price</th>
            <th>stock</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {data.map(({ id, name, category, price, stock}) => (
            <tr key={id}>
              <td>{name}</td>
              <td>{category}</td>
              <td>{price}</td>
              <td>{stock}</td>
              <td>
 <Button
                  style={{ color: "white", backgroundColor: "blue", marginLeft: "10px",width:"70px" }}
                  onClick={()=>handleEdit(id)}
                >
                  Edit
                </Button>
                <Button
                  style={{ color: "white", backgroundColor: "red", marginLeft: "8px" ,width:"70px"}}
                  onClick={ async ()=>{
                     await handleDelete(id);
                    setData(data.filter((item)=>item.id !== id))


                  }}
                >
                  Delete
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
