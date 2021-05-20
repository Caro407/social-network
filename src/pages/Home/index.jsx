import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

const Home = () => {
  const is_connected = useSelector(state => state.is_connected)
  return (
    <div className="container">
      <h2>Welcome !</h2>
      <p>Welcome on My Social Network. This website is a training to Redux and React. We use auth and routing to create a small social media website.</p>
      {is_connected ? <Link to="/posts" className="mx-2">See the posts</Link> : <Link to="/log-in" className="mx-2">Please log in or sign up !</Link>}
    </div>
  )
}

export default Home;
