import React from 'react';

const blogs = ["Understanding JSX", "State vs Props", "React Lifecycle"];

function BlogDetails() {
  return (
    <div>
      <h2>Blog Details</h2>
      <ul>
        {blogs.map((blog, index) => <li key={index}>{blog}</li>)}
      </ul>
    </div>
  );
}

export default BlogDetails;