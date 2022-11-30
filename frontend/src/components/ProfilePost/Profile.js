import React, { Fragment } from "react";
import Navbar from "../layout/Navbar";
import LogoutIcon from '@mui/icons-material/Logout';
import "./profile.css";
import { Button, Typography, Card } from "@mui/material";
export default function Profile() {
  return (
    <Fragment>
      <Navbar />
      <section className="Profile-container">
        <Card className="card" sx={{ maxWidth: 560 }}>
             <h2 color="warning" >Account details</h2>
              <Typography  variant="body2" component="div" className="btn-container">
                name
              </Typography> 
              <Typography variant="body2" color="text.secondary" textAlign="center" className="btn-container">
                amandeepaulakh@gmail.com
              </Typography>
              <Typography variant="body2" color="text.secondary" textAlign="center" className="btn-container">
                9991301118
              </Typography>
          <div >
          <Button
            variant="contained"
            color="warning"
            endIcon={<LogoutIcon />}
            className="btn"
            margin='6px 12px'
          >
            Log Out
          </Button>
          </div>
        </Card>
      </section>
    </Fragment>
  );
}