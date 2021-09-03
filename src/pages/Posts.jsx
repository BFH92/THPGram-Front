import React, { useState, useEffect } from "react";
import {FetchPostsFailed, FetchPostsSuccess } from '../store/';
import { useDispatch, useSelector } from 'react-redux';
import uuid from "uuid";
import APIManager from '../services/Api/RailsApi/index'

import Post from '../components/Post'
const Posts = () => {

  const dispatch = useDispatch();
  const posts = useSelector(state=>state.posts)

  const [Posts, setPosts] = useState([])
  
  const getPosts = async() => {
    let response = await APIManager.getPosts()
    console.log(response);
    
    if (response.error) {
      console.log(response)
      dispatch(FetchPostsFailed(response.data.message));
    } else {
      console.log(response)
    
      setPosts(response.data)
      
    }
  }
  useEffect(()=> {
    getPosts();
  }, []);
  return (
    <div>
    {Posts? Posts.map((post)=>
      post!= null? post.username: ""
      ):"nop"}
      <Post/>
      <Post/>
      <Post/>
      <Post/>
    </div>
  );
}

export default Posts;
