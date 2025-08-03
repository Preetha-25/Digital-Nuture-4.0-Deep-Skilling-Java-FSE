import React from 'react';

const books = ["React Basics", "Advanced React", "React Hooks Guide"];

function BookDetails() {
  return (
    <div>
      <h2>Book Details</h2>
      <ul>
        {books.map((book, index) => <li key={index}>{book}</li>)}
      </ul>
    </div>
  );
}

export default BookDetails;