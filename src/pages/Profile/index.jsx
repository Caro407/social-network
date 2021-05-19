import React from 'react';
import Cookies from 'js-cookie';
import { Link } from 'react-router-dom';

const Profile = () => {
  const [userInfos, setUserInfos] = React.useState({username: '', email: '', id: ''});

  React.useEffect(() => {
    const fetchUserInfos = () => {
      fetch("http://localhost:1337/users/me", {
        method: 'get',
        headers: {
          'Authorization': `Bearer ${Cookies.get('token')}`,
          'Content-Type': 'application/json'
        }
      })
        .then(response => response.json())
        .then(response => {
          console.log(response);
          setUserInfos({username: response.username, email: response.email, id: response.id});
        })
    };
    fetchUserInfos();
  }, [])

  return (
    <div>
      <h2>User Profile</h2>
      <h3>Welcome {userInfos.username} !</h3>
      <p>Email address used : {userInfos.email}</p>
      <Link path="/update-profile">Update profile</Link>
    </div>
  )
}

export default Profile;
