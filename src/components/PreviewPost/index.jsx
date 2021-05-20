import React from 'react';

const PreviewPost = (props) => {

  return (
    <div className='post-container my-1'>
      <h3 className="inline">{props.data.text}</h3>
    </div>
  )
}

export default PreviewPost;
