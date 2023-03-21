import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import NavBar from '@/components/NavBar';


export default function ComplaintPage() {
  const router = useRouter();
  const { id } = router.query;
  const [complaint, setComplaint] = useState(null);
  const [customer, setCustomer] = useState(null);
  const [error, setError] = useState(null);


  useEffect(() => {
    const token = localStorage.getItem('authToken');
    if (!token) {
      router.push('/');
    }
  }, []);

  async function fetchCustomer(customerId) {
    const res = await fetch(`http://127.0.0.1:8090/api/collections/customer/records/${customerId}`);
    const data = await res.json();
    console.log("Customer data:", data);
    console.log(customerId);
    setCustomer(data);
  }

  async function fetchComplaint() {
    try {
      const res = await fetch(`http://127.0.0.1:8090/api/collections/conversations/records/${id}?populate=supportTeamMember`); 
      if (!res.ok) {
        throw new Error('Failed to fetch complaint');
      }
      const data = await res.json();
      console.log("Complaint data:", data);
      setComplaint(data);
      fetchCustomer(data.customer_id);
    } catch (err) {
      console.error(err);
      setError(err.message);
    }
  }
  
  

  useEffect(() => {
    if (id) {
      fetchComplaint();
    }
  }, [id]);

  if (error) {
    return <div>Error: {error}</div>;
  }
  if (!complaint) {
    return <div>Loading...</div>;
  }

  const isResolved = () => {
    if (complaint.resolved === true) {
      return <span className="resolved-true">Yes</span>;
    } else {
      return <span className="resolved-false">No</span>;
    }
  };


  async function markAsResolved() {
    try {
      const updatedComplaint = { ...complaint, resolved: true };
      const response = await fetch(`http://127.0.0.1:8090/api/collections/conversations/records/${id}`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(updatedComplaint),
      });

      if (response.ok) {
        setComplaint(updatedComplaint);
        console.log(response)
        alert('Complaint marked as resolved');
      } else {
        throw new Error('Failed to update the complaint');
      }
    } catch (error) {
      console.error(error);
      alert('An error occurred while trying to update the complaint');
    }
  }

  return (
    <div>
      <NavBar />
      <div className="container-complaint">
        <a href="/Complaint">
          <button className="home-button-comp">Back</button>
        </a>
        {/* <h1>Complaint: {id}</h1> */}
        <div className="complaint-info">
          {
            customer && (
              <p>
                <span className="label-covo">Customer:</span>{" "}
                <a href={`/customers/${customer.id}`}>{customer.name}</a>
              </p>
            )
          }
          <p><span className="label-covo">Issue:</span> {complaint.issue}</p>
          <p>Resolved: {isResolved()}</p>
          <p><span className="label-covo">Date Created:</span> {new Date(complaint.created).toLocaleDateString()}</p>
          <p><span className="label-covo">Date Updated:</span> {new Date(complaint.updated).toLocaleDateString()}</p>
          <a href={`/chats/${id}`}>
            <button>Message</button>
          </a>
          {complaint.resolved === false && (
            <button onClick={markAsResolved}>Mark as Resolved</button>
          )}
        </div>
      </div>
    </div>
  )}
