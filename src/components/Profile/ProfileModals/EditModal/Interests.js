import React from 'react'
import { TextField, makeStyles} from '@material-ui/core';
import { useSelector } from 'react-redux';

const useStyles = makeStyles((theme) => ({
  container: {
    width: '100%',
    marginBottom: '1rem',
    padding: '1rem',
    borderRadius: 'max(0px, min(8px, ((100vw - 4px) - 100%) * 9999)) / 8px',
    boxShadow: '0px 2px 15px rgba(0,0,0,0.18)'
  },
  font: {
    fontSize:'1rem',
    fontFamily: 'sans-serif',
    textDecoration: 'none',
  },
  title: {
    fontSize: '1.3rem',
    fontFamily: 'sans-serif',
    marginBottom:'3rem'
  }
  
}))

function TextboxInterests(props) {
  const classes = useStyles()
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
