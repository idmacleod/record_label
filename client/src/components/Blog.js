import React from 'react';

import BlogPost from './BlogPost';
import '../styles/Blog.css'

const Blog = props => {
  const postNodes = props.posts.map((post, index) => {
    return <BlogPost key={index} post={post} />;
  })

  return (
    <div className="blog">
      <h2>blog from the void...</h2>
      <ul>
        {postNodes}
      </ul>
    </div>
  );
}

export default Blog;