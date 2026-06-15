import React from "react";
import { useState } from "react";
import "./App.css";
import {Userform} from "./Components/Userform";
import {List} from "./Components/List";

const App = () => {
  const [users, setUsers] = useState([]);
  const [editUserId, setEditUserId] = useState(null);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    contactNo: "",
    address: "",
    description: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const adduser = () => {
    if (editUserId !== null) {
      const updatedUsers = users.map((user) => {
        if (user.id === editUserId) {
          return {
            ...user,
            ...formData,
          };
        }

        return user;
      });

      setUsers(updatedUsers);
      setEditUserId(null);
    } 
    else {
      const user = {
        id: Date.now(),
        ...formData,
      };
      setUsers([...users, user]);
    }

    setFormData({
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      contactNo: "",
      address: "",
      description: "",
    });
  };

  const deleteUser = (id) => {
    const updatedUsers = users.filter((user) => user.id !== id);

    setUsers(updatedUsers);
  };

  const editUser = (user) => {
    setFormData({
      firstName: user.firstName,
      lastName: user.lastName,
      email: user.email,
      password: user.password || "",
      contactNo: user.contactNo,
      address: user.address,
      description: user.description,
    });
    setEditUserId(user.id);
  };

  return (
    <div>
      <Userform
        formData={formData}
        handleChange={handleChange}
        adduser={adduser}
        editUserId={editUserId}
      />
      <List 
        users={users} 
        deleteUser={deleteUser} 
        editUser={editUser} />
    </div>
  );
};

export default App;
