import React, { Fragment, useState, useEffect } from "react";
import { Button, TextField, LinearProgress} from "@mui/material";
import "./Login.css";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {LoginUser, addToken } from "../reducers/user";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { loading, message, error, token } = useSelector((state) => state.user);

  useEffect(() => {
    dispatch(addToken());
  }, [dispatch]);

  if (token) {
    navigate("/");
  }

  const Login = () => {
      dispatch(LoginUser({ email, password }));
  };
  return (
    <Fragment>
      {loading && <LinearProgress color="inherit" />}
      <div className='MainLogin'>
      <section className="Login-container">
        <h2 color="warning" >Login Account</h2>
        <div>
            {message ? (
              <p className="input-success">{message}</p>
            ) : error ? (
              <p className="input-alert">{error}</p>
            ) : (
              ""
            )}
          </div>
      <TextField
          className='input'
          id="standard-number"
          color="warning"
          label="Email  Address"
          type="email"
          value={email}
            onChange={(e) => setEmail(e.target.value)}
          InputLabelProps={{
            shrink: true,
          }}
          variant="standard"
        />
      <TextField
          className='input'
          id="standard-number"
          color="warning"
          label="Password"
          type="password"
          value={password}
            onChange={(e) => setPassword(e.target.value)}
          InputLabelProps={{
            shrink: true,
          }}
          variant="standard"
        />
    
    <Button className="btn" variant="contained" color="warning" onClick={()=>Login()} >Submit</Button>
    <p className='LoginP'>You Have not <span className="LoginBtn" onClick={()=>navigate("/register")}>Register Account</span></p>
      </section>
      </div>
    </Fragment>
  )
}