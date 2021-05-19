import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {

  return (
    <div className="container">
      <h2>Welcome !</h2>
      <p>Welcome on My Social Network. This website is a training to Redux and React. We use auth and routing to create a small social media website.</p>
      <Link to="/posts" className="mx-2">See the posts</Link>
    </div>
  )
}

export default Home;
