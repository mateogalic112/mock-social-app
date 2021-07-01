import { RouteComponentProps } from "react-router-dom";

import useSWR from "swr";
import { fetcherWithParam } from "../config/API";

import Layout from "../components/Layout";
import Loader from "../components/Loader";

import "../App.css";
import { makeStyles } from "@material-ui/core/styles";
import { Avatar, Box, Grid, Typography } from "@material-ui/core";
import { Athlete } from "../models/Feed";
import Header from "../components/Header";

const useStyles = makeStyles({
  imageWrapper: {
    width: "100%",
    height: 500,
  },
  media: {
    width: "100%",
    height: "100%",
    objectFit: "cover",
  },
  metaWrapper: {
    marginTop: "1rem",
  },
});

const AthleteSingle = ({ match }: RouteComponentProps<{ id: string }>) => {
  const classes = useStyles();
  const { id } = match.params;
  console.log(id);

  const { data, error } = useSWR(["/athlete", id], fetcherWithParam);

  const athlete: Athlete = data;

  console.log(data);

  if (!data && !error) return <Loader />;
  if (error) return <h1>Error</h1>;

  return (
    <>
      <Header>{athlete.name}</Header>
      <Layout>
        <Grid container spacing={5}>
          <Grid item xs={12} md={6}>
            <img
              alt={athlete.name}
              src={athlete.avatar}
              className={classes.media}
            />
          </Grid>

          <Grid item xs={12} md={6}>
            <Typography gutterBottom variant="h5" component="h2">
              {athlete.name}
            </Typography>
            <Typography gutterBottom variant="subtitle1" component="h4">
              {athlete.club}
            </Typography>
            <Typography gutterBottom variant="subtitle2" component="h5">
              {athlete.age} Y.O.
            </Typography>
            <Box display="flex" alignItems="center">
              <Avatar src={athlete.country.icon} />
              <Box ml={2}></Box>
              <Typography variant="body1">{athlete.country.name}</Typography>
            </Box>
          </Grid>
        </Grid>
      </Layout>
    </>
  );
};

export default AthleteSingle;
