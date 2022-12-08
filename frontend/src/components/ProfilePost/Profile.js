import React, { Fragment, useEffect } from "react";
import Navbar from "../layout/Navbar";
import LogoutIcon from "@mui/icons-material/Logout";
import "./profile.css";
import { Button, Typography, Card } from "@mui/material";
import { UserDetail, removeToken } from "../reducers/user";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
export default function Profile() {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.user.data);
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(UserDetail());
  }, [dispatch]);
  return (
    <Fragment>
      <Navbar />
      <section className="Profile-container">
        {data.map((item) => {
          return (
            <Card className="card" sx={{ maxWidth: 560 }} key={item._id}>
              <h2 color="warning">Account details</h2>
              <Typography
                variant="body2"
                component="div"
                className="btn-container"
              >
                {item.name}
              </Typography>
              <Typography
                variant="body2"
                color="text.secondary"
                textAlign="center"
                className="btn-container"
              >
                {item.email}
              </Typography>
              <Typography
                variant="body2"
                color="text.secondary"
                textAlign="center"
                className="btn-container"
              >
                {item.number}
              </Typography>
              <div>
                <Button
                  variant="contained"
                  color="warning"
                  endIcon={<LogoutIcon />}
                  className="btn"
                  margin="6px 12px"
                  onClick={() => {
                    dispatch(removeToken());
                    navigate("/login");
                  }}
                >
                  Log Out
                </Button>
              </div>
            </Card>
          );
        })}
      </section>
    </Fragment>
  );
}
