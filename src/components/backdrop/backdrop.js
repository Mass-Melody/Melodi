/*
  Documentation: https://material-ui.com/components/backdrop/#backdrop
*/

import React, { useState, createContext } from 'react';
import Backdrop from '@material-ui/core/Backdrop';
import CircularProgress from '@material-ui/core/CircularProgress';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  backdrop: {
    zIndex: theme.zIndex.drawer + 1,
    color: '#fff',
  },
}));

export const BackdropContext = createContext();

export default function SimpleBackdrop({ children }) {
  const classes = useStyles();
  const [open, setOpen] = useState(true);

  const closeBackdrop = () => {
    setOpen(false);
  };
  const showBackdrop = () => {
    setOpen(!open);
  };

  return (
    <div>
      <BackdropContext.Provider value={{ closeBackdrop, showBackdrop }}>
        <Backdrop 
          className={classes.backdrop}
          open={open}
          onClick={closeBackdrop}
        >
          <CircularProgress color="inherit" />
        </Backdrop>
        {children}
      </BackdropContext.Provider>
    </div>
  );
}
