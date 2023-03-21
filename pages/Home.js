import React, { useEffect } from 'react';
import { useRouter } from 'next/router';
import CustomerList from '@/components/CustomerInfo';
import CrudCustomer from '@/components/CrudCustomer';
import NavBar from '@/components/NavBar';

export default function Home() {
  const router = useRouter();

  useEffect(() => {
    const token = localStorage.getItem('authToken');
    if (!token) {
      router.push('/');
    }
  }, []);

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


