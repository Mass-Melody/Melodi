import React from 'react'
import { TextField } from '@material-ui/core';
import RenderCropper from '../../../cropper/cropper.js';
import RenderAvatar from '../../../avatar/avatar.js';
import { useSelector } from 'react-redux';

function TextboxOther(props) {
  const info = useSelector((state) => state.profile.profile)

  return (
    <div>

      <RenderAvatar />
      <TextField
        required
        id="outlined-required"
        label="Banner Image"
        variant="outlined"
        name="hero"
        defaultValue={info.hero}
        onChange={(e) => props.handleChange(e)}
        style={{
          marginTop: '200px',
        }}
      />
      <TextField
        required
        id="outlined-required"
        label="First Name"
        variant="outlined"
        name="firstName"
        defaultValue={info.firstName}
        onChange={(e) => props.handleChange(e)}
      />
      <TextField
        required
        id="outlined-required"
        label="Last Name"
        variant="outlined"
        name="lastName"
        defaultValue={info.lastName}
        onChange={(e) => props.handleChange(e)}
      />
      <TextField
        required
        id="outlined-required"
        label="Username"
        variant="outlined"
        name="username"
        defaultValue={info.username}
        onChange={(e) => props.handleChange(e)}
      />
      <TextField
        required
        id="outlined-required"
        label="Age"
        variant="outlined"
        name="age"
        defaultValue={info.age}
        onChange={(e) => props.handleChange(e)}
      />
      <TextField
        id="outlined-multiline-static"
        label="About Me"
        multiline
        rows={8}
        placeholder="What's on your mind?"
        variant="outlined"
        name="aboutMe"
        defaultValue={info.aboutMe}
        onChange={(e) => props.handleChange(e)}
      />
      <TextField
        required
        id="outlined-required"
        label="Playlist"
        variant="outlined"
        name="playlist"
        defaultValue={info.playlist}
        onChange={(e) => props.handleChange(e)}
      />
    </div>
  )
}

export default TextboxOther;
