import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

const Profile = () => {
  const userInfos = useSelector(state => state.user)

  return (
    <div className="container">
      <h2>User Profile</h2>
      <h3>Welcome {userInfos.username} !</h3>
      <p>Email address used : {userInfos.email}</p>
      <Link to="/update-profile">Update profile</Link>
    </div>
  )
}

export default Profile;
