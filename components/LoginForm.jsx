import { useState } from 'react';
import axios from 'axios';
import { useRouter } from 'next/router';
import '../Css/Loginform.css'

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

    const response = await axios.get('http://127.0.0.1:8090/api/collections/supportTeam/records', {
      params: {
        username,
        password,
      },
    });




    if (response.data.length > 0) {
      localStorage.setItem('authenticated', true);
      console.log(response.data);
      console.log(response.data);
      alert('Data Retrived')
      // Redirect the user to the home page
      router.push('/Home');
    } else {
      alert('Invalid username or password');
      console.log(response.data.username);

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
