import React from "react";
//import {useStyles} from "./ShowGame.style";
import GameDetail from "../GameDetail/GameDetail.component";
import {Grid} from "@material-ui/core";


type IProps = {
  games: any[];
};

const ShowGame: React.FC<IProps> = ({games}) => {
  //const classes = useStyles();
/*  const TwoRow = (
      <>
        <Grid item xs={6}>
          <div className={classes.modalStyle}>
            <GameDetail key={games[0].id} game={games[0]}/>
          </div>
        </Grid>
        <Grid item xs={6}>
          <div className={classes.modalStyle}>
            <GameDetail key={games[1].id} game={games[1]}/>
          </div>
        </Grid>
      </>
  );*/

  /*  const FormRow1 = (
        <>
          <Grid item xs={4}>
            <div className={classes.modalStyle}>
              <GameDetail key={games[0].id} game={games[0]}/>
            </div>
          </Grid>
          <Grid item xs={4}>
            <div className={classes.modalStyle}>
              <GameDetail key={games[1].id} game={games[1]}/>
            </div>
          </Grid>
          <Grid item xs={4}>
            <div className={classes.modalStyle}>
              <GameDetail key={games[2].id} game={games[2]}/>
            </div>
          </Grid>
        </>
    );

    const FormRow2 = (
        <>
          <Grid item xs={4}>
            <div className={classes.modalStyle}>
              <GameDetail key={games[3].id} game={games[3]}/>
            </div>
          </Grid>
          <Grid item xs={4}>
            <div className={classes.modalStyle}>
              <GameDetail key={games[4].id} game={games[4]}/>
            </div>
          </Grid>
          <Grid item xs={4}>
            <div className={classes.modalStyle}>
              <GameDetail key={games[5].id} game={games[5]}/>
            </div>
          </Grid>
        </>
    );*/

    return (
        <Grid container>
          <Grid container item xs={12} spacing={10} alignItems="center">
            {games.map(gameItem => {
              return(
                  <Grid key={gameItem.id} item xs={6}>
                    <GameDetail game={gameItem}/>
                  </Grid>
              )
            })}
          </Grid>
          {/*        <Grid container item xs={12}>
          {FormRow2}
        </Grid>*/}
        </Grid>
    );

};

export default ShowGame;