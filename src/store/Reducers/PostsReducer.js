import { FETCH_POSTS_REQUEST, FETCH_POSTS_FAILED, FETCH_POSTS_SUCCESS } from "../Types/PostsTypes";

const initialStatePosts = {
  posts: []
};

const PostsReducer= (state = initialStatePosts, action) => {
  console.log("Reducer Messages launched")
  console.log(action.posts)
  switch(action.type) {
    case  FETCH_POSTS_REQUEST:
      return {
         state
      };
    case  FETCH_POSTS_SUCCESS:
      return {
        ...state,
        posts: [action.POSTS]
      }
    case  FETCH_POSTS_FAILED:
        return {
        ...state,
        error: action.error
      };
      default:
        return state;
    }
}

export default PostsReducer