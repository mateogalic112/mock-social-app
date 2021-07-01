import React from "react";

import { Link } from "react-router-dom";

import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import { AppBar, Toolbar, Typography } from "@material-ui/core";
import Search from "./Search";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    title: {
      marginRight: "auto",
    },
  })
);

const Header: React.FC = ({ children }) => {
  const classes = useStyles();

  return (
    <header>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            {children}
          </Typography>

          <Search />

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
