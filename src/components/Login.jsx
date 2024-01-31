import { Stack, Paper, Typography, Button } from "@mui/material";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Credentials_Data from "../Utils/Credentials_Data";
import Input_Component from "./Input_Component";

const Login = () => {
  // let userdata = {}
  const [userData, setUserData] = useState({});

  const navigate = useNavigate();

  const onChangeHandle = (e) => {
    const { value, id } = e.target;
    // console.log(userData);
    // console.log(value, id);

    setUserData({ ...userData, [id]: value });
    // ...
  };

  const submitHandle = (e) => {
    e.preventDefault();
    const { username, password } = userData;
    if (
      username === Credentials_Data.username &&
      password === Credentials_Data.password
    ) {
      // alert("correct credentials");
      localStorage.setItem("isLoggedIn", true);
      navigate("/");
    } else {
      alert("Invalid credentials!");
    }

    // credentials_data
  };
  return (
    <Stack className="min-h-[100dvh] justify-center items-center">
      <div className="max-w-md">
        <div className="justify-center flex items-center"><h1><b>LOGIN FOR TODO APP</b></h1></div> <br/><br/><br/>
        
        <Paper
          component="form"
          onSubmit={submitHandle}
          elevation={10}
          sx={{ px: 2, py: 3 }}
        >
          <Typography align="center" fontWeight="bold" variant="h5">
            Login
          </Typography>
          {/* <Stack spacing={3}> */}
          <Input_Component 
            placeholder="Enter Username"
            type="text"
            id="username"
            onChange={onChangeHandle}
            required={true}
          />
          <Input_Component 
            placeholder="Enter Password"
            type="password"
            id="password"
            onChange={onChangeHandle}
            required={true}
          />

          <Button
            // onClick={submitHandle}
            type="submit"
            sx={{ width: "100%", mt: 2 }}
            variant="contained"
            color="success"
          >
            Submit
          </Button>
          {/* </Stack> */}
        </Paper>
      </div>
    </Stack>
  );
};

export { Login };

























