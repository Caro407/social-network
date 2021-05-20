import React from 'react';
import { Link } from 'react-router-dom';
import LikeButton from './../LikeButton'

const Card = (props) => {

  return (
    <div className='post-container'>
      <h3>{props.data.text}</h3>
      <LikeButton likes={props.data.like} id={props.data.id} />
      <Link to={`/users/${props.data.user.id}`}>- {props.data.user.username}</Link>
    </div>
  )
}

export default Card;
