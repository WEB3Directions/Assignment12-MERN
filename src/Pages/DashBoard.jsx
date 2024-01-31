import { Button } from "@mui/material";
import React from "react";
import { Input_Field } from "./Input";
import { Stack, Paper } from "@mui/material";
import { useNavigate} from "react-router-dom";
import { useState } from "react";


  const DashBoard = () => {

      const [todoItems, setTodoItems] = useState({});
    
      const addItems = () => {
        setTodoItems((prevItems) => ({ ...prevItems, [Date.now()]:todoItems }));
      };
    
      const userDataHandle = (val, key) => {
        const obj = { ...todoItems };
        obj[key] = val;
        setTodoItems(obj);  
      };
    
      const deleteItems = () => {
        setTodoItems({});
      };

  const navigate = useNavigate()

  const signOut = () => {
    navigate ("/")

  };

  return (
    
    <Stack className="min-h-[100dvh] justify-center items-center">
      
      <h1>TODO LIST</h1>
      <Paper>
        <Input_Field 
          id="title"
          placeholder="Add Title"
          type="text"
          onChangeHandle={(val) => userDataHandle(val, "title")}
        />
        <Input_Field 
          id="description"
          placeholder="Add Description"
          type="text"
          onChangeHandle={(val) => userDataHandle(val, "description")}
        />
        <button onClick={addItems}>Add Items</button>
        <button onClick={deleteItems}>Delete All</button>
      </Paper>
    

    <div>
      {Object.entries(todoItems).map(([key, item]) => (
        <div key={key}>
          <h2>{item.title}</h2>
          <p>{item.description}</p>
        </div>
      ))}
    </div>
   
      

      <Button onClick={signOut}>Log out</Button>

      </Stack>
    
  );
};


export default DashBoard 