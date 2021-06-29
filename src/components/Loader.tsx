import React from "react";

import { Box, CircularProgress } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  box: {
    height: "100vh",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
});

const Loader: React.FC = () => {
  const classes = useStyles();

  return (
    <Box className={classes.box} component="div">
      <CircularProgress />
    </Box>
  );
};

export default Loader;
