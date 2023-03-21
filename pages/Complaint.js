import React from 'react';
import CustomerList from '@/components/CustomerInfo';
import CrudCustomer from '@/components/CrudCustomer';
import ComplaintCard from '@/components/complaintCard';
import Link from 'next/link';
import NavBar from '@/components/NavBar';
import useAuth from '@/components/useAuth';
import React, { useEffect } from 'react';
import { useRouter } from 'next/router';

export default function Complaint() {
  useAuth();
  const router = useRouter();
  useEffect(() => {
    const token = localStorage.getItem('authToken');
    if (!token) {
      router.push('/');
    }
  }, []);

  return (
    <div>
      <NavBar />
      <ComplaintCard />
    </div>
  );
}
