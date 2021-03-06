import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import ImageList from '@material-ui/core/ImageList';
import ImageListItem from '@material-ui/core/ImageListItem';
import ImageListItemBar from '@material-ui/core/ImageListItemBar';
// import itemData from './itemData';
// import zIndex from '@material-ui/core/styles/zIndex';

let bandArr = [{
  img: 'https://source.unsplash.com/random?music-band',
  title: 'BandName',
}, {
  img: 'https://source.unsplash.com/random?musician',
  title: 'BandName',
}, {
  img: 'https://source.unsplash.com/random?singing',
  title: 'BandName',
}, {
  img: 'https://source.unsplash.com/random?singer',
  title: 'BandName',
}]

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
    backgroundColor: theme.palette.background.paper,
  },
  imageList: {
    flexWrap: 'nowrap',

    // Promote the list into his own layer on Chrome. This cost memory but helps keeping high FPS.
    transform: 'translateZ(0)',
    width: '100%',
  },
  title: {
    color: theme.palette.primary.light,
  },
  titleBar: {
    background:
      'linear-gradient(to top, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)',
  },
  img: {
    padding: '2rem',
  }
}));

export default function Discover() {
  const classes = useStyles();

  return (

    <div className={classes.root}>
      <ImageList className={classes.imageList} cols={2.5}>
        {bandArr.map((band, idx) => (
          <ImageListItem key={idx}>
            <img src={band.img} alt={band.title} className={classes.img} />
            <ImageListItemBar

              classes={{
                root: classes.titleBar,
                title: classes.title,
              }}
            />
          </ImageListItem>
        ))}
      </ImageList>
    </div>

  );
}

