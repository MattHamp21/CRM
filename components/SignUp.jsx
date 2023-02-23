import { useState } from 'react';
import axios from 'axios';
import '../Css/Loginform.css'

export default function SignupPage() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };


  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };


  

  const handleSubmit = async (event) => {
    event.preventDefault();

    const response = await axios.post('http://127.0.0.1:8090/api/collections/supportTeam/records', {
      username,
      password,
    });

    console.log(response.data);
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