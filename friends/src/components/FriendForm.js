import React, { useState } from 'react';

const FriendForm = (props) => {
  const { addFriend } = props;
  const [newFriend, setNewFriend] = useState({ name: "", age: "", email: "" })

  const handleChange = e => {
    setNewFriend({ ...newFriend, [e.target.name]: e.target.value })
  }

  const handleSubmit = e => {
    e.preventDefault();
    addFriend({...newFriend, id: Date.now() })
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
    </div>
  )
}

export default FriendForm;
