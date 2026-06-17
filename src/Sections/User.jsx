import React, { useState, useEffect } from "react";
import { Userform } from "../Components/Userform";
import { List } from "../Components/list";

const User = () => {
  const [users, setUsers] = useState([]);
  const [editUserId, setEditUserId] = useState(null);
  const [search, setSearch] = useState("");
  const [filteredUsers, setFilteredUsers] = useState([]);
  const [minIncome, setMinIncome] = useState("");
  const [maxIncome, setMaxIncome] = useState("");
  const [sortBy, setSortBy] = useState("");
  const [selectedDate, setSelectedDate] = useState("");

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    income: "",
    contactNo: "",
    address: "",
    description: "",
    createdAt: "",
  });

  useEffect(() => {
    const savedUsers = localStorage.getItem("users");

    if (savedUsers) {
      setUsers(JSON.parse(savedUsers));
    }
  }, []);

  useEffect(() => {
    if (
      search === "" &&
      minIncome === "" &&
      maxIncome === "" &&
      sortBy === ""
    ) {
      setFilteredUsers(users);
      return;
    }

    let filtered = users.filter(
      (user) =>
        user.firstName.toLowerCase().includes(search.toLowerCase()) ||
        user.lastName.toLowerCase().includes(search.toLowerCase()),
      // user.email.toLowerCase().includes(search.toLowerCase()),
    );

    if (minIncome !== "") {
      filtered = filtered.filter(
        (user) => Number(user.income) >= Number(minIncome),
      );
    }
    if (maxIncome !== "") {
      filtered = filtered.filter(
        (user) => Number(user.income) <= Number(maxIncome),
      );
    }

    if (sortBy === "nameAsc") {
      filtered.sort((a, b) => {
        if (a.firstName > b.firstName) return 1;
        if (a.firstName < b.firstName) return -1;
        return 0;
      });
    }
    if (sortBy === "nameDesc") {
      filtered.sort((a, b) => {
        if (a.firstName > b.firstName) return -1;
        if (a.firstName < b.firstName) return 1;
        return 0;
      });
    }

    if (sortBy === "incomeAsc") {
      filtered.sort((a, b) => Number(a.income) - Number(b.income));
    }

    if (sortBy === "incomeDesc") {
      filtered.sort((a, b) => Number(b.income) - Number(a.income));
    }

    if (sortBy === "newest") {
      filtered.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
    }

    if (sortBy === "oldest") {
      filtered.sort((a, b) => new Date(a.createdAt) - new Date(b.createdAt));
    }

    if (selectedDate !== "") {
      filtered = filtered.filter(
        (user) => user.createdAt.split("T")[0] === selectedDate,
      );
    }

    setFilteredUsers(filtered);
  }, [search, users, minIncome, maxIncome, sortBy, selectedDate]);

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
    } else {
      const user = {
        id: Date.now(),
        ...formData,
        createdAt: new Date(),
      };

      const updatedUsers = [...users, user];
      setUsers(updatedUsers);
      localStorage.setItem("users", JSON.stringify(updatedUsers));
    }

    setFormData({
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      income: "",
      contactNo: "",
      address: "",
      description: "",
      createdAt: "",
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
      income: user.income,
      contactNo: user.contactNo,
      address: user.address,
      description: user.description,
      createdAt: user.createdAt,
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
        users={filteredUsers}
        deleteUser={deleteUser}
        editUser={editUser}
      ></List>
      <br />
      <br />

      <input
        type="number"
        placeholder="Min Income"
        value={minIncome}
        onChange={(e) => setMinIncome(e.target.value)}
      />

      <input
        type="number"
        placeholder="Max Income"
        value={maxIncome}
        onChange={(e) => setMaxIncome(e.target.value)}
      />

      <input
        type="date"
        value={selectedDate}
        onChange={(e) => setSelectedDate(e.target.value)}
      />

      <select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
        <option value="">Select Sort</option>
        <option value="nameAsc">Name A-Z</option>
        <option value="nameDesc">Name Z-A</option>
        <option value="incomeAsc">Income Low-High</option>
        <option value="incomeDesc">Income High-Low</option>
        <option value="newest">Newest First</option>
        <option value="oldest">Oldest First</option>
      </select>

      <input
        type="text"
        placeholder="Search User"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      <button
        onClick={() => {
          setSearch("");
          setMinIncome("");
          setMaxIncome("");
        }}
      >
        Clear Search
      </button>
    </div>
  );
};

export default User;

// Have to add date sorting also and check what functions
