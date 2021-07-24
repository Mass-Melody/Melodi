import React from 'react'
import { TextField} from '@material-ui/core';
import { useSelector } from 'react-redux';

function TextboxInterests(props) {
  const interests = useSelector((state) => state.profile.profile.interests)
  const sortedInterests = interests.sort((a, b) => a.id - b.id)
  
  return (
    <div>
      {sortedInterests && sortedInterests.map(interest =>
        <TextField
          required
          id="outlined-required"
          label={interest.name}
          variant="outlined"
          name={interest.id}
          defaultValue={interest.info}
          onChange={(e) => props.handleChangeInterests(e, interest.name)}
        />
      )}
    </div>
  )
}

export default TextboxInterests
