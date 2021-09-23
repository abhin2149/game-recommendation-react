/* eslint-disable @typescript-eslint/no-explicit-any */

import React from 'react';
import {Modal, TableCell, TableRow} from '@material-ui/core';
import {Game} from "../../types/game";
import {useStyles} from "./ShowGame.style";
import GameDetail from "../GameDetail/GameDetail.component";

type IProps = {
  game: Game;
};

const ShowGameRow: React.FC<IProps> = ({ game }) => {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
      <>
        <TableRow className={classes.hover} onClick={handleOpen}>
          <TableCell className={classes.tableBodyStyle} align="left">
            {game.id ? game.id : 'N/A'}
          </TableCell>
          <TableCell className={classes.tableBodyStyle} align="left">
            {game.name ? game.name : 'N/A'}
          </TableCell>
          <TableCell className={classes.tableBodyStyle} align="left">
            {game.rating ? game.rating : 'N/A'}
          </TableCell>
        </TableRow>
        <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="simple-modal-title"
            aria-describedby="simple-modal-description"
        >
          <div>
            <GameDetail game={game} />
          </div>
        </Modal>
      </>

  );
};

export default ShowGameRow;
