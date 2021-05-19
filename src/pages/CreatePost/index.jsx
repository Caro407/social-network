import React from 'react';
import Cookies from 'js-cookie';
import { useSelector } from 'react-redux';
import { Redirect } from "react-router-dom";

const CreatePost = () => {
  const userInfos = useSelector(state => state.user);
  const [creationStatus, setStatus] = React.useState('')

  const createPost = (event) => {
    event.preventDefault();
    let values = Object.fromEntries(new FormData(document.querySelector('form')));

    fetch(`http://localhost:1337/posts`, {
      method: 'post',
      headers: {
        'Authorization': `Bearer ${Cookies.get('token')}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(values)
    })
      .then(response => {
        if(!response.ok) {
          console.log(response);
          throw Error(response.statusText)
        }
        return response.json()
      })
      .then(response => {
        console.log(response);
        setStatus('creation_done');
      })
      .catch(error => {
        console.log(error);
      });
  };

  return (
    <form onSubmit={createPost}>
      <label>New post's text</label>
      <input name="text"/>
      <br/>
      <br/>
      <input type="hidden" name="user" value={userInfos.id} />
      <input type="submit" value="Submit" />
      {(creationStatus === 'creation_done') ? <Redirect to={{pathname: '/posts'}} /> : <p></p> }
    </form>
  )
};

export default CreatePost;
