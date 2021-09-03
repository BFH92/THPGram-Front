import { FETCH_USERS_REQUEST, FETCH_USERS_FAILED, FETCH_USERS_SUCCESS, REGISTER_USERS } from "../Types/UsersTypes";

export const FetchUsersRequest = () => {
  return{
    type: FETCH_USERS_REQUEST
  }
}

export const FetchUsersSuccess = (users, token) => {
  return{
    type: FETCH_USERS_SUCCESS,
    users,
    token
  }
}

export const FetchUsersFailed = (error) => {
  return{
    type: FETCH_USERS_FAILED,
    error
  }
}

