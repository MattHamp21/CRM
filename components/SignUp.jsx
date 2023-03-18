import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../Css/Loginform.css'

export default function SignupPage() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [existingUsernames, setExistingUsernames] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios.get('http://127.0.0.1:8090/api/collections/supportTeam/records');
      setExistingUsernames(Array.from(result.data));
    };

    fetchData();
  }, []);

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (username === '' || password === '') {
        // Display an error message or do nothing
        alert('Enter a username and password');
        return;
    } 
    if (username.length < 8 || password.length < 8) {
      alert("Username and password must be at least 8 characters long");
      return;
    }

    const usernameAlreadyExists = existingUsernames.find(record => record.username === username);
    if (usernameAlreadyExists) {
      alert("Username already exists");
      return;
    }

    const response = await axios.post('http://127.0.0.1:8090/api/collections/supportTeam/records', {
        username,
        password,
    });
    console.log(response.data);
    window.location.assign('/');
  };


  return (
    <div className="signup-form">
      <form onSubmit={handleSubmit}>
        <div className="form-field">
          <h3>Sign up below</h3>
          <label htmlFor="username">Username:</label>
          <input type="text" id="username" value={username} onChange={handleUsernameChange} />
        </div>
        <div className="form-field">
          <label htmlFor="password">Password:</label>
          <input type="password" id="password" value={password} onChange={handlePasswordChange} />
        </div>
        <button type="submit">Sign Up</button>
      </form>
    </div>
  );
}