import React from "react";

import { Container } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Header from "./Header";

const useStyles = makeStyles({
  container: {
    margin: "5rem auto",
  },
});

const Layout: React.FC = ({ children }) => {
  const classes = useStyles();

  return (
    <>
      <Header />
      <Container maxWidth="sm" className={classes.container}>
        <main>{children}</main>
      </Container>
    </>
  );
};

export default Layout;
