import React from 'react'
import { TextField } from '@material-ui/core';
import { useSelector, useDispatch } from 'react-redux';
import { changeDetail } from '../../../../store/profile.js'

function TextboxDetails() {
  const details = useSelector((state) => state.profile.profile.details)
  const dispatch = useDispatch()

  function change(e) {
    let change = {
      [e.target.name]: e.target.label,
      info: e.target.value
    }
    dispatch(changeDetail(change))
  }

  return (
    <div>
      {details && details.map(detail =>
        <TextField
          required
          id="outlined-required"
          label={detail.name}
          variant="outlined"
          value={detail.info}
          onChange={(e) => change(e)}
        />
      )}
      {/* 
      <TextField
        required
        id="outlined-required"
        label="Detail2"
        variant="outlined"
        name="detail2"
      />
      <TextField
        required
        id="outlined-required"
        label="Detail3"
        variant="outlined"
        name="detail3"
      />
      <TextField
        required
        id="outlined-required"
        label="Detail4"
        variant="outlined"
        name="detail4"
      />
      <TextField
        required
        id="outlined-required"
        label="Detail5"
        variant="outlined"
        name="detail5"
      /> */}
    </div>
  )
}

export default TextboxDetails
