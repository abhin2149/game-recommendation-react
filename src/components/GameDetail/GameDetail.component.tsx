import React from "react";
import {useStyles} from "./GameDetail.styles";
import {Typography} from "@material-ui/core";


type IProps = {
  game: any

};
const GameDetail: React.FC<IProps> = ({
  game
}) => {
  const classes = useStyles();
  console.log(game);
  return (
      <div className={classes.modalStyle}>
        <Typography>
          {game.name}
        </Typography>
        <Typography>
          {game.rating}
        </Typography>
        <Typography>
          {game.metacritic}
        </Typography>
      </div>
  );
};

export default GameDetail;