import React from "react";

import { Feed } from "../models/Feed";

import {
  Card,
  CardMedia,
  CardActionArea,
  CardContent,
  Typography,
  CardActions,
  CardHeader,
  Avatar,
  IconButton,
  Box,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import FavoriteIcon from "@material-ui/icons/Favorite";

import useOnScreen from "../hooks/useOnScreen";

type FeedCardProps = {
  feed: Feed;
  screenOffset: string;
};

const useStyles = makeStyles({
  root: {
    maxWidth: 325,
    margin: "2rem auto",
  },
  media: {
    height: 250,
    objectFit: "cover",
  },
  metaWrapper: {
    marginTop: "1rem",
  },
});

const FeedCard: React.FC<FeedCardProps> = ({ feed, screenOffset }) => {
  const classes = useStyles();

  const ref: React.RefObject<HTMLDivElement> = React.useRef(null);

  const onScreen = useOnScreen(ref, screenOffset);

  if (onScreen) {
    console.log(feed.id);
  }

  console.log(feed.athlete.avatar);

  return (
    <Card className={classes.root} ref={ref}>
      <CardHeader
        avatar={
          <Avatar aria-label="author">{feed.author.name.charAt(0)}</Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title={feed.author.name}
        subheader={feed.createdBefore}
      />
      <CardActionArea>
        <CardMedia
          component="video"
          poster={feed.video.poster}
          src={feed.video.url}
          controls={onScreen}
          className={classes.media}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {feed.sportGroup.name}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {feed.description}
          </Typography>
          <Box display="flex" className={classes.metaWrapper}>
            <Avatar alt={feed.athlete.name} src={feed.athlete.country.icon} />
            <Box mx={2}>
              <Typography variant="body1">{feed.athlete.name}</Typography>
              <Typography variant="body2" color="textSecondary">
                {feed.athlete.sport.name}
              </Typography>
            </Box>
          </Box>
        </CardContent>
      </CardActionArea>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton>
        <Typography variant="body2" color="textSecondary" component="p">
          {feed.views}
        </Typography>
      </CardActions>
    </Card>
  );
};

export default FeedCard;
