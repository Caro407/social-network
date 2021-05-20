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
    <div className='post-container my-1'>
      <h3 className="inline">{props.data.text}</h3>
      {isAuthor ? <i className="fas fa-trash-alt inline ml-2" onClick={deletePostById}></i> : <p></p>}
      <Link to={`/users/${props.data.user.id}`} className="block">- {props.data.user.username}</Link>
      <LikeButton likes={props.data.like} id={props.data.id} />
    </div>
  )
}

export default Card;
