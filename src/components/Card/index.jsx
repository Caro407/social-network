import React from 'react';
import { Link } from 'react-router-dom';

const Card = (props) => {

  return (
    <div className='post-container'>
      <h3>{props.data.text}</h3>
      <p>- {props.data.user.username}</p>
      <Link to={`/users/${props.data.user.id}`}>- {props.data.user.username}</Link>
    </div>
  )
}

export default Card;
