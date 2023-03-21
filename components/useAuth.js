import { useEffect } from 'react';
import { useRouter } from 'next/router';

const useAuth = () => {
  const router = useRouter();

  useEffect(() => {
    const isAuthenticated = localStorage.getItem('authenticated');

    if (!isAuthenticated) {
      router.replace('/login');
    }
  }, [router]);
};

export default useAuth;

