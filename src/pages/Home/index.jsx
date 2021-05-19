import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {

  return (
    <div>
      <h2>Welcome !</h2>
      <Link to="/posts" className="mx-2">See the posts</Link>
    </div>
  )
}

export default Home;
