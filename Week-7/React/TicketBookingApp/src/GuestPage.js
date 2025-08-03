import React from "react";

const GuestPage = () => {
  return (
    <div>
      <h2>Welcome Guest!</h2>
      <p>Here are some available flights:</p>
      <ul>
        <li>Flight A - Bangalore to Delhi</li>
        <li>Flight B - Mumbai to Chennai</li>
        <li>Flight C - Kolkata to Hyderabad</li>
      </ul>
      <p>Please log in to book your tickets.</p>
    </div>
  );
};

export default GuestPage;