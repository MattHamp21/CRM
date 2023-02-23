import React from 'react';
import CustomerList from '@/components/CustomerInfo';
import CrudCustomer from '@/components/CrudCustomer';
import ComplaintCard from '@/components/complaintCard';
import "../Css/Home.css";
import Link from 'next/link';

export default function Complaint() {
  return (
    <div>
        <ComplaintCard />
        <Link href="/Home">HomePage</Link>
        <Link href="/">Root</Link>

    </div>
  );
}
