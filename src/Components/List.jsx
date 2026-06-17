import React from "react";

const List = ({ users, deleteUser, editUser }) => {
  return (
    <div>
      <table border={1}>
        <thead>
          <tr>
            <th>ID</th>
            <th>FName</th>
            <th>LName</th>
            <th>Email</th>
            <th>Income</th>
            <th>ContactNo</th>
            <th>Address</th>
            <th>Description</th>
            <th>Created on</th>
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
              <td>{user.income}</td>
              <td>{user.contactNo}</td>
              <td>{user.address}</td>
              <td>{user.description}</td>
              <td>{new Date(user.createdAt).toLocaleString()}</td>
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

export { List };
