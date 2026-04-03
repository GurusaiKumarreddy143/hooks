
import React from 'react' 

const initialState = {
    name : 'gurusai',
    age : 24,
    email: "basamgurusai34@gamil.com"
}

export const userContext = React.createContext();

export const UserContextProvider = ({children})=>{

   return <userContext.Provider value={initialState}>{children}</userContext.Provider>

}