import React from 'react';
import Cookies from 'js-cookie';
import Card from './../../components/Card';
import { Link } from 'react-router-dom';

const Posts = () => {
  const [posts, setPosts] = React.useState([]);

  const fetchPosts = () => {
    fetch("http://localhost:1337/posts", {
      method: 'get',
      headers: {
        'Authorization': `Bearer ${Cookies.get('token')}`,
        'Content-Type': 'application/json'
      }
    })
      .then(response => response.json())
      .then(response => {
        console.log(response);
        setPosts(response)
      })
  };

  const deletePost = (id) => {
    fetch(`http://localhost:1337/posts/${id}`, {
      method: 'delete',
      headers: {
        'Authorization': `Bearer ${Cookies.get('token')}`,
        'Content-Type': 'application/json'
      }
    })
      .then(response => response.json())
      .then(response => {
        console.log(response);
        fetchPosts();
      })
  };

  React.useEffect(() => {fetchPosts()}, []);

  return (
    <div className="container">
      <h2>Posts</h2>
      <div className="grid grid-cols-3 gap-4">
        {posts.map((post, index) =>
          <Card data={post} key={index} deletePost={deletePost}/>
        )}
      </div>
      <Link to="/create-post">Create new post</Link>
    </div>
  )
};

export default Posts;
