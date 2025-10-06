import React, { useEffect, useState } from 'react';
import { Button } from '@mui/material';
import axios from 'axios'
const UseEffect3 = () => {

    const apiURL = "https://jsonplaceholder.typicode.com/users";

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

    const [data, setData] = useState(initialObj);

    const changeName = (id) => {
        setUsers(
            users.map((item) =>
                item.id === id
                    ? { ...item, name: "sai" }
                    : item
            )
        );
    };

    const [users, setUsers] = useState([])


    const [name, setName] = useState("");
    const [username, setUserName] = useState("");
    const [phone, setPhone] = useState("")
    const [email, setEmail] = useState("")
    const [editState, setEditState] = useState({
        id: null,
        isEditing: false
    })


    //   const fetchUsersApis = async (api)=>{
    //       try {
    //           const response = await fetch(api)
    //         const result =await response.json()
    //         setUsers(result)
    //            console.log(result)

    //       }catch(error){
    //         console.log("error fetching users ",error)
    //       }

    //   }


    useEffect(() => {
        axios.get(apiURL)
            .then((response) => {
                setUsers(response.data)
            })
            .catch((error) => {
                console.log("error fetching users :", error)
            })
    }, [])


    //   useEffect(()=>{
    //     fetchUsersApis(apiURL)
    //   },[])

     const handleDelete = (id) => {
    setUsers(prev => prev.filter(u => u.id !== id));
    // OPTIONAL: axios.delete(`/api/users/${id}`)
  };
    const handleChange = (e, name) => {
        if (name === "name") {
            setName(e.target.value)
        } else if (name === "username") {
            setUserName(e.target.value)
        } else if (name === "phone") {
            setPhone(e.target.value)
        } else if (name === 'email') {
            setEmail(e.target.value)
        }

    }



    const handleEdit = (id) => {
       
        let EditItem = users.find((eachItem)=>{
            return eachItem.id === id
        })
        setName(EditItem.name || "");
        setEmail(EditItem.email || "");
        setUserName(EditItem.username || "")
        setPhone(EditItem.phone || "") 
         setEditState(
            {
                ...editState,
                id: EditItem.id,
                isEditing: true
            }
        )


        console.log(EditItem)
        
    }

    console.log(editState)


    const handleSubmit = () => {

    }


    const handleFormSubmit =(e)=>{
     e.preventDefault();

     if(editState.isEditing){
        const updatedUsers = users.map((u)=>{
            return u.id === editState.id ? {...u,name,username,phone,email}:u
        })
        setUsers(updatedUsers)
        setEditState({
            id:null,
            isEditing:false
        })
     }else {
        const NextId = users.length ? Math.max(...users.map((u)=>{
            return u.id +1 
        })):1
        const newUser = {
            id:NextId,
            name,
            username,
            phone,
            email,
            website:"",
            company:{name:""}
        };

        setUsers((prev)=>{
            return [...prev,newUser]
        })
     }
     setName("");
    setUserName("");
    setPhone("");
    setEmail("");

    }

    const handleEditItem = (e) => {
        e.preventDefault();
        const newUser = users.map((eachUser)=>{
           return eachUser.id === editState.id
        })
        setUsers(newUser)

        setName("")
        setPhone("")
        setEmail("")
        setUserName("")
        setEditState({
            id:"",
            isEditing:false
        })

    }

    return (
        <div>

            <form onSubmit={handleFormSubmit} style={{ display: "flex", flexDirection: "column", gap: "10px", marginBottom: "50px" }}>
                <div>
                    <input type="text" name="name" id="name" placeholder='enter name here .... ' value={name} onChange={(e) => handleChange(e, "name")}
                        style={{ minWidth: "300px", height: "30px", borderRadius: "10px", border: "1px solid black" }} />
                </div>
                <div>
                    <input type="text" name="username" id="username" placeholder='enter userName here .... ' value={username} onChange={(e) => handleChange(e, "username")}
                        style={{ minWidth: "300px", height: "30px", borderRadius: "10px", border: "1px solid black" }} />
                </div>
                <div>
                    <input type="text" name="phone" id="phone" placeholder='enter phone here .... ' value={phone} onChange={(e) => handleChange(e, "phone")}
                        style={{ minWidth: "300px", height: "30px", borderRadius: "10px", border: "1px solid black" }} />
                </div>
                <div >
                    <input type="email" name="email" id="email" placeholder='enter email here .... ' value={email} onChange={(e) => handleChange(e, "email")}
                        style={{ minWidth: "300px", height: "30px", borderRadius: "10px", border: "1px solid black" }} />
                </div>
                <div>
                    <button type="submit" name="submit" 
                        style={{ color: "white", backgroundColor: "green", marginLeft: "8px", marginBottom: "30px", minWidth: '150px', height: "35px", borderRadius: '10px', border: "1px solid black", marginTop: "20px", cursor: "pointer" }}>{ editState.isEditing ? "SaveChanges" : "submit"}</button> 
                      


                </div>

            </form>


            <table border="1" cellPadding="5" style={{ margin: "auto" }}  >
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>username</th>
                        <th>Phone</th>
                        <th>Email</th>
                        <th>webiste</th>
                        <th>company name</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {users.map(({ email, id, name, phone, username, website, company }) => (
                        <tr key={id}>
                            <td>{name}</td>
                            <td>{username}</td>
                            <td>{phone}</td>
                            <td>{email}</td>
                            <td>{website}</td>
                            <td>{company?.name}</td>
                            <td>
                                <button style={{ color: "red" }} onClick={() => changeName(id)}>Change Name</button>
                                <Button
                                    style={{ color: "white", backgroundColor: "red", marginLeft: "8px" }}
                                    onClick={() => handleDelete(id)}
                                >
                                    Delete
                                </Button>
                                <Button
                                    style={{ color: "white", backgroundColor: "blue", marginLeft: "8px" }}
                                    onClick={() => handleEdit(id)}
                                >
                                    Edit
                                </Button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default UseEffect3;
