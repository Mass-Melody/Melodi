import React from 'react'
import { TextField } from '@material-ui/core';
import RenderCropper from '../../../cropper/cropper.js';

function TextboxInterests() {
  
  return (
    <div>
      <RenderCropper />
      <TextField
        required
        id="outlined-required"
        label="Banner Image"
        variant="outlined"
      />
      <TextField
        required
        id="outlined-required"
        label="First Name"
        variant="outlined"
      />
      <TextField
        required
        id="outlined-required"
        label="Last Name"
        variant="outlined"
      />
      <TextField
        required
        id="outlined-required"
        label="Age"
        variant="outlined"
      />
      <TextField
        id="outlined-multiline-static"
        label="About Me"
        multiline
        rows={8}
        placeholder="What's on your mind?"
        variant="outlined"
      />
      <TextField
        required
        id="outlined-required"
        label="Playlist"
        variant="outlined"
      />
    </div>
  )
}

export default TextboxInterests;
