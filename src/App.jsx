import React from 'react';
import { useState } from 'react';
import "./App.css";

const App = () => {
	const [firstName,setFirstName] = useState("");
	const [lastName,setLastName] = useState("");
	const [email,setEmail] = useState("");
	const [password,setPassword] = useState("");
	const [contactNo,setContactNo] = useState("");
	const [address,setAddress] = useState("");
	const [description,setDescription] = useState("");
  const [users,setUsers] = useState([]);
  const [editUserId, setEditUserId] = useState(null);

  const adduser = () => {

  if (editUserId !== null) {

    const updatedUsers = users.map((user) => {

      if (user.id === editUserId) {

        console.log("User with spread operator:", { ...user, firstName, lastName, email, contactNo, address, description });
        console.log("User without spread operator:", { user,firstName, lastName, email, contactNo, address, description });

        return {
          ...user,
          firstName,
          lastName,
          email,
          contactNo,
          address,
          description
        };
      }

      return user;
    });

    setUsers(updatedUsers);
    setEditUserId(null);

  } else {

    const user = {
      id: Date.now(),
      firstName,
      lastName,
      email,
      contactNo,
      address,
      description
    };

    setUsers([...users, user]);
    // setUsers((prevUsers) => [...prevUsers, user]);
  }

  setFirstName("");
  setLastName("");
  setEmail("");
  setPassword("");
  setContactNo("");
  setAddress("");
  setDescription("");
};
const deleteUser = (id) => {
  const updatedUsers = users.filter(
    (user) => user.id !== id
  );

  setUsers(updatedUsers);
};
    const editUser = (user) => {
    setFirstName(user.firstName);
    setLastName(user.lastName);
    setEmail(user.email);
    setContactNo(user.contactNo);
    setAddress(user.address);
    setDescription(user.description);

  setEditUserId(user.id);
};
return(
	<div className='form-container'>
	  <form>
	  {
		  <div>
        <h1>Form using React</h1>
		  	<label htmlFor="firstname"> First Name </label>
		  	<input type = "text"  placeholder='First Name' value={firstName} onChange={(e) => setFirstName(e.target.value)} required/>
        <br /><br />

        <label htmlFor="lastname"> Last Name </label>
		  	<input type = "text"  placeholder='Last Name' value={lastName} onChange={(e) => setLastName(e.target.value)} required/>
        <br /><br />

        <label htmlFor="email"> Email </label>
			  <input type="text"  placeholder='Enter Email' value={email} onChange={(e) => setEmail(e.target.value)} required/>
        <br /><br/>

        <label htmlFor="password"> Password </label>
	  		<input type="password"  placeholder='Enter Password' value={password} onChange={(e) => setPassword(e.target.value)} required/>
        <br /><br/>
        
        <label htmlFor="contactno"> Contact Number </label>
		  	<input type="text"  placeholder='Enter Contact Number' value={contactNo} onChange={(e) => setContactNo(e.target.value)} required/>
        <br /><br />

        <label htmlFor="address"> Address </label>
	  		<input type="text"  placeholder='Enter Address' value={address} onChange={(e) => setAddress(e.target.value)} required/>
        <br /><br /> 

        <label htmlFor="description"> Description </label>
			  <textarea placeholder='Enter Description' value={description} onChange={(e) => setDescription(e.target.value)} />
        <br /><br />
        {/* <button type="button" onClick={adduser}>Submit</button> */}
        <button type="button" onClick={adduser}>
            {editUserId !== null ? "Update" : "Submit"}
        </button>
        <br /><br />
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
            {users.map((user, index) => (
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
)
} 

export default App