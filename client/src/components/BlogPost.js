import React from 'react';

const BlogPost = ({post}) => {
  return (
    <li className="blog-post">
      <h4>{post.pub_date} - {post.title}</h4>
    </li>
  );
}

export default BlogPost;