import { useState } from "react";

function CrudCustomer() {
  const [customers, setCustomers] = useState([]);
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    age: "",
    phone: "",
    email: "",
    address: "",
    country: "",
  });

  const handleAddCustomer = () => {
    setShowForm(true);
  };

  const handleFormInputChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleAddCustomerSubmit = async (event) => {
    event.preventDefault();
    const res = await fetch("http://127.0.0.1:8090/api/collections/customer/records", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });
    const newCustomer = await res.json();
    setCustomers((prevCustomers) => [...prevCustomers, newCustomer]);
    setShowForm(false);
    setFormData({
      name: "",
      age: "",
      phone: "",
      email: "",
      address: "",
      country: "",
    });
    window.location.reload();
  };

  return (
    <div className="container-crud-cus">
      {showForm && (
        <form onSubmit={handleAddCustomerSubmit} className="form">
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleFormInputChange}
            placeholder="Name"
            className="input"
          />
          <input
            type="number"
            name="age"
            value={formData.age}
            onChange={handleFormInputChange}
            placeholder="Age"
            className="input"
          />
          <input
            type="text"
            name="phone"
            value={formData.phone}
            onChange={handleFormInputChange}
            placeholder="Phone"
            className="input"
          />
          <input
            type="text"
            name="email"
            value={formData.email}
            onChange={handleFormInputChange}
            placeholder="Email"
            className="input"
          />
          <input
            type="text"
            name="address"
            value={formData.address}
            onChange={handleFormInputChange}
            placeholder="Address"
            className="input"
          />
          <input
            type="text"
            name="country"
            value={formData.country}
            onChange={handleFormInputChange}
            placeholder="Country"
            className="input"
          />
          <button type="submit" className="button">Add</button>
        </form>
      )}
      <button onClick={handleAddCustomer} className="button">Add Customer</button>
      <table>
        {/* table headers and rows go here */}
      </table>
    </div>
  );
}

export default CrudCustomer;
