import React, { Fragment, useState } from "react";
import { Button, TextField } from "@mui/material";
import { useDispatch } from "react-redux";
import "./Edit.css";
import { useNavigate, useParams } from "react-router-dom";
import ClearIcon from '@mui/icons-material/Clear';
import { editTodo } from "../reducers/todo"
export default function Edit() {
  const [title, setTitle] = useState("");
  const [des, setDes] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate()
  const { id } = useParams()
  const post = () => {
    dispatch(editTodo(id,{}));
    navigate("/")
  };
  return (
    <Fragment>
      <div className="main-edit">
        <section className="edit-container">
          <div className="clear" onClick={()=>navigate("/")}><ClearIcon/></div>
          <h2 color="warning">Update Todo</h2>
          <TextField
            className="input"
            id="standard-number"
            color="warning"
            label="Title"
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            InputLabelProps={{
              shrink: true,
            }}
            variant="standard"
          />
          <TextField
            className="input"
            color="warning"
            label="description"
            type="text"
            value={des}
            onChange={(e) => setDes(e.target.value)}
            InputLabelProps={{
              shrink: true,
            }}
            variant="outlined"
            multiline
            minRows={4}
          />

          <Button
            className="btn"
            variant="contained"
            color="warning"
            onClick={() => post()}
          >
            Update
          </Button>
        </section>
      </div>
    </Fragment>
  );
}
