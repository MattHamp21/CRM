import React from 'react';
import CustomerList from '@/components/CustomerInfo';
import CrudCustomer from '@/components/CrudCustomer';
import ComplaintCard from '@/components/complaintCard';
import "../Css/Home.css";
import Link from 'next/link';
import NavBar from '@/components/NavBar';

export default function Complaint() {
  return (
    <div>
      <NavBar />
        <ComplaintCard />
    </div>
  );
}
