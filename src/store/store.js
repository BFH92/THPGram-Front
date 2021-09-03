import UsersReducer from "./Reducers/UsersReducer";
import { createStore} from 'redux';
import thunkMiddleware from 'redux-thunk'
import { applyMiddleware } from 'redux';
import { compose } from 'redux';
import PostsReducer from "./Reducers/PostsReducer";
import { combineReducers } from 'redux';


const rootReducer = combineReducers({
  posts: PostsReducer,
  users: UsersReducer,
})

export let store = createStore(rootReducer,compose(applyMiddleware(thunkMiddleware)))

