import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import "../../Css/customerpage.css";
import Link from 'next/link';
import NavBar from '@/components/NavBar';
import ChatForm from '@/components/Chatform';

export default function CustomerPage() {
  const router = useRouter();
  const { id } = router.query;
  const [customer, setCustomer] = useState(null);
  const [complaint, setComplaint] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchCustomer() {
      try {
        const res = await fetch(`http://127.0.0.1:8090/api/collections/customer/records/${id}`);
        if (!res.ok) {
          throw new Error('Failed to fetch customer');
        }
        const data = await res.json();
        setCustomer(data);
        console.log(customer);
        fetchComplaint(id);
      } catch (err) {
        console.error(err);
        setError(err.message);
      }
    }

    async function fetchComplaint(customerId) {
      const res = await fetch(`http://127.0.0.1:8090/api/collections/conversations/records?customer_id=${customerId}`);
      const data = await res.json();
      setComplaint(data);
      console.log(data)
    }
    
    if (id) {
      fetchCustomer();
    }
  }, [id]);

  if (error) {
    return <div>Error: {error}</div>;
  }
  if (!customer) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <NavBar />
    <div className="container">
      <a href="/Home">
        <button className="home-button">Back</button>
      </a>
      <h1>Name: {customer.name}</h1>
      <div className="customer-info">
        <p><span className="label">Customer ID:</span> {id}</p>
        <p><span className="label">Age:</span> {customer.age}</p>
        <p><span className="label">Email:</span> {customer.email}</p>
        <p><span className="label">Phone:</span> {customer.phone}</p>
        <p><span className="label">Address:</span> {customer.address}</p>
        <p><span className="label">Country:</span> {customer.country}</p>
        <a href={complaint ? `/chats/${complaint.id}` : '#'}>
  <button>Message</button>
</a>
      </div>
    </div>
    </div>
  );
}



