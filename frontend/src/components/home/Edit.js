import React, { Fragment, useState, useEffect } from "react";
import { Button, TextField } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import "./Edit.css";
import { Link, useParams } from "react-router-dom";
import ClearIcon from "@mui/icons-material/Clear";
import { editTodo, GetSingleTodo } from "../reducers/todo";
export default function Edit() {
  const dispatch = useDispatch();
  const { id } = useParams();
  useEffect(() => {
    fetchUser();
  },[dispatch]);
  const fetchUser = async () => {
    await dispatch(GetSingleTodo(id));
  };
  const {data } = useSelector((state) => state.todo);
  const [ title, setTitle] = useState(data.title);
  const [ description, setDescription] = useState(data.description)
  
  const post = ()=>{
    dispatch(editTodo( id , { title, description}))
  }
  
  return (
    <Fragment>
      <div className="main-edit">
 <section className="edit-container">
          <Link className="clear" to="/">
            <ClearIcon />
          </Link>
          <h2 color="warning">Update Todo</h2>
          <TextField
            className="input"
            id="standard-number"
            color="warning"
            label="Title"
            type="text"
            value={title}
            onChange={(e) => setTitle( e.target.value )}
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
            value={description }
            onChange={(e) => setDescription( e.target.value )}
            InputLabelProps={{
              shrink: true,
            }}
            variant="outlined"
            multiline
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
