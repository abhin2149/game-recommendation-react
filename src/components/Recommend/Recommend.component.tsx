/* eslint-disable @typescript-eslint/no-explicit-any */

import React from 'react'
import { useStyles } from './Recommend.styles';
import {Button, LinearProgress} from "@material-ui/core";
import {gameRecommendApi} from "../../services/recommend-api";
import SearchComponent from "../Search/Search.component";
import GameDetail from "../GameDetail/GameDetail.component";


const RecommendComponent: React.FC = () => {
  const classes = useStyles();
  const [value, setValue] = React.useState(null);
  const [games, setGames] = React.useState([]);
  const [loading,setLoading] = React.useState(false);

  const setNewValues = (value: any) =>{
    setValue(value);
  }
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
    <div className={classes.titleStyle}>
      Hello from recommend
      <div style={{marginLeft: '5%'}}>
        <SearchComponent value={value} setValue={setNewValues}/>
      </div>
      <div>
        <Button style={{marginLeft: '5%'}} onClick={getRecommendedGames}>
          Click
        </Button>
      </div>
      {loading && <LinearProgress />}
      {games.map(gameItem => {
        return(
          <GameDetail key={gameItem.id} game={gameItem} />
        )
      })}
    </div>
  );
};

export default RecommendComponent;
