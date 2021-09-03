import { FETCH_POSTS_REQUEST, FETCH_POSTS_FAILED, FETCH_POSTS_SUCCESS } from "../Types/PostsTypes";

export const FetchPostsRequest = () => {
  return{
    type: FETCH_POSTS_REQUEST
  }
}

export const FetchPostsSuccess = (posts, token) => {
  return{
    type: FETCH_POSTS_SUCCESS,
    posts,
    token
  }
}

export const FetchPostsFailed = (error) => {
  return{
    type: FETCH_POSTS_FAILED,
    error
  }
}

