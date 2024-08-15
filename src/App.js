// App.js
import React, { useState, useEffect } from "react";
import axios from "axios";
import UserList from "./components/UserList";
import CreateUser from "./components/CreateUser";
import EditUser from "./components/EditUser";
import "./App.css";

const API_URL = "https://jsonplaceholder.typicode.com/users";

function App() {
  const [users, setUsers] = useState([]);
  const [editUser, setEditUser] = useState(null);

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    try {
      const response = await axios.get(API_URL);
      setUsers(response.data);
    } catch (error) {
      console.error("Error fetching users:", error);
    }
  };

  const addUser = async (newUser) => {
    try {
      const response = await axios.post(API_URL, newUser);
      setUsers([...users, response.data]);
    } catch (error) {
      console.error("Error creating user:", error);
    }
  };

  const updateUser = async (updatedUser) => {
    try {
      if (updatedUser) {
        const response = await axios.put(
          `${API_URL}/${updatedUser.id}`,
          updatedUser
        );
        setUsers(
          users.map((user) =>
            user.id === updatedUser.id ? response.data : user
          )
        );
        setEditUser(null);
      }
    } catch (error) {
      console.error("Error updating user:", error);
    }
  };

  const deleteUser = async (id) => {
    try {
      await axios.delete(`${API_URL}/${id}`);
      setUsers(users.filter((user) => user.id !== id));
    } catch (error) {
      console.error("Error deleting user:", error);
    }
  };

  return (
    <div>
      <h1 className="roboto-regular">Users Table</h1>

      <UserList users={users} onEdit={setEditUser} onDelete={deleteUser} />
      <CreateUser onAdd={addUser} />
      {editUser && (
        <EditUser
          user={editUser}
          onUpdate={updateUser}
          onCancel={() => setEditUser(null)}
        />
      )}
    </div>
  );
}

export default App;
