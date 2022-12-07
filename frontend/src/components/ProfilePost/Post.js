import React, { Fragment, useState } from 'react'
import { Button, TextField, LinearProgress} from '@mui/material';
import "./Post.css"
import Navbar from '../layout/Navbar';
import { useDispatch, useSelector } from "react-redux";
import { createTodo } from "../reducers/todo";

export default function Post() {
  const [title, setTitle] = useState('')
  const [des, setDes] = useState('')
  const {loading} = useSelector( state => state.todo)
  const dispatch = useDispatch()
  const post = ()=>{
    dispatch(createTodo({title, description:des}))
  }
  
  return (
    <Fragment>
      <Navbar/>
      {loading && <LinearProgress color="inherit" />}
      <div className='MainPost'>
      <form  className="Post-container">
        <h2 color="warning" >Create Todo</h2>
      <TextField
          className='input'
          id="standard-number"
          color="warning"
          label="Title"
          type="text"
          value={title}
          onChange={(e)=>setTitle(e.target.value)}
          InputLabelProps={{
            shrink: true,
          }}
          variant="standard"
        />
        <TextField
          className='input'
          color="warning"
          label="description"
          type="text"
          value={des}
          onChange={(e)=>setDes(e.target.value)}
          InputLabelProps={{
            shrink: true,
          }}
          variant="outlined"
          multiline
          minRows={4}
        />
   
    <Button className="btn" onClick={()=>post()}  variant="contained" color="warning"  >Create</Button>
      </form>
      </div>
    </Fragment>
  )
}
