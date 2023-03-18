import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';

import "../Css/Navbar.css"

export default function NavBar() {
  const [supportTeamMember, setSupportTeamMember] = useState(null);

  useEffect(() => {
    if (typeof window === 'undefined') {
      return;
    }

    // Fetch the support team member's data here and update the state
    async function fetchSupportTeamMember() {
      const supportTeamId = localStorage.getItem('supportTeamId');
      
      if (!supportTeamId) {
        return;
      }

      // Replace the URL with the correct endpoint for fetching support team member's data
      const res = await fetch(`http://127.0.0.1:8090/api/collections/supportTeam/records/${supportTeamId}`);
      const data = await res.json();
      setSupportTeamMember(data);
    }

    fetchSupportTeamMember();
  }, []);

  const router = useRouter();

  const handleSignOut = () => {
    // Clear authentication tokens (assuming you store them in local storage)
    localStorage.removeItem('authToken');
    localStorage.removeItem('supportTeamId'); // Remove the stored support team member ID

    // Redirect to the sign-in page
    router.push('/');
  };

  return (
    <nav>
      <ul>
        <li>
          <a href="/Home">
            Customers
          </a>
        </li>
        <li>
          <a href="/Complaint">
            Complaint
          </a>
        </li>
        <li>
          <a href="/">
            Sign in
          </a>
        </li>
        <li>
          <a href="/SignUp">
            Sign up
          </a>
        </li>
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
