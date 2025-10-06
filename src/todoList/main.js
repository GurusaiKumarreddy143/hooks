import React,{useState} from 'react'
import Form from './form'
import Table from './table'
const Main = () => {
 const [editState, setEditState] = useState({
        id:null,
        isEdit:false,
      });
    
  return (
    <div>
        <p>main</p>
        <Form  editState={editState} setEditState={setEditState}/>
        <hr style={{width:"70%"}} />
        <Table editState={editState} setEditState={setEditState}  />
    </div>
  )
}

export default Main