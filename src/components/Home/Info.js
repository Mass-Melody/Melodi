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
    padding: '4rem'
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
              <PublicTwoToneIcon fontSize='large'/>
            </Avatar>
          </ListItemAvatar>
          <ListItemText primary="Discover" secondary="Lorem ipsum odor amet, consectetuer adipiscing elit. Ac purus in massa egestas mollis varius;
    dignissim elementum. Mollis tincidunt mattis hendrerit dolor eros enim, nisi ligula ornare.
    Hendrerit parturient habitant pharetra rutrum gravida porttitor eros feugiat. Mollis elit
    sodales taciti duis praesent id. Consequat urna vitae morbi nunc congue." />
        </ListItem>
      </List>

      <List className={classes.root}>
        <ListItem>
          <ListItemAvatar>
            <Avatar>
              <GroupAddTwoToneIcon fontSize='large'/>
            </Avatar>
          </ListItemAvatar>
          <ListItemText primary="Meet People" secondary="Lorem ipsum odor amet, consectetuer adipiscing elit. Ac purus in massa egestas mollis varius;
    dignissim elementum. Mollis tincidunt mattis hendrerit dolor eros enim, nisi ligula ornare.
    Hendrerit parturient habitant pharetra rutrum gravida porttitor eros feugiat. Mollis elit
    sodales taciti duis praesent id. Consequat urna vitae morbi nunc congue." />
        </ListItem>
      </List>

      <List className={classes.root}>
        <ListItem>
          <ListItemAvatar>
            <Avatar>
              <HeadsetTwoToneIcon  fontSize='large'/>
            </Avatar>
          </ListItemAvatar>
          <ListItemText primary="Jam Out" secondary="Lorem ipsum odor amet, consectetuer adipiscing elit. Ac purus in massa egestas mollis varius;
    dignissim elementum. Mollis tincidunt mattis hendrerit dolor eros enim, nisi ligula ornare.
    Hendrerit parturient habitant pharetra rutrum gravida porttitor eros feugiat. Mollis elit
    sodales taciti duis praesent id. Consequat urna vitae morbi nunc congue." />
        </ListItem>
      </List>
    </div>
  );
}
