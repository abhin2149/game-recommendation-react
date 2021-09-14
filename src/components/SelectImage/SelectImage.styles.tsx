import {makeStyles} from "@material-ui/core";

export const useStyles = makeStyles(() => ({
  root: {
    "& > *": {
      margin: '2%',
    },
  },
  input: {
    display: "none",
  },
}));