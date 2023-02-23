import React from 'react';
import CustomerList from '@/components/CustomerInfo';
import CrudCustomer from '@/components/CrudCustomer';
import "../Css/Home.css";
import Link from 'next/link';

export default function Home() {
  return (
    <div>
        <h1>Welcome to the home page</h1>
        <CustomerList />
        <h2>Add customer Below</h2>
        <CrudCustomer />
        <Link href="/Home">HomePage</Link>
    </div>
  );
}
