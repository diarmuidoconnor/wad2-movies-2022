import React from 'react';
// import makeStyles from '@mui/styles/makeStyles';
import CircularProgress from '@mui/material/CircularProgress';

const styles = {
  root: {
    display: 'flex',
    justifyContent: "center",
    '& > * + *': {
      marginLeft: 2,
    },
  },
};

export default function CircularIndeterminate() {
  // const classes = useStyles();

  return (
    <div sx={styles.root}>
      <CircularProgress />
      <CircularProgress />
    </div>
  );
}