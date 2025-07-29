import React from 'react';
import { Link } from 'react-router-dom'; // Use Link for client-side routing

const NotFoundPage = () => {
  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>404 - Page Not Found 🗺️</h1>
      <p>Sorry, the page you are looking for does not exist.</p>
      <p>Please contact developer</p>
      
    </div>
  );
};

export default NotFoundPage;