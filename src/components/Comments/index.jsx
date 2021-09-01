import React from 'react';
import Comment from './Comment';
import NewCommentForm from './NewCommentForm'
const index = () => {
  return (
    <div>
      Une série de commentaires 
      <Comment/>
      <Comment/>
      <Comment/>
      <NewCommentForm/>
    </div>
  );
}

export default index;
