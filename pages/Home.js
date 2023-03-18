import React from 'react';
import CustomerList from '@/components/CustomerInfo';
import CrudCustomer from '@/components/CrudCustomer';
import "../Css/Home.css";
import Link from 'next/link';
import NavBar from '@/components/NavBar';

export default function Home() {
  return (
    <div key="home-page">
      <NavBar />
    <div>
        <CustomerList />
        <CrudCustomer />
    </div>
    </div>
  );
}
