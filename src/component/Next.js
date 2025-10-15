// NextPage.js
import React from "react";
import { useNavigate } from "react-router-dom";

const NextPage = () => {
  const navigate = useNavigate();

  return (
    <div style={{ textAlign: 'center', marginTop: '100px' }}>
      <h2>Welcome to Next Page</h2>
      <p>This is the second page of the application.</p>
      <button
        onClick={() => navigate("/")}
        style={{
          backgroundColor: '#28a745',
          color: 'white',
          padding: '10px 20px',
          border: 'none',
          borderRadius: '6px',
          cursor: 'pointer',
          fontSize: '16px',
          margin: '10px'
        }}
      >
        Back to Home Page
      </button>
    </div>
  );
};

export default NextPage;
