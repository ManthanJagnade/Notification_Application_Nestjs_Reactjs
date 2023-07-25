import React, { useState } from 'react';

const CreateFeedback = () => {
  // const [studentId, setStudentId] = useState('');
  const [feedbackBy, setFeedbackBy] = useState('');
  const [feedbackFor, setFeedbackFor] = useState('');
  const [feedbackMessage, setFeedbackMessage] = useState('');
  const [date, setFeedbackDate] = useState('');
  const [rating, setRating] = useState('');
  
  const url = 'http://localhost:4000/notifications'
  const handleSubmit = (event) => {
    event.preventDefault();
    // const currentDate = new Date(); // Create a new Date object
   
  
    const data = {
      feedbackBy,
      feedbackFor,
      feedbackMessage,
      date,
      rating,
    };
  
    fetch(url, {
      method: 'POST',
      
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log('Success:', data);
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  };
  
  
  

  return (
    <form onSubmit={handleSubmit}>

      <br />
      <label>
        Feedback By:
        <input
          type="text"
          value={feedbackBy}
          onChange={(event) => setFeedbackBy(event.target.value)}
          required
        />
      </label>
      <br />
      <label>
        Feedback For:
        <input
          type="text"
          value={feedbackFor}
          onChange={(event) => setFeedbackFor(event.target.value)}
          required
        />
      </label>
      <br />
      <label>
        Feedback Message:
        <input
          type="text"
          value={feedbackMessage}
          onChange={(event) => setFeedbackMessage(event.target.value)}
          required
        />
      </label>
      <br />
      <label>
        Feedback Date:
        <input
          type="date"
          value={date}
          onChange={(event) => setFeedbackDate(event.target.value)}
          required
        />
      </label>
      <br />
      <label>
        Rating:
        <select value={rating} onChange={(event) => setRating(event.target.value)} required>
          <option value="">--Please choose an option--</option>
          <option value="gold">Gold</option>
          <option value="silver">Silver</option>
          <option value="bronze">Bronze</option>
        </select>
      </label>
      <br />
      <input type="submit" value="Submit" />
    </form>
  );
};

export default CreateFeedback;