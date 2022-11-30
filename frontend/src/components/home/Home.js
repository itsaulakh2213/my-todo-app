import React, { Fragment } from "react";
import { Button , Typography,Card } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from '@mui/icons-material/Edit'
import Navbar from "../layout/Navbar";
import "./Home.css";

export default function Home() {
  return (
    <Fragment>
      <Navbar />
      <section className="home-container">
        <Card className="card" sx={{ maxWidth: 560 }}>
              <Typography gutterBottom variant="h4" component="div" textAlign="center" className="title">
                Lizard
              </Typography>
              <Typography variant="body2" color="text.secondary" textAlign="center" className="description">
                Lizards are a widespread group of squamate reptiles, with over
                6,000 species, ranging across all continents except Antarctica
              </Typography>
          <div className="btn-container">
          <Button
            variant="contained"
            color="warning"
            endIcon={<DeleteIcon />}
            className="btn"
            margin='6px 12px'
          >
            Delete
          </Button>
          <Button
            variant="contained"
            color="warning"
            endIcon={<EditIcon />}
            className="btn"
          >
            Edit
          </Button>
          </div>
        </Card>
      </section>
    </Fragment>
  );
}
