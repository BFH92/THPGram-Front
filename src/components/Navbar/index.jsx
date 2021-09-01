import React from "react";
import { Link } from "react-router-dom";
//import { useSelector, useDispatch } from "react-redux";
//import { SaveCurrentToken } from "../../Redux";
//import Cookies from "js-cookie";
//import "./index.css";
//import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";

const index = () => {
  const login = false;
  return (
    <div>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6">
            <Link className="a" to="/">
              Home
            </Link>
          </Typography>
          {login ? (
            <>
              <div>
                <Link className="a" to="/profile">
                  Profile
                </Link>
              </div>
              ----
              <div>
                <Link className="a">Logout</Link>
              </div>
            </>
          ) : (
            <>
              <div>
                <Link className="a" to="/login">
                  Login
                </Link>
              </div>
              /
              <div>
                <Link className="a" to="/signup">
                  Signup
                </Link>
              </div>
            </>
          )}
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default index;
