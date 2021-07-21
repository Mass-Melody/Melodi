import React from 'react'
import { Grid, makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  container: {
    border: '2px black solid',
    width: '100%',
    height: '400px',
    marginBottom: '1rem',
    padding: '1rem',
    borderRadius: 'max(0px, min(8px, ((100vw - 4px) - 100%) * 9999)) / 8px',
    boxShadow: '0 1px 2px var(--shadow-2)',
    background: 'white'
  },
  picture: {
    marginRight: '1.5rem'
  }
}))

function Aboutme() {
  const classes = useStyles()

  return (
    <Grid
      container
      className={classes.container}
    >
      <h4>About Me</h4>
      <p> Lorem ipsum dolor sit, amet consectetur adipisicing elit. Itaque veniam recusandae perferendis, similique non quaerat. At nulla voluptates nihil tempore necessitatibus harum pariatur tempora maiores laudantium consequatur, maxime sapiente dolores. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Temporibus amet sapiente iure aliquid cum ipsa ipsum libero iusto, quasi ipsam, veniam eveniet incidunt quas repellendus quos, at possimus quo omnis. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Neque nisi soluta sapiente cumque nemo veritatis. Incidunt praesentium, recusandae veritatis, labore quidem vel cumque possimus ex ea deserunt fugit natus. Illo.</p>
    </Grid>
  )
}

export default Aboutme
