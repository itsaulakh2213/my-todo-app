import React, { Fragment, useEffect } from "react";
import { Button , Typography,Card } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from '@mui/icons-material/Edit'
import Navbar from "../layout/Navbar";
import "./Home.css";
import { useSelector, useDispatch } from "react-redux";
import { deleteTodo, getAllTodo} from "../reducers/todo"

import { Link } from "react-router-dom";

export default function Home() {
  const dispatch = useDispatch()
  const  { data }  = useSelector( state => state.todo )
  
  useEffect(() => {
   dispatch(getAllTodo())  
 }, [dispatch] )
 
  return (
    <Fragment>
      <Navbar />
      <section className="home-container">
        { data.map( item => {
          return(
            <Card className="card" sx={{ maxWidth: 560 }} key={item._id}>
            <Typography gutterBottom variant="h4" component="div" textAlign="center" className="title">
              {item.title}
            </Typography>
            <Typography variant="body2" color="text.secondary" textAlign="center" className="description">
              {item.description}
            </Typography>
        <div className="btn-container">
        <Button
          variant="contained"
          color="warning"
          endIcon={<DeleteIcon />}
          className="btn"
          margin='6px 12px'
          onClick={() => dispatch(deleteTodo(item._id))}
        >
          Delete
        </Button>
        <Link to="/todo/update/:id" className="link">Edit <EditIcon /></Link>
        </div>
      </Card>)
        
        })}
        
      </section>
    </Fragment>
  );
}
