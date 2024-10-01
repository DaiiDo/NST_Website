import { useState, useEffect } from 'react';
import { jwtDecode } from 'jwt-decode';

function useAuth() {
  const [isAdmin, setIsAdmin] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      try {
        const decoded = jwtDecode(token);
        console.log('Decoded Token:', decoded);
        if (decoded.role === 'admin') {
          setIsAdmin(true);
          console.log('User is Admin');
        } else {
          setIsAdmin(false);
        }
      } catch (error) {
        console.error('Invalid token:', error);
        setIsAdmin(false);
      }
    } else {
      setIsAdmin(false);
    }
  }, []);

  return isAdmin;
}

export default useAuth;
