import { useState } from 'react';
import axios from 'axios';
import { useRouter } from 'next/router';
import '../Css/Loginform.css'
import { json } from 'react-router-dom';

export default function LoginPage() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const router = useRouter();

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
  
    try {
      const response = await axios.get(`http://127.0.0.1:8090/api/collections/supportTeam/records?username=${username}&password=${password}`);
  
      if (response.data.items[0]) {
        const record = response.data.items[0];
        if (record.username === username && record.password === password) {
          localStorage.setItem('authenticated', true);
          localStorage.setItem('supportTeamId', record.id)
          router.push('/Home');
        } else {
          alert('Invalid username or password1');
        }
      } else {
        alert('Invalid username or password');        
      }
  
    } catch (error) {
      console.error(error);
      alert('An error occurred while trying to retrieve the data');
    }
  };

  return (
    <div className="login-form">
      <form onSubmit={handleSubmit}>
        <div className="form-field">
          <h3>Login below</h3>
          <label htmlFor="username">Username:</label>
          <input type="text" id="username" value={username} onChange={handleUsernameChange} />
        </div>
        <div className="form-field">
          <label htmlFor="password">Password:</label>
          <input type="password" id="password" value={password} onChange={handlePasswordChange} />
        </div>
        <button type="submit">Log In</button>
      </form>
    </div>
  );
}
