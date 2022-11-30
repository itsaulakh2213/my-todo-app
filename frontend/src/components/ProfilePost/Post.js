import React, { Fragment } from 'react'
import { Button, TextField } from '@mui/material';
import "./Post.css"
import Navbar from '../layout/Navbar';

export default function Post() {
  return (
    <Fragment>
      <Navbar/>
      <div className='MainPost'>
      <section className="Post-container">
        <h2 color="warning" >Create Todo</h2>
      <TextField
          className='input'
          id="standard-number"
          color="warning"
          label="Title"
          type="text"
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
          InputLabelProps={{
            shrink: true,
          }}
          variant="outlined"
          multiline
          minRows={4}
        />
   
    <Button className="btn" variant="contained" color="warning" >Create</Button>
      </section>
      </div>
    </Fragment>
  )
}
