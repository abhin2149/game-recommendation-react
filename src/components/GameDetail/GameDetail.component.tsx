import React from "react";
import {useStyles} from "./GameDetail.styles";
import {Button, Card, CardActionArea, CardActions, CardContent, CardMedia, Typography} from "@material-ui/core";
import {Game} from "../../types/game";
import {saveLikedGamesApi} from "../../services/save-game-api";

/**
 * * Component to show game details on click
 */
type IProps = {
  game: Game
};

const GameDetail: React.FC<IProps> = ({
  game
}) => {
  const classes = useStyles();

  const likeGame = () => {
    let formData = new FormData();
    formData.append('id', game.id);
    formData.append('name', game.name);
    formData.append('rating', game.rating);
    formData.append('date', game.released);

    saveLikedGamesApi(formData)
        .then((_response: any) =>{
        })
        .catch((err: any) => {
          console.log(err);
        });
  };

  return (
      <Card className={classes.modalStyle}>
        <CardActionArea>
          <CardMedia
              component="img"
              className={classes.media}
              src={game.background_image}
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
          <Button size="small" color="primary" variant="contained" onClick={likeGame}>
            Like
          </Button>
        </CardActions>
      </Card>
  );
};

export default GameDetail;