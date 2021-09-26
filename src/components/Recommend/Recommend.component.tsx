/* eslint-disable @typescript-eslint/no-explicit-any */

import React from 'react'
import { useStyles } from './Recommend.styles';
import {Button, FormControlLabel, Grid, LinearProgress, Switch, Typography} from "@material-ui/core";
import {gameRecommendApi} from "../../services/recommend-api";
import SearchComponent from "../Search/Search.component";
import SelectImage from "../SelectImage/SelectImage.component";
import ShowGame from "../GameTable/ShowGame.component";
import {fetchLikedGamesApi} from "../../services/fetch-games-api";


const RecommendComponent: React.FC = () => {
  const classes = useStyles();
  const [value1, setValue1] = React.useState(null);
  const [value2, setValue2] = React.useState(null);
  const [value3, setValue3] = React.useState(null);
  const [query1, setQuery1] = React.useState('');
  const [query2, setQuery2] = React.useState('');
  const [query3, setQuery3] = React.useState('');
  const [games, setGames] = React.useState([]);
  const [likedGames, setLikedGames] = React.useState([]);
  const [showLikedGames, setShowLikedGames] = React.useState(false);
  const [loading,setLoading] = React.useState(false);

  const setNewValue1 = (value: any) => {
    setValue1(value);
  }

  const setNewValue2 = (value: any) => {
    setValue2(value);
  }

  const setNewValue3 = (value: any) => {
    setValue3(value);
  }

  const setNewQuery1 = (query: any) => {
    setQuery1(query);
  };

  const setNewQuery2 = (query: any) => {
    setQuery2(query);
  };

  const setNewQuery3 = (query: any) => {
    setQuery3(query);
  };

  const getRecommendedGames = () => {
    let formData = new FormData();

    if(value1)
      formData.append('game_id', value1.id)
    if(value2)
      formData.append('game_id', value2.id);
    if(value3)
      formData.append('game_id', value3.id);

    setShowLikedGames(false);
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

  const getLikedGames = () => {
    setLoading(true);
    fetchLikedGamesApi()
        .then((response: any) =>{
          console.log(response);
          setLikedGames(response.data)
          setLoading(false);
        })
        .catch((err: any) => {
          console.log(err);
          setLoading(false);
        });
  }

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if(event.target.checked){
      getLikedGames();
    }
    setShowLikedGames(event.target.checked);
  };

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
            <SearchComponent value={value1} setValue={setNewValue1} query={query1} setQuery={setNewQuery1}/>
            <Typography className={classes.modalMessage}>OR</Typography>
            <SelectImage id={'1'} setQuery={setNewQuery1}/>
          </Grid>
          <Grid item className={classes.modalStyle}>
            <SearchComponent value={value2} setValue={setNewValue2} query={query2} setQuery={setNewQuery2}/>
            <Typography className={classes.modalMessage}>OR</Typography>
            <SelectImage id={'2'} setQuery={setNewQuery2}/>
          </Grid>
          <Grid item className={classes.modalStyle}>
            <SearchComponent value={value3} setValue={setNewValue3} query={query3} setQuery={setNewQuery3}/>
            <Typography className={classes.modalMessage}>OR</Typography>
            <SelectImage id={'3'} setQuery={setNewQuery3}/>
          </Grid>
        </Grid>
        <Grid item container className={classes.containerStyle}>
          <Grid item xs={6}>
            <Button  variant='contained' color='primary' size="large" onClick={getRecommendedGames} disabled={!value1 && !value2 && !value3}>
              Let's Go !
            </Button>
          </Grid>
          <Grid item xs={6}>
            <FormControlLabel
                control={
                  <Switch
                      checked={showLikedGames}
                      onChange={handleChange}
                      name="checkedB"
                      color="primary"
                  />
                }
                label="Show Liked Games"
            />
          </Grid>
        </Grid>
      </Grid>
      <Grid style={{ marginBottom: '1%', marginTop: '3%'}}>
        {loading && <LinearProgress />}
      </Grid>
      <Grid style={{marginLeft: '1%', marginBottom: '5%', marginTop: '3%'}}>
        <ShowGame games={showLikedGames ? likedGames : games} showLikedGames={showLikedGames}/>
      </Grid>
    </div>
  );
};

export default RecommendComponent;
