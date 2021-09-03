import React, { useState, useEffect } from "react";
import {FetchUsersFailed, FetchUsersSuccess } from '../store/';
import { useDispatch, useSelector } from 'react-redux';
import uuid from "uuid";

const Users = () => {
  const dispatch = useDispatch();
  const users = useSelector(state => state.users)
  useEffect(() => {
    dispatch(FetchUsers());
  }, [dispatch]);
  const [Users, setUsers] = useState(users);
  const FetchUsers =()=> {
    return ()=>{
    fetch('http://localhost:4000/users', {
        method: 'get',
        headers: {
          'Content-Type':'application/json'
        },
      })
      .then((response) => response.json())
      .then((response) => {
        if (response.error) {
          console.log(response)
          dispatch(FetchUsersFailed(response.message));
        } else {
          console.log(response)
        
          setUsers(response)
          dispatch(FetchUsersSuccess(Users))
          
    
        }
      })
    }
  }

  return (
    <div>
      <div>
      

          hey heye
          {Users? 
          Users.map((user) => (
            <div key={uuid()}>
              <div>
                <p>{user.name}</p>
                {user.posts.map((post)=>
                post.description)
              }
                <p>HA</p>
              </div>
            </div>
          ))
        : "NOP"}
          </div>
    </div>
  );
}

export default Users;
