import React from 'react';
import PropTypes from 'prop-types';
import GuestName from './GuestName';

const Guest = props =>
  <li>
    <GuestName
      isEditing={props.isEditing}
      handleNameEdits={e => props.setName(e.target.value)} >
      {props.name}
    </GuestName>
    <label>
      <input
      type="checkbox"
      checked={props.isConfirmed}
      onChange={props.handeConfirmation}/> Confirmed
    </label>
    <button onClick={props.handeToggleEditing}>edit</button>
    <button>remove</button>
  </li>;

Guest.propTypes ={
  name: PropTypes.string.isRequired,
  isConfirmed: PropTypes.bool.isRequired,
  isEditing: PropTypes.bool.isRequired,
  handeConfirmation: PropTypes.func.isRequired,
  handeToggleEditing: PropTypes.func.isRequired,
  setName: PropTypes.func.isRequired
}
export default Guest;
