   
   
   

   
   
   export const handleGet = async ()=>{
       let res =  await fetch("http://localhost:3000/products")
        let data = await res.json() 
        return data;
    }

     export const handleUsers = async ()=>{
       let res =  await fetch("https://jsonplaceholder.typicode.com/users")
        let data = await res.json() 
        return data;
    }



   export const handleDelete = async (id)=>{
        const res = await fetch(`http://localhost:3000/products/${id}`,{
            method:"DELETE",
          
        })
        return res;
    }


    

    