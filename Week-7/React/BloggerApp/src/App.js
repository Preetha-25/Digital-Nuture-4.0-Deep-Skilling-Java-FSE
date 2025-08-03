import React, { useState } from 'react';
import BookDetails from './components/BookDetails';
import BlogDetails from './components/BlogDetails';
import CourseDetails from './components/CourseDetails';

function App() {
  const [view, setView] = useState("book");

  return (
    <div style={{ textAlign: "center", padding: "20px" }}>
      <h1>Welcome to Blogger App</h1>
      <div>
        <button onClick={() => setView("book")}>Book Details</button>
        <button onClick={() => setView("blog")}>Blog Details</button>
        <button onClick={() => setView("course")}>Course Details</button>
      </div>

      {view === "book" && <BookDetails />}
      {view === "blog" ? <BlogDetails /> : null}
      {view === "course" && <CourseDetails />}
    </div>
  );
}

export default App;