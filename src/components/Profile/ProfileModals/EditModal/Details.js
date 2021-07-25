import React from 'react'
import { TextField } from '@material-ui/core';
import { useSelector } from 'react-redux';

function TextboxDetails(props) {
  const details = useSelector((state) => state.profile.profile.details)
  const sortedDetails = details.sort((a, b) => a.id - b.id)

  return (
    <div>
      {sortedDetails && sortedDetails.map(detail =>
        <TextField
          required
          id="outlined-required"
          label={detail.name}
          variant="outlined"
          name={detail.id}
          onChange={(e) => props.handleChangeDetails(e, detail.name)}
          defaultValue={detail.info}
        />
      )}
    </div>
  )
}

export default TextboxDetails
