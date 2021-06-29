import React from "react";

import { useLocation } from "react-router-dom";

import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import {
  AppBar,
  Toolbar,
  Button,
  IconButton,
  Typography,
} from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      flexGrow: 1,
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
      default:
        return "Feed";
    }
  };

  return (
    <header>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="menu"
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" className={classes.title}>
            {displayPageName()}
          </Typography>
          <Button color="inherit">User | Login</Button>
        </Toolbar>
      </AppBar>
    </header>
  );
};

export default Header;
