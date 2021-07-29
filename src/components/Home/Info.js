import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import GroupAddTwoToneIcon from '@material-ui/icons/GroupAddTwoTone';
import PublicTwoToneIcon from '@material-ui/icons/PublicTwoTone';
import HeadsetTwoToneIcon from '@material-ui/icons/HeadsetTwoTone';

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
    display: 'inline-block',
    padding: '10rem',
  },
  div: {
    textAlign: 'center',
    margin: 'auto',
  },
}));

export default function Info() {
  const classes = useStyles();

  return (
    <div className={classes.div}>
      <List className={classes.root}>
        <ListItem>
          <ListItemAvatar>
            <Avatar>
              <GroupAddTwoToneIcon fontSize='large'/>
            </Avatar>
          </ListItemAvatar>
          <ListItemText primary="Meet People" secondary="Follow your friends. Follow other musicians in your area and collaborate!." />
        </ListItem>
      </List>
      <List className={classes.root}>
        <ListItem>
          <ListItemAvatar>
            <Avatar>
              <PublicTwoToneIcon fontSize='large'/>
            </Avatar>
          </ListItemAvatar>
          <ListItemText primary="Discover" secondary="Discover a wide range of musical genres including bands and acts in your local area! Listen to what your friends are listening to right now!" />
        </ListItem>
      </List>
      <List className={classes.root}>
        <ListItem>
          <ListItemAvatar>
            <Avatar>
              <HeadsetTwoToneIcon  fontSize='large'/>
            </Avatar>
          </ListItemAvatar>
          <ListItemText primary="Jam Out" secondary="Find awesome music with a click of a button and turn the volume up! Melodi encourages you to have a great time!" />
        </ListItem>
      </List>
    </div>
  );
}
