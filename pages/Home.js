import React, { useEffect } from 'react';
import { useRouter } from 'next/router';
import CustomerList from '@/components/CustomerInfo';
import CrudCustomer from '@/components/CrudCustomer';
import "../Css/Home.css";
import Link from 'next/link';
import NavBar from '@/components/NavBar';

export default function Home() {
  const router = useRouter();



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

