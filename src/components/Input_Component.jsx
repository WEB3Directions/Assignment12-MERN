import { TextField } from '@mui/material';
import React from 'react'

const Input_Component = (props) => {

 const {type, id, placeholder, username, password, required, onChange} = props;


  return (
    
   <TextField
        sx={{ width: "100%", mt: 2 }}
        type={type}
        id= {id}
        placeholder={placeholder}
        username= {username}
        password= {password}
        required= {required}
        onChange={onChange}
        />

        
      
    
  )
}

export default Input_Component
