import React from "react";
import { useState } from "react";
import "./App.css";

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
    <div className="form-container">
      <form>
        {
          <div>
            <h1>Form using React</h1>
            <label htmlFor="firstname"> First Name </label>
            <input
              type="text"
              name="firstName"
              placeholder="First Name"
              value={formData.firstName}
              onChange={handleChange}
            />
            <br />
            {/* <br /> */}

            <label htmlFor="lastname"> Last Name </label>
            <input
              type="text"
              name="lastName"
              placeholder="Last Name"
              value={formData.lastName}
              onChange={handleChange}
              required
            />
            <br />
            {/* <br /> */}

            <label htmlFor="email"> Email </label>
            <input
              type="text"
              name="email"
              placeholder="Enter Email"
              value={formData.email}
              onChange={handleChange}
              required
            />
            <br />
            {/* <br /> */}

            <label htmlFor="password"> Password </label>
            <input
              type="password"
              name="password"
              placeholder="Enter Password"
              value={formData.password}
              onChange={handleChange}
              required
            />
            <br />
            {/* <br /> */}

            <label htmlFor="contactno"> Contact Number </label>
            <input
              type="text"
              name="contactNo"
              placeholder="Enter Contact Number"
              value={formData.contactNo}
              onChange={handleChange}
              required
            />
            <br />
            {/* <br /> */}

            <label htmlFor="address"> Address </label>
            <input
              type="text"
              name="address"
              placeholder="Enter Address"
              value={formData.address}
              onChange={handleChange}
              required
            />
            <br />
            {/* <br /> */}

            <label htmlFor="description"> Description </label>
            <textarea
              placeholder="Enter Description"
              name="description"
              value={formData.description}
              onChange={handleChange} 
            />
            <br />
            {/* <br /> */}

            <button type="button" onClick={adduser}>
              {editUserId !== null ? "Update" : "Submit"}
            </button>
            <br />
            <br />
          </div>
        }
      </form>
      <table border={1}>
        <thead>
          <tr>
            <th>ID</th>
            <th>FName</th>
            <th>LName</th>
            <th>Email</th>
            <th>ContactNo</th>
            <th>Address</th>
            <th>Description</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id}>
              <td>{user.id}</td>
              <td>{user.firstName}</td>
              <td>{user.lastName}</td>
              <td>{user.email}</td>
              <td>{user.contactNo}</td>
              <td>{user.address}</td>
              <td>{user.description}</td>
              <td>
                <button onClick={() => deleteUser(user.id)}>Delete</button>
              </td>
              <td>
                <button onClick={() => editUser(user)}>Edit</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default App;
