import React from 'react';
import Cookies from 'js-cookie';

const LikeButton = (props) => {
  const [likes, setLikes] = React.useState(props.likes);
  const [likeStatus, setLikeStatus] = React.useState('not-liked');

  const updateLikes = (newLikesCount) => {
    const data = {
      like: newLikesCount
    };

    return fetch(`http://localhost:1337/posts/${props.id}`, {
      method: 'put',
      headers: {
        'Authorization': `Bearer ${Cookies.get('token')}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    })
  }

  const addLike = () => {
    let newLikesCount = likes + 1;

    updateLikes(newLikesCount)
      .then(response => response.json())
      .then(response => {
        console.log(response);
        setLikes(newLikesCount);
        setLikeStatus('liked')
      })
  };

  const deleteLike = () => {
    let newLikesCount = likes - 1;

    updateLikes(newLikesCount)
      .then(response => response.json())
      .then(response => {
        console.log(response);
        setLikes(newLikesCount);
        setLikeStatus('not-liked')
      })
  };

  if(likeStatus === 'liked'){
    return (
      <div>
        <button onClick={deleteLike}>Liked</button>
        {(likes > 0) ? <p>Il y a actuellement {likes} likes sur ce post.</p> : <p>Il n'y a pas encore de likes sur ce post.</p>}
      </div>
    )
  } else {
    return (
      <div>
        <button onClick={addLike}>Like !</button>
        {(likes > 0) ? <p>Il y a actuellement {likes} likes sur ce post.</p> : <p>Il n'y a pas encore de likes sur ce post.</p>}
      </div>
    )
  }
}

export default LikeButton;
