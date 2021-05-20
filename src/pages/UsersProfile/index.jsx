import React from 'react';
import { useParams } from 'react-router-dom';
import Cookies from 'js-cookie';

const UsersProfile = () => {
  const [userInfos, setUserInfos] = React.useState('');
  const [userPosts, setUserPosts] = React.useState('');
  let { userId } = useParams();

  const fetchUserInfos = () => {
    fetch(`http://localhost:1337/users/${userId}`, {
      method: 'get',
      headers: {
        'Authorization': `Bearer ${Cookies.get('token')}`,
        'Content-Type': 'application/json'
      }
    })
      .then(response => response.json())
      .then(response => {
        console.log(response);
        setUserInfos(response);
      });
  };

  const fetchUserPosts = () => {
    fetch(`http://localhost:1337/posts?user.id=${userId}`, {
      method: 'get',
      headers: {
        'Authorization': `Bearer ${Cookies.get('token')}`,
        'Content-Type': 'application/json'
      }
    })
      .then(response => response.json())
      .then(response => {
        console.log(response);
        setUserPosts(response);
      });
  };

  React.useEffect(() => {fetchUserPosts()}, []);
  React.useEffect(() => {fetchUserInfos()}, []);

  return (
    <div>
      <h2>{userInfos.username}</h2>
      <p>{userInfos.description}</p>
      <div>
        {userPosts.map(post =>
          <div className="post-container">
            <h3>{post.text}</h3>
            <p>Likes : {post.like}</p>
          </div>
        )}
      </div>
    </div>
  )
};

export default UsersProfile;
