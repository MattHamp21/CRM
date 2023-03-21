import { useState, useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import '../Css/ComplaintCard.css';

async function getComplaint() {
  const res = await fetch('http://127.0.0.1:8090/api/collections/conversations/records?page=1&perPage=30',
  { cache: 'no-store' });
  const data = await res.json();
  return data?.items;
}

export default function ComplaintCard(){
  const [convos, setConvos] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const data = await getComplaint();
      setConvos(data);
    }
    fetchData();
  }, []);

  const handleDelete = async (id) => {
    const res = await fetch(`http://127.0.0.1:8090/api/collections/conversations/records/${id}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json'
      }
    });
  
    if (res.ok) {
      console.log(`Conversation with ID ${id} was successfully deleted`);
      window.location.reload();
    } else {
      console.error(`Failed to delete conversation with ID ${id}`);
    }
  };

  const handleEdit = async (id, updatedConvo) => {
    const res = await fetch(`http://127.0.0.1:8090/api/collections/conversations/records/${id}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(updatedConvo)
    });
  
    if (res.ok) {
      console.log(`Conversation with ID ${id} was successfully updated`);
    } else {
      console.error(`Failed to update conversation with ID ${id}`);
    }
  };

  return (
    <div className="complaint-card-container">
      {convos?.map((convo) => (
        <Convo key={convo.id} convo={convo} onDelete={handleDelete} onEdit={handleEdit} setConvos={setConvos} />
      ))}
    </div>
  );
}



function Convo({ convo, onDelete, onEdit, setConvos }) {
  const { id, messages, date_started, resolved, issue, customer_id } = convo || {};
  const router = useRouter();
  const [customerData, setCustomerData] = useState(null);
  const [editFormVisible, setEditFormVisible] = useState(false);
  const [formValues, setFormValues] = useState({ messages, date_started, resolved, issue, customer_id });

  async function fetchCustomerData(customerId) {
    try {
      const res = await fetch(`http://127.0.0.1:8090/api/collections/customer/records/${customerId}`);
      if (!res.ok) {
        throw new Error('Failed to fetch customer data');
      }
      const data = await res.json();
      setCustomerData(data);
    } catch (err) {
      console.error(err);
    }
  }

  useEffect(() => {
    fetchCustomerData(customer_id);
  }, [customer_id]);

  const handleShowForm = (e) => {
    setEditFormVisible(true);
    e.stopPropagation();
  };

  const handleHideForm = () => {
    setEditFormVisible(false);
  };

  const isResolved = () => {
    if (resolved === true) {
      return <span className="resolved-true">Yes</span>;
    } else {
      return <span className="resolved-false">No</span>;
    }
  };

  const handleFormChange = (event) => {
    event.stopPropagation();
    setFormValues({
      ...formValues,
      [event.target.name]: event.target.value
    });
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    await onEdit(id, formValues);
    setEditFormVisible(false);
  };

  const handleView = () => {
    router.push(`/conversations/${id}`);
  };

  const formattedDate = new Date(date_started).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'short',
    day: 'numeric'
  });

  const handleDelete = () => {
    onDelete(id);
  };

  return (
    <div className="complaint-card">
      {customerData && <h3>Customer Name: {customerData.name}</h3>}

      <h3>Issue: {issue}</h3>
      <h3>Date started: {formattedDate}</h3>
      <h3>Resolved: {isResolved()}</h3>
      <h3>Customer ID: {customer_id}</h3>
      <div className="buttons">
        <button onClick={handleShowForm}>Edit</button>
        <button onClick={handleDelete}>Delete</button>
        <button type="button" onClick={handleView}>View</button>
        <a href={`/chats/${id}`}>
        <button>Message</button>
        </a>
      </div>
      {editFormVisible && (
        <form onSubmit={handleFormSubmit}>
          <input
            type="text"
            name="issue"
            value={formValues.issue}
            onChange={handleFormChange}
          />

          <input
            type="checkbox"
            name="resolved"
            checked={formValues.resolved}
            onChange={(event) => {
              setFormValues({
                ...formValues,
                resolved: event.target.checked
              });
            }}
          />
    <button type="submit" onClick={handleFormSubmit}>Save Changes</button>
    <button type="button" onClick={handleHideForm}>Cancel</button>
    </form>
    )}
    </div>
    )
}