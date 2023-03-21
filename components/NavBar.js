import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import apiRequest from '@/api/apiHelper';
import useLocalStorage from '@/api/uesLocalStorage';

export default function NavBar() {
  const [supportTeamId, setSupportTeamId] = useLocalStorage('supportTeamId', null); 
  const [supportTeamMember, setSupportTeamMember] = useState(null);

  useEffect(() => {
    if (typeof window === 'undefined') {
      return;
    }

    const fetchSupportTeamMember = async () => {
      try {
        const authToken = localStorage.getItem('authToken'); 
        if (!authToken) {
          return;
        }
    
        const data = await apiRequest(
          'GET',
          `/supportTeam/records/${supportTeamId}`,
          null,
          authToken
        );
        setSupportTeamMember(data);
      } catch (error) {
        console.error(error);
      }
    };
    
    

    fetchSupportTeamMember();
  }, [supportTeamId]);

  const router = useRouter();

  const handleSignOut = () => {
    localStorage.removeItem('authToken');
    localStorage.removeItem('supportTeamId'); 
    router.push('/');
  };

  return (
    <nav>
      <ul>
        <li>
          <a href="/Home">Customers</a>
        </li>
        <li>
          <a href="/Complaint">Complaints</a>
        </li>
        {/* <li>
          <a href="/">Sign in</a>
        </li>
        <li>
          <a href="/SignUp">Sign up</a>
        </li> */}
      </ul>
      <div className="right-items">
        {supportTeamMember && (
          <span className="support-team-member">
            Welcome: {supportTeamMember.username}
          </span>
        )}
        <button className="sign-out-button" onClick={handleSignOut}>
          Sign out
        </button>
      </div>
    </nav>
  );
}
