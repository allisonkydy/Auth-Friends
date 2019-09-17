import React, { useState, useEffect } from 'react';
import { axiosWithAuth } from '../utils/axiosWithAuth';

const FriendsList = () => {
  const [friends, setFriends] = useState([]);
  const [newFriend, setNewFriend] = useState({ name: "", age: "", email: "" })

  useEffect(() => {
    axiosWithAuth().get('/friends')
      .then(res => {
        setFriends(res.data);
      })
      .catch(err => console.log(err))
  }, [])

  const handleChange = e => {
    setNewFriend({ ...newFriend, [e.target.name]: e.target.value })
  }

  const handleSubmit = e => {
    e.preventDefault();
    axiosWithAuth().post('/friends', { ...newFriend, id: Date.now() })
      .then(res => {
        setFriends(res.data)
      })
      .catch(err => console.log(err))
    setNewFriend({ name: "", age: "", email: "" });
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        Add New Friend
        <label>
          Name: 
          <input
            type="text"
            name="name"
            value={newFriend.name}
            onChange={handleChange}
          />
        </label>
        <label>
          Age: 
          <input
            type="number"
            name="age"
            value={newFriend.age}
            onChange={handleChange}
          />
        </label>
        <label>
          Email: 
          <input
            type="email"
            name="email"
            value={newFriend.email}
            onChange={handleChange}
          />
        </label>
        <button>Add friend</button>
      </form>
      {friends.map(friend => {
        return (
          <div key={friend.id}>
            <h2>{friend.name}</h2>
            <p>Age: {friend.age}</p>
            <p>{friend.email}</p>
          </div>
        )
      })}
    </div>
  )
}

export default FriendsList;
