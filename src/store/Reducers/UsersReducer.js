import { FETCH_USERS_REQUEST, FETCH_USERS_FAILED, FETCH_USERS_SUCCESS } from "../Types/UsersTypes";

const initialStateUser = {
  users: []
};

const UsersReducer= (state = initialStateUser, action) => {
  console.log("Reducer Messages launched")
  console.log(action.users)
  switch(action.type) {
    case  FETCH_USERS_REQUEST:
      return {
         state
      };
    case  FETCH_USERS_SUCCESS:
      return {
        ...state,
        users: [action.users]
      }
    case  FETCH_USERS_FAILED:
        return {
        ...state,
        error: action.error
      };
      default:
        return state;
    }
}

export default UsersReducer