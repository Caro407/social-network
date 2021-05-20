import React from 'react';
import { Link } from 'react-router-dom';
import LikeButton from './../LikeButton';
import { useSelector } from 'react-redux';

const Card = (props) => {
  const [isAuthor, setAuthor] = React.useState(false)
  const user = useSelector(state => state.user);

  const isUserAuthor = () => {
    if(props.data.user.id === user.id) {
      setAuthor(true)
    };
  };

  const deletePostById = () => {
    props.deletePost(props.data.id)
  };

  React.useEffect(() => {isUserAuthor()}, []);

  return (
    <div className='post-container'>
      <h3>{props.data.text}</h3>
      {isAuthor ? <button onClick={deletePostById}>Delete post</button> : <p></p>}
      <LikeButton likes={props.data.like} id={props.data.id} />
      <Link to={`/users/${props.data.user.id}`}>- {props.data.user.username}</Link>
    </div>
  )
}

export default Card;
