import React from "react";
import { useState } from "react";

const Userform = ({ formData, handleChange, adduser, editUserId }) => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div>
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
            <br />

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
            <br />

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
            <br />

            <label htmlFor="password"> Password </label>
            <input
              type={showPassword ? "text" : "password"}
              name="password"
              placeholder="Enter Password"
              value={formData.password}
              onChange={handleChange}
              required
            />
            <br />
            <br />

            <label htmlFor="income"> Income </label>
            <input 
              type="text"
              name="income"
              placeholder="Enter Income"
              vlaue={formData.income}
              onChange={handleChange}
              required
            />
            <br/>
            <br />

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
            <br />

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
            <br />

            <label htmlFor="description"> Description </label>
            <textarea
              placeholder="Enter Description"
              name="description"
              value={formData.description}
              onChange={handleChange}
            />
            <br />
            <br />

            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? "Hide" : "Show"}
            </button>

            <button type="button" onClick={adduser}>
              {editUserId !== null ? "Update" : "Submit"}
            </button>
            <br />
            <br />

            
          </div>
        }
      </form>
    </div>
  );
};

export { Userform };
