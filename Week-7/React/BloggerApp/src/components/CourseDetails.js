import React from 'react';

const courses = ["ReactJS FSE", "Frontend Mastery", "CTS Training React"];

function CourseDetails() {
  return (
    <div>
      <h2>Course Details</h2>
      <ul>
        {courses.map((course, index) => <li key={index}>{course}</li>)}
      </ul>
    </div>
  );
}

export default CourseDetails;