import React from 'react';

const Card = (props) => {

  return (
    <div className='post-container'>
      <h3>{props.data.text}</h3>
      <p>- {props.data.user.username}</p>
    </div>
  )
}

export default Card;
