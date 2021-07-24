import React from 'react'
import { makeStyles } from '@material-ui/core';
import Carousel from 'react-material-ui-carousel'
import { Paper } from '@material-ui/core'

let testArray = ["https://source.unsplash.com/random?band-group", "https://source.unsplash.com/random?live-music", "https://source.unsplash.com/random?music-festival"]

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
              <img  style={{height: '45rem'}}className={classes.paper} key={i} src={item} alt='PLACEHOLDER' />
            </Paper>
          )
        }
      </Carousel>
    </div>
  )
}

export default Hero