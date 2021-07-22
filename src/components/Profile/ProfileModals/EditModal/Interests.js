import React from 'react'
import { TextField} from '@material-ui/core';

function textboxInterests() {
  return (
    <div>
      <TextField
          required
          id="outlined-required"
          label="Interest1"
          variant="outlined"
        />
        <TextField
          required
          id="outlined-required"
          label="Interest2"
          variant="outlined"
        />
        <TextField
          required
          id="outlined-required"
          label="Interest3"
          variant="outlined"
        />
        <TextField
          required
          id="outlined-required"
          label="Interest4"
          variant="outlined"
        />
        <TextField
          required
          id="outlined-required"
          label="Interest5"
          variant="outlined"
        />
    </div>
  )
}

export default textboxInterests
