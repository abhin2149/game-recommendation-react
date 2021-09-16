/* eslint-disable @typescript-eslint/no-explicit-any */

import React from 'react'
import { useStyles } from './Recommend.styles';
import {Button, Grid, LinearProgress, Typography} from "@material-ui/core";
import {gameRecommendApi} from "../../services/recommend-api";
import SearchComponent from "../Search/Search.component";
import SelectImage from "../SelectImage/SelectImage.component";
import ShowGame from "../ShowGame/ShowGame.component";


const RecommendComponent: React.FC = () => {
  const classes = useStyles();
  const [value, setValue] = React.useState(null);
  const [query, setQuery] = React.useState('');
  const [games, setGames] = React.useState([]);
  const [loading,setLoading] = React.useState(false);

  const setNewValue = (value: any) => {
    setValue(value);
  }

  const setNewQuery = (query: any) => {
    setQuery(query);
  };

  const getRecommendedGames = () =>{
    let formData = new FormData();
    formData.append('game_id', value.id);
    setLoading(true);
    gameRecommendApi(formData)
      .then((response: any) =>{
        console.log(response);
        setGames(response.data.games)
        setLoading(false);
      })
      .catch((err: any) => {
        console.log(err);
        setLoading(false);
      });
  }



  return (
    <div>
      <Grid container justifyContent="space-around">
        <Grid item xs={8}>
          <Typography className={classes.titleStyle}> To continue please select your favourite games!</Typography>
        </Grid>
        <Grid
            container
            item
            direction="row"
            justifyContent="space-around"
            alignItems="center"
        >
          <Grid item className={classes.modalStyle}>
            <SearchComponent value={value} setValue={setNewValue} query={query} setQuery={setNewQuery}/>
            <Typography className={classes.modalMessage}>OR</Typography>
            <SelectImage setQuery={setNewQuery}/>
          </Grid>
          {/*<Grid item className={classes.modalStyle}>
            <SearchComponent value={value} setValue={setNewValue} query={query} setQuery={setNewQuery}/>
            <SelectImage setQuery={setNewQuery}/>
          </Grid>
          <Grid item className={classes.modalStyle}>
            <SearchComponent value={value} setValue={setNewValue} query={query} setQuery={setNewQuery}/>
            <SelectImage setQuery={setNewQuery}/>
          </Grid>*/}
        </Grid>
        <Grid item className={classes.containerStyle}>
          <Button  variant='contained' color='primary' size="large" onClick={getRecommendedGames}>
            Let's Go !
          </Button>
        </Grid>
      </Grid>
      <Grid>
        {loading && <LinearProgress />}
      </Grid>
      <Grid style={{marginLeft: '3%', marginBottom: '5%'}}>
        <ShowGame games={games} />
      </Grid>
    </div>
  );
};

export default RecommendComponent;
