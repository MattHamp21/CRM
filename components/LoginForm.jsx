import { useState } from 'react';
import { useRouter } from 'next/router';
import '../Css/Loginform.css';
import pb from './pocketbase';
import Link from 'next/link';


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
      const authData = await pb.collection('supportTeam').authWithPassword(username, password);
      localStorage.setItem('authenticated', true);
      localStorage.setItem('authToken', authData.token);
      localStorage.setItem('supportTeamId', authData.record.id); 
      console.log('AuthData', authData);
      router.push('/Home');
    } catch (error) {
      console.error(error);
      alert('Invalid username or password');
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
        <Link href="/SignUp">Sign Up</Link><br/>
      </form>
    </div>
  );
}
