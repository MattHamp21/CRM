import React, { useState } from 'react';
import '../Css/Signup.css';
import pb from './pocketbase';
import Link from 'next/link';


export default function SignupPage() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [passwordConfirm, setPasswordConfirm] = useState('');

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handlePasswordConfirmChange = (event) => {
    setPasswordConfirm(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (username === '' || password === '' || passwordConfirm === '') {
      alert('Enter a username and password');
      return;
    }
    if (username.length < 8 || password.length < 8) {
      alert("Username and password must be at least 8 characters long");
      return;
    }
    if (password !== passwordConfirm) {
      alert("Password and password confirmation do not match");
      return;
    }

    try {
      const newUser = await pb.collection('supportTeam').create({
        username,
        password,
        passwordConfirm,
      });
      console.log(newUser);
      window.location.assign('/');
    } catch (error) {
      if (error.response && error.response.status === 409) {
        alert("Username already exists");
      } else {
        console.error(error);
        alert("An error occurred while trying to create the user");
      }
    }
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
        <div className="form-field">
          <label htmlFor="passwordConfirm">Confirm Password:</label>
          <input type="password" id="passwordConfirm" value={passwordConfirm} onChange={handlePasswordConfirmChange} />
        </div>
        <button type="submit">Sign Up</button>
        <Link href="/"> Login</Link>
      </form>
    </div>
  );
}
