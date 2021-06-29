import React from "react";

import { useLocation, Link } from "react-router-dom";

import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import { AppBar, Toolbar, Typography } from "@material-ui/core";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    title: {
      marginRight: "auto",
    },
  })
);

const Header: React.FC = () => {
  const classes = useStyles();

  let location = useLocation();

  const displayPageName = () => {
    switch (location.pathname) {
      case "/athletes":
        return "Athletes";
      case "/":
        return "Feed";
      default:
        return "Single Athlete";
    }
  };

  return (
    <header>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            {displayPageName()}
          </Typography>
          <nav>
            <ul>
              <li>
                <Link to="/">Feed</Link>
              </li>
              <li>
                <Link to="/athletes">Athletes</Link>
              </li>
            </ul>
          </nav>
        </Toolbar>
      </AppBar>
    </header>
  );
};

export default Header;
