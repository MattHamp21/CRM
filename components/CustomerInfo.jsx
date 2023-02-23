import React, { useState, useEffect } from 'react';
import "../Css/Customer_info.css"




async function getCustomer() {
  const res = await fetch('http://127.0.0.1:8090/api/collections/customer/records?page=1&perPage=30',
  { cache: 'no-store'});
  const data = await res.json()
  return data?.items;
}

function Customer({ cus, onDelete, onEdit, onUpdate }) {
  const [editing, setEditing] = useState(false);
  const [name, setName] = useState(cus.name);
  const [age, setAge] = useState(cus.age);
  const [phone, setPhone] = useState(cus.phone);
  const [email, setEmail] = useState(cus.email);
  const [address, setAddress] = useState(cus.address);
  const [country, setCountry] = useState(cus.country);

  const handleDelete = async () => {
    const res = await fetch(`http://127.0.0.1:8090/api/collections/customer/records/${cus.id}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json'
      }
    });

    if (res.ok) {
      // If the deletion is successful, remove the customer from the list
      onDelete(cus.id);
    } else {
      console.error('Failed to delete customer');
    }
  };

  const handleEdit = () => {
    setEditing(true);
  };

  const handleCancel = () => {
    setEditing(false);
  };

  const handleUpdate = async () => {
    const res = await fetch(`http://127.0.0.1:8090/api/collections/customer/records/${cus.id}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        name,
        age,
        phone,
        email,
        address,
        country
      })
    });
  
    if (res.ok) {
      setEditing(false);
      onUpdate(cus.id, {
        id: cus.id,
        name,
        age,
        phone,
        email,
        address,
        country,
      });
    } else {
      console.error('Failed to update customer');
    }
  };
  
  return (
    <tr>
      <td>
        {editing ? (
          <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
        ) : (
          <a href={`/customers/${cus.id}`}>
            <a>{cus.name}</a>
          </a>
        )}
      </td>
      <td>
        {editing ? (
          <input type="text" value={age} onChange={(e) => setAge(e.target.value)} />
        ) : (
          cus.age
        )}
      </td>
      <td>
        {editing ? (
          <input type="text" value={phone} onChange={(e) => setPhone(e.target.value)} />
        ) : (
          cus.phone
        )}
      </td>
      <td>
        {editing ? (
          <input type="text" value={email} onChange={(e) => setEmail(e.target.value)} />
        ) : (
          cus.email
        )}
      </td>
      <td>
        {editing ? (
          <input type="text" value={address} onChange={(e) => setAddress(e.target.value)} />
        ) : (
          cus.address
        )}
      </td>
      <td>
        {editing ? (
          <input type="text" value={country} onChange={(e) => setCountry(e.target.value)} />
        ) : (
          cus.country
        )}
      </td>
      <td>
      {editing ? (
  <>
    <button onClick={() => handleUpdate(cus.id, { name, age, phone, email, address, country })}>Save</button>
    <button onClick={handleCancel}>Cancel</button>
  </>
) : (
  <>
    <button onClick={handleEdit} >Edit</button>
    <button onClick={handleDelete}>Delete</button>
  </>
        )}
      </td>
    </tr>
  );
}


export default function CustomerList(){
  const [customers, setCustomers] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const data = await getCustomer();
      setCustomers(data);
    }
    fetchData();
  }, []);

  const handleDelete = (id) => {
    setCustomers(customers.filter(c => c.id !== id));
  };

  const handleEdit = (id) => {
    setCustomers(customers.map(c => {
      if (c.id === id) {
        return { ...c, editing: true };
      }
      return c;
    }));
  };

  const handleUpdate = (id, updatedCustomer) => {
    const customerIndex = customers.findIndex(c => c.id === id);
  
    if (customerIndex !== -1) {
      setCustomers([
        ...customers.slice(0, customerIndex),
        updatedCustomer,
        ...customers.slice(customerIndex + 1),
      ]);
    }
  };
  

  return (
    <div className='container'>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Age</th>
            <th>Phone</th>
            <th>Email</th>
            <th>Address</th>
            <th>Country</th>
            <th>Edit/Delete</th>
          </tr>
        </thead>
        <tbody>
          {customers?.map((cus) => (
            <Customer key={cus.id} cus={cus} onDelete={handleDelete} onEdit={handleEdit} onUpdate={handleUpdate} />
          ))}
        </tbody>
        
      </table>
    </div>
  );
}
