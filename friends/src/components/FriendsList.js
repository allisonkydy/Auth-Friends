import React, { useState, useEffect } from 'react';
import { axiosWithAuth } from '../utils/axiosWithAuth';

import FriendForm from './FriendForm';
import Friend from './Friend';

const FriendsList = () => {
  const [friends, setFriends] = useState([]);

  useEffect(() => {
    axiosWithAuth().get('/friends')
      .then(res => {
        setFriends(res.data);
      })
      .catch(err => console.log(err))
  }, [])

  const addFriend = newFriend => {
    axiosWithAuth().post('/friends', newFriend)
      .then(res => {
        setFriends(res.data)
      })
      .catch(err => console.log(err))
  }

  const deleteFriend = id => {
    axiosWithAuth().delete(`/friends/${id}`)
      .then(res => {
        setFriends(res.data)
      })
      .catch(err => console.log(err))
  }

  return (
    <div>
      <FriendForm addFriend={addFriend} />
      {friends.map(friend => {
        return (
          <Friend key={friend.id} friend={friend} deleteFriend={deleteFriend} />
        )
      })}
    </div>
  )
}

export default FriendsList;
