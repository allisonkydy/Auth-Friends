import React, { useState, useEffect } from 'react';

const FriendForm = (props) => {
  const { addFriend, editFriend, friendToEdit } = props;
  const [newFriend, setNewFriend] = useState({ name: "", age: "", email: "" })

  const handleChange = e => {
    setNewFriend({ ...newFriend, [e.target.name]: e.target.value })
  }

  const handleSubmit = e => {
    e.preventDefault();
    if(friendToEdit) {
      editFriend(newFriend)
    } else {
      addFriend({...newFriend, id: Date.now() })
    }
    setNewFriend({ name: "", age: "", email: "" });
  }

  useEffect(() => {
    if (friendToEdit) setNewFriend({...friendToEdit})
  }, [friendToEdit])

  return (
    <div>
      <form onSubmit={handleSubmit}>
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
        <button>{friendToEdit ? "edit friend" : "add friend"}</button>
      </form>
    </div>
  )
}

export default FriendForm;
