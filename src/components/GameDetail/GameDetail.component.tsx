import React from "react";
import {useStyles} from "./GameDetail.styles";
import {Button, Card, CardActionArea, CardActions, CardContent, CardMedia, Typography} from "@material-ui/core";


type IProps = {
  game: any

};
const GameDetail: React.FC<IProps> = ({
  game
}) => {
  const classes = useStyles();
  console.log(game);
  return (
      <Card className={classes.root}>
        <CardActionArea>
          <CardMedia
              component="img"
              className={classes.media}
              src={game.image}
              title={game.slug}
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              {game.name}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              {game.rating}
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button size="small" color="primary">
            Learn More
          </Button>
        </CardActions>
      </Card>
  );
};

export default GameDetail;