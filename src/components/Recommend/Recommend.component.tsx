/* eslint-disable @typescript-eslint/no-explicit-any */

import React from 'react'
import { useStyles } from './Recommend.styles';
import {Button} from "@material-ui/core";
import {gameRecommendApi} from "../../services/recommend-api";
import SearchComponent from "../Search/Search.component";


const RecommendComponent: React.FC = () => {
    const classes = useStyles();

    const getRecommendedGames = () =>{
        let formData = new FormData();
        formData.append('game_id', '3498');

        gameRecommendApi(formData)
            .then((response: any) =>{
                console.log(response)
            })
            .catch((err: any) => {
                console.log(err);
            });
    }

    return (
        <div className={classes.titleStyle}>
            Hello from recommend
            <Button onClick={getRecommendedGames}>
                Click
            </Button>
            <div>
                <SearchComponent />
            </div>
        </div>
    );
};

export default RecommendComponent;
