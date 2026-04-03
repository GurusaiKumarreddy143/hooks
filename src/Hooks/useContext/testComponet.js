

import React,{useContext} from 'react' 
import { userContext } from '../../context/userContext/userContext'

const TestComponet = ()=>{
  const data = useContext(userContext)
  console.log(data)
  const {name,age,email} = data;
    return (
        <div>
            <p>{name}</p>
            <p>{age}</p>
            <p>{email}</p>
        </div>
    )
}

export default TestComponet;