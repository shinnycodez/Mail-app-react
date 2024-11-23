import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Email from './Email';
import API from './authService';

function Inbox() {
  const [emails, setEmails] = useState([]); // State to store emails
  const [loggedInUser, setLoggedInUser] = useState(''); // State for logged-in user's email
  const navigate = useNavigate(); // Hook for navigation

  // Function to handle the click event and navigate to /compose
  const handleComposeClick = () => {
    navigate('/compose');
  };

  // Fetch logged-in user's email and emails from the API
  useEffect(() => {
    // Simulate getting logged-in user's email (replace with actual logic, e.g., from authentication)
    const userEmail = {loggedInUser}; // Replace this with dynamic user data
    setLoggedInUser(userEmail);

    // Fetch emails from the backend
    API.get('/emails/inbox') // Replace with your endpoint
      .then((response) => {
        console.log('Emails fetched:', response.data);
        setEmails(response.data); // Set the emails from the backend
      })
      .catch((error) => {
        console.error('Error fetching emails:', error);
      });
  }, []);

  return (
    <div className="relative bg-white rounded-lg shadow-lg p-6">
      <h1 className="text-2xl font-bold mb-4">Inbox</h1>
      <div className="space-y-4">
        {/* Map through the emails and pass props to the Email component */}
        {emails.length > 0 ? (
          emails.map((email) => (
            <Email

              // key={email.id} // Unique key for each email
              email={email} // Pass the entire email object
              // loggedInUser={loggedInUser} // Pass the logged-in user's email
            />
          ))
        ) : (
          <p>No emails to display</p>
        )}
      </div>

      {/* Compose Email Button */}
      <button
        onClick={handleComposeClick}
        className="fixed bottom-6 right-6 bg-blue-500 hover:bg-blue-600 text-white p-4 rounded-full shadow-lg flex items-center justify-center focus:outline-none"
        aria-label="Compose Email"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={2}
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M16.862 3.487a2.025 2.025 0 112.862 2.862l-11.725 11.724a4.5 4.5 0 01-1.829 1.13L4.5 19.5l.297-1.809a4.5 4.5 0 011.13-1.83L16.862 3.487z"
          />
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M19.488 2.988a2.025 2.025 0 10-2.862 2.862l2.862-2.862zM11.26 11.26l-1.83-1.83m0 0l1.83 1.83m-1.83-1.83l8.05 8.05m-8.05-8.05l-4.6 4.6m0 0l-1.83 1.83m0 0l-1.095 6.57 6.57-1.095m0 0l1.83-1.83m-1.83 1.83l4.6-4.6"
          />
        </svg>
      </button>
    </div>
  );
}

export default Inbox;
