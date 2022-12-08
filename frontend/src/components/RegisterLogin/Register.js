import React, { Fragment, useState, useEffect } from "react";
import { Button, TextField, LinearProgress } from "@mui/material";
import "./Register.css";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { RegisterUser, addToken } from "../reducers/user";

export default function Register() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [number, setNumber] = useState("");
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

  const Register = () => {
    dispatch(RegisterUser({ name, email, number, password }));
  };

  return (
    <Fragment>
      {loading && <LinearProgress color="inherit" />}
      <div className="MainRegister">
        <section className="Register-container">
          <h2 color="warning">Register Account</h2>
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
            className="input"
            color="warning"
            label="Name"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            InputLabelProps={{
              shrink: true,
            }}
            variant="standard"
          />
          <TextField
            className="input"
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
            className="input"
            color="warning"
            label="Number"
            type="number"
            value={number}
            onChange={(e) => setNumber(e.target.value)}
            InputLabelProps={{
              shrink: true,
            }}
            variant="standard"
          />
          <TextField
            className="input"
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
          <Button
            className="btn"
            variant="contained"
            color="warning"
            onClick={() => Register()}
          >
            Submit
          </Button>
          <p className="RegisterP">
            if you are{" "}
            <span className="RegisterBtn" onClick={() => navigate("/login")}>
              Login Account
            </span>
          </p>
        </section>
      </div>
    </Fragment>
  );
}
