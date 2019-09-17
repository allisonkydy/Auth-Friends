import React, { useState, useEffect } from 'react';
import { axiosWithAuth } from '../utils/axiosWithAuth';

import FriendForm from './FriendForm';

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
          <div key={friend.id}>
            <h2>{friend.name}</h2>
            <p>Age: {friend.age}</p>
            <p>{friend.email}</p>
            <button onClick={() => deleteFriend(friend.id)}>Delete friend</button>
          </div>
        )
      })}
    </div>
  )
}

export default FriendsList;
