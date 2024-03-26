import axios from 'axios';
// eslint-disable-next-line no-unused-vars
import React from 'react';

export const GetUser = async () => {

    // const getToken = () => {
    //     // Implement your logic to retrieve the authorization token (from localStorage, cookies, etc.)
    //     return 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwOi8vMTI3LjAuMC4xOjgwMDAvYXBpLzEvbG9naW4iLCJpYXQiOjE3MDQwODQ4NjAsImV4cCI6MTcwNDA4ODQ2MCwibmJmIjoxNzA0MDg0ODYwLCJqdGkiOiJDOVoyUzUweEd4VW02YXNVIiwic3ViIjoiMSIsInBydiI6IjIzYmQ1Yzg5NDlmNjAwYWRiMzllNzAxYzQwMDg3MmRiN2E1OTc2ZjcifQ.74jPZq9VSMwSClE2ERNPlP7GvuNl-6T_a3cgMk_-PRQ';
    //   };

    // const token = getToken();

    try {
        const response = await axios.get("http://127.0.0.1:8000/api/user", {
          headers: {
            // Authorization: `Bearer ${getToken}`,
            Authorization: `Bearer 2|2tAaPNBHnasnDJxkg7a4tDcrGtHKYOy5NWX2a2OBabc2cd3c`,
          },
        });
    
        return response.data;
      } catch (error) {
        throw error.response.data; // You may want to throw the error response data for better handling
      }
  };

