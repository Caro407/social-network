import React from 'react';
import Posts from './../Posts';
import PreviewPosts from './../PreviewPosts';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

const Home = () => {
  const is_connected = useSelector(state => state.is_connected)
  return (
    <div className="container">
      <h2>Welcome !</h2>
      <p>Welcome on My Social Network. This website is a training to Redux and React. We use auth and routing to create a small social media website.</p>
      {is_connected ? <Posts /> : <PreviewPosts />}
    </div>
  )
}

export default Home;
