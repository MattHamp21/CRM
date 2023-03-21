import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import "../../Css/customerpage.css";
import Link from 'next/link';
import NavBar from '@/components/NavBar';

export default function CustomerPage() {
  const router = useRouter();
  const { id } = router.query;
  const [customer, setCustomer] = useState(null);
  const [complaint, setComplaint] = useState(null);
  const [error, setError] = useState(null);

  const [editMode, setEditMode] = useState(false);
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [address, setAddress] = useState('');
  const [country, setCountry] = useState('');

  useEffect(() => {
    async function fetchCustomer() {
      try {
        const res = await fetch(`http://127.0.0.1:8090/api/collections/customer/records/${id}`);
        if (!res.ok) {
          throw new Error('Failed to fetch customer');
        }
        const data = await res.json();
        setCustomer(data);
        setName(data.name);
        setAge(data.age);
        setEmail(data.email);
        setPhone(data.phone);
        setAddress(data.address);
        setCountry(data.country);
        fetchComplaint(id);
      } catch (err) {
        console.error(err);
        setError(err.message);
      }
    }

    async function fetchComplaint(customerId) {
      const res = await fetch(`http://127.0.0.1:8090/api/collections/conversations/records?filter[customer_id]=${customerId}`);
      const data = await res.json();
      const conversation = data.items.find(item => item.customer_id === customerId);
      if (conversation) {
        setComplaint(conversation);
      } else {
        setComplaint(null);
      }
      console.log(data);
    }

    if (id) {
      fetchCustomer();
    }
  }, [id]);

  
  useEffect(() => {
    console.log("Updated complaint state: ", complaint);
  }, [complaint]);

  const handleCreateNewChat = async () => {
    const response = await fetch('http://127.0.0.1:8090/api/collections/conversations/records', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        customer_id: id,
        issue: 'New chat',
        date_started: new Date().toISOString(),
        resolved: false,
        messages: ''
      })
    });

    if (response.ok) {
      const newConversation = await response.json();
      router.push(`/chats/${newConversation.id}`);
    } else {
      console.error('Failed to create a new chat');
    }
  };

  async function handleFormSubmit(e) {
    e.preventDefault();

    try {
      const updatedCustomer = {
        ...customer,
        name,
        age,
        email,
        phone,
        address,
        country,
      };
      const response = await fetch(
        `http://127.0.0.1:8090/api/collections/customer/records/${id}`,
        {
          method: 'PATCH',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(updatedCustomer),
        }
      );

      if (response.ok) {
        setCustomer(updatedCustomer);
        setEditMode(false);
      } else {
        throw new Error('Failed to update customer');
      }
    } catch (error) {
      console.error(error);
    }
  }

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
        {editMode ? (
          <form onSubmit={handleFormSubmit}>
            <div className="customer-info">
              <label htmlFor="name">Name:</label>
              <input
                type="text"
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
              <label htmlFor="age">Age:</label>
              <input
                type="number"
                id="age"
                value={age}
                onChange={(e) => setAge(e.target.value)}
              />
              <label htmlFor="email">Email:</label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <label htmlFor="phone">Phone:</label>
              <input
                type="tel"
                id="phone"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
              />
              <label htmlFor="address">Address:</label>
              <input
                type="text"
                id="address"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
              />
              <label htmlFor="country">Country:</label>
              <input
                type="text"
                id="country"
                value={country}
                onChange={(e) => setCountry(e.target.value)}
              />
              <button type="submit">Save</button>
              <button type="button" onClick={() => setEditMode(false)}>
                Cancel
              </button>
            </div>
          </form>
        ) : (
          <div className="customer-info">
            <p><span className="label">Customer ID:</span> {id}</p>
            <p><span className="label">Age:</span> {customer.age}</p>
            <p><span className="label">Email:</span> {customer.email}</p>
            <p><span className="label">Phone:</span> {customer.phone}</p>
            <p><span className="label">Address:</span> {customer.address}</p>
            <p><span className="label">Country:</span> {customer.country}</p>
            <button onClick={() => setEditMode(true)}>Edit</button>
          </div>
        )}
        {complaint && (
          <Link href={`/chats/${complaint.id}`}>
            <button>Message</button>
          </Link>
        )}
        <button onClick={handleCreateNewChat} className="create-chat-button">Create New Chat</button>
      </div>
    </div>
  );
}




