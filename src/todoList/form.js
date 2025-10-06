import React,{useState} from 'react'

const Form = (props) => {

    const [formData, setFormData] = React.useState({
        name: "",
        catagory: "",
        price: "",
        stock: ""
    })

     const [error, setError] = useState("");


    const handleChange = (e, name) => {
        if (name === "name") {
            setFormData({
                ...formData,
                name: e.target.value
            })
        } else if (name === "catagory") {
            setFormData({
                ...formData,
                catagory: e.target.value
            })
        } else if (name === "price") {
            setFormData({
                ...formData,
                price: e.target.value
            })
        } else if (name === "stock") {
            setFormData({
                ...formData,
                stock: e.target.value
            })
        }
    }


    const handleCancel =(e)=>{
        e.preventDefault();
        if(props.editState.isEdit){
            props.setEditState({
                id:null,
                isEdit:false
            })
        }else if(!props.editState.isEdit){
            setFormData({
                name: "",
                catagory: "",
                price: "",
                stock: ""
            })
        }
    }


    const handleSubmit = (e) => {
        e.preventDefault();
     if(!formData.name.trim()){
        setError("Product name is required");
        return;
     }
     setError()
    }
    return (
        <div>
            <div>
                <h2 style={{ color: "blue", fontSize: "27px" }}>Create new Product</h2>
                <hr style={{ width: "50%" }} />
            </div >
            <div  style ={{display: "flex",
    justifyContent: "center",
    alignItems: "center",
    minHeight: "100vh"   // full height of screen >
            }}>
                <form style={{
    border: "1px solid #ddd",
    padding: "20px",
    borderRadius: "10px",
    width: "500px",
    margin: "20px auto", // centers the form horizontally
    boxShadow: "0 4px 10px rgba(0, 0, 0, 0.15)", // soft shadow
    backgroundColor: "#fff" // optional, makes it pop
  }}>
                    <div style={{ display: "flex", flexDirection: "column", gap: "10px", marginBottom: "20px" }}>

                        <div  >
                            <label style={{ fontSize: "16px", fontWeight: "400", marginRight: "10px", }}>Product Name:</label>
                        </div>
                        <div>
                            <input type="text" name="name" placeholder='enter your product name .....' id='name' value={formData.name} required onChange={(e) => handleChange(e, "name")}
                                style={{ minWidth: "300px", height: "30px", borderRadius: "10px", border: "1px solid black" }} />
                        </div>
                        {error && <p style={{ color: "red", marginTop: "5px" }}>{error}</p>}

                    </div>

                    <div style={{ display: "flex", flexDirection: "column", gap: "10px", marginBottom: "20px" }}>
                        <div>
                            <label style={{ fontSize: "16px", fontWeight: "400", marginRight: "10px" }}>Catagory:</label>
                        </div>
                        <div>
                            <input type="text" name="category" placeholder='enter catagory here .....' id="catagory" required   value={formData.catagory} onChange={(e) => handleChange(e, "catagory")}
                                style={{ minWidth: "300px", height: "30px", borderRadius: "10px", border: "1px solid black" }} />
                        </div>
                    </div>
                    <div style={{ display: "flex", flexDirection: "column", gap: "10px", marginBottom: "20px" }}>
                        <div>
                            <label style={{ fontSize: "16px", fontWeight: "400", marginRight: "10px" }}>Price:</label>
                        </div>
                        <div>
                            <input type="number" name="price" placeholder='enter price here .....' id="price" value={formData.price} required onChange={(e) => handleChange(e, "price")}
                                style={{ minWidth: "300px", height: "30px", borderRadius: "10px", border: "1px solid black" }} />
                        </div>
                    </div>

                    <div style={{ display: "flex", flexDirection: "column", gap: "10px", marginBottom: "20px" }}>
                        <div>
                            <label style={{ fontSize: "16px", fontWeight: "400", marginRight: "10px" }}>stock:</label>
                        </div>
                        <di>
                            <input type="number" name="stock" placeholder='enter stock here .....' id="stock" value={formData.stock}  required onChange={(e) => handleChange(e, "stock")}
                                style={{ minWidth: "300px", height: "30px", borderRadius: "10px", border: "1px solid black" }} />
                        </di>
                    </div>


                    <div>
                        <button type="submit" name="submit" onClick={handleSubmit}
                            style={{ color: "white", backgroundColor: "green", marginLeft: "8px", marginBottom: "30px", minWidth: '150px', height: "35px", borderRadius: '10px', border: "1px solid black", marginTop: "20px",cursor:"pointer" }}>{props.editState.isEdit ? "Save": "submit"}</button>
                            <button type="submit" name="submit" onClick = {handleCancel}
                            style={{ color: "white", backgroundColor: "red", marginLeft: "8px", marginBottom: "30px", minWidth: '150px', height: "35px", borderRadius: '10px', border: "1px solid black", marginTop: "20px",cursor:"pointer" }}>cancel</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Form