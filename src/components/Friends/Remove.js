import React from 'react'
import RemoveCircleIcon from '@material-ui/icons/RemoveCircle';
import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  removeButton: {
    fontSize: '2.5rem',
    color: '#f64c4c',
    cursor: 'pointer'
  }
}))


function Remove() {
  const classes = useStyles()

  return (
    <div>
      <RemoveCircleIcon className={classes.removeButton} />
    </div>
  )
}
export default Remove
