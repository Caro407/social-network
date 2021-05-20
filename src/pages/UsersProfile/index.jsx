import React from 'react';
import { useParams } from 'react-router-dom';
import Cookies from 'js-cookie';
import Card from './../../components/Card';

const UsersProfile = () => {
  const [userInfos, setUserInfos] = React.useState('');
  const [userPosts, setUserPosts] = React.useState([]);
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
        if(response.length > 0) {
          setUserPosts(response);
        };
      });
  };

  React.useEffect(() => {fetchUserPosts()}, []);
  React.useEffect(() => {fetchUserInfos()}, []);

  return (
    <div>
      <h2>{userInfos.username}</h2>
      <p>{userInfos.description}</p>
        <div className="grid grid-cols-3 gap-4">
          {userPosts.map((post, index) =>
            <Card data={post} key={index}/>
          )}
        </div>

    </div>
  )
};

export default UsersProfile;
