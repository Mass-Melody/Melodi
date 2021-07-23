import React from 'react'
import { makeStyles } from '@material-ui/core';
import Carousel from 'react-material-ui-carousel'
import { Paper } from '@material-ui/core'

let testArray = ["https://images.unsplash.com/photo-1562086780-1c95244efd6b?ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8cGVvcGxlJTIwdGFsa2luZ3xlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60", "https://images.unsplash.com/photo-1445375011782-2384686778a0?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=3123&q=80", "https://images.unsplash.com/photo-1566981731417-d4c8e17a9e82?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NTV8fGJhbmR8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60"]

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