import React from 'react';
import Cookies from 'js-cookie';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

const Profile = () => {
  //const [userInfos, setUserInfos] = React.useState({username: '', email: '', id: ''});
  const userInfos = useSelector(state => state.user)

  React.useEffect(() => {
    const checkUserInfos = () => {
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
          //setUserInfos({username: response.username, email: response.email, id: response.id});
        })
    };
    //fetchUserInfos();
  }, [])

  return (
    <div>
      <h2>User Profile</h2>
      <h3>Welcome {userInfos.user.username} !</h3>
      <p>Email address used : {userInfos.user.email}</p>
      <Link to="/update-profile">Update profile</Link>
    </div>
  )
}

export default Profile;
