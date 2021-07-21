import React from 'react'
import { Grid, makeStyles } from '@material-ui/core';
import Carousel from 'react-material-ui-carousel'
import { Paper } from '@material-ui/core'

let testArray = ["https://via.placeholder.com/800x200", "https://via.placeholder.com/800x200", "https://via.placeholder.com/800x200"]

const useStyles = makeStyles((theme) => ({
  container: {
    marginBottom: '1rem'
  },
  paper: {
    margin: 'auto',
    width: '100%'
  }
}))


function Hero() {
  const classes = useStyles()
  return (
    <div className={classes.container}>

      <Carousel>
        {
          testArray.map((item, i) =>
            <Paper >
              <img  className={classes.paper} key={i} src={item} alt='PLACEHOLDER' />
            </Paper>
          )
        }
      </Carousel>

    </div>
  )
}

export default Hero