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
  backdrop: {
    zIndex: 1,
    color: '#fff',
  },
}));