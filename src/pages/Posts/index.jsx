import React from 'react';
import Cookies from 'js-cookie';
import Card from './../../components/Card';
import CreatePost from './../CreatePost';

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
        fetchPosts();
      })
  };

  React.useEffect(() => {fetchPosts()}, []);

  return (
    <div className="container">
      <h2>Feed</h2>
      <CreatePost updatePosts={fetchPosts}/>
      <div className="">
        {posts.map((post, index) =>
          <Card data={post} key={index} deletePost={deletePost}/>
        )}
      </div>
    </div>
  )
};

export default Posts;
