import React from 'react'
import AddCircleIcon from '@material-ui/icons/AddCircle';
import {makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  addButton: {
    fontSize: '2.5rem',
    color: '#69b2f7'
  }
}))


function Add() {
  const classes = useStyles()

  return (
    <div>
      <AddCircleIcon className={classes.addButton}/>
    </div>
  )
}

export default Add
