import React from 'react';
import PreviewPost from './../../components/PreviewPost';

const PreviewPosts = () => {
  const [posts, setPosts] = React.useState([]);

  const fetchPosts = () => {
    fetch("http://localhost:1337/posts", {
      method: 'get',
      headers: {
        'Content-Type': 'application/json'
      }
    })
      .then(response => response.json())
      .then(response => {
        console.log(response);
        setPosts(response)
      })
  };

  React.useEffect(() => {fetchPosts()}, []);

  return (
    <div className="container">
      <h2>Feed</h2>
      <div className="">
        {posts.map((post, index) =>
          <PreviewPost data={post} key={index} />
        )}
      </div>
    </div>
  )
};

export default PreviewPosts;
