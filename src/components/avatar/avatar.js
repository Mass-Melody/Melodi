import React, { useState } from 'react';
import './avatar.css';

/*
  **Documentation: https://material-ui.com/components/menus/
*/
import Button from '@material-ui/core/Button';
import ClickAwayListener from '@material-ui/core/ClickAwayListener';
import Grow from '@material-ui/core/Grow';
import Paper from '@material-ui/core/Paper';
import Popper from '@material-ui/core/Popper';
import MenuItem from '@material-ui/core/MenuItem';
import MenuList from '@material-ui/core/MenuList';
import CameraAltIcon from '@material-ui/icons/CameraAlt';
import { makeStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import RenderCropper from '../cropper/cropper.js';
import {useSelector} from 'react-redux'

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  paper: {
    marginRight: theme.spacing(2),
  },
  cameraIcon: {
    heigh: '4rem',
    width: '4rem',
    position: 'absolute',
    bottom: '0',
    left: '0',
    backgroundColor: 'white',

    '&:hover': {
      backgroundColor: 'white',
    }
  },
}));

function RenderAvatar(props) {

  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const anchorRef = React.useRef(null);
  const profileImage = useSelector((state) => state.profile.profile.picture)

  const handleToggle = () => {
    setOpen((prevOpen) => !prevOpen);
  };

  const handleClose = (event) => {
    if (anchorRef.current && anchorRef.current.contains(event.target)) {
      return;
    }

    setOpen(false);
  };

  function handleListKeyDown(event) {
    if (event.key === 'Tab') {
      event.preventDefault();
      setOpen(false);
    }
  }

  // return focus to the button when we transitioned from !open -> open
  const prevOpen = React.useRef(open);
  React.useEffect(() => {
    if (prevOpen.current === true && open === false) {
      anchorRef.current.focus();
    }

    prevOpen.current = open;
  }, [open]);

  const [showCropper, setShowCropper] = useState(false);
  const handleCropper = () => setShowCropper((prevValue) => !prevValue);

  return (
    <>
    
      <div className='avatar-container'>
        <div className='avatar'>
          <img src={profileImage} alt='avatar' className='avatar-img' />
        </div>

        <IconButton
          className={classes.cameraIcon}
          ref={anchorRef}
          aria-controls={open ? 'menu-list-grow' : undefined}
          aria-haspopup="true"
          onClick={handleToggle}
        >
          <CameraAltIcon fontSize='large' />
        </IconButton>
        <Popper open={open} anchorEl={anchorRef.current} role={undefined} transition disablePortal>
          {({ TransitionProps, placement }) => (
            <Grow
              {...TransitionProps}
              style={{ transformOrigin: placement === 'bottom' ? 'center top' : 'center bottom' }}
            >
              <Paper>
                <ClickAwayListener onClickAway={handleClose}>
                  <MenuList autoFocusItem={open} id="menu-list-grow" onKeyDown={handleListKeyDown}>
                    <MenuItem onClick={handleClose}>View</MenuItem>
                    <MenuItem
                      onClick={(event) => {
                        handleCropper();
                        setShowCropper(true);
                        handleClose(event);
                      }}
                    >
                      Change
                    </MenuItem>
                    <MenuItem onClick={handleClose}>Remove</MenuItem>
                  </MenuList>
                </ClickAwayListener>
              </Paper>
            </Grow>
          )}
        </Popper>
      </div>

      {showCropper && <RenderCropper handlePicture={props.handlePicture} handleCropper={handleCropper}/>}
    </>
  )
}

export default RenderAvatar;
