import React from "react";
import {useStyles} from "./ShowGame.style";
import {Table, TableBody, TableCell, TableContainer, TableHead, TableRow} from "@material-ui/core";
import ShowGameRow from "./ShowGameRow.component";
import {Game} from "../../types/game";


type IProps = {
  games: Game[];
  showLikedGames: boolean;
};

const ShowGame: React.FC<IProps> = ({games, showLikedGames}) => {
  const classes = useStyles();

  if(games.length > 0 ){
    return (
        <TableContainer className={classes.tableContainerStyle}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell className={classes.tableHeaderStyle} align="left">
                  ID
                </TableCell>
                <TableCell className={classes.tableHeaderStyle} align="left">
                  Name
                </TableCell>
                <TableCell className={classes.tableHeaderStyle} align="left">
                  Rating
                </TableCell>
                <TableCell className={classes.tableHeaderStyle} align="left">
                  Released
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {games.map((game) => {
                return <ShowGameRow key={game.id} game={game} showLikedGames={showLikedGames}/>;
              })}
            </TableBody>
          </Table>
        </TableContainer>
    );
  }
  return null;
};

export default ShowGame;