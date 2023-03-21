
import ComplaintCard from '@/components/complaintCard';
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
