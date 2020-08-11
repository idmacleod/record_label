import React from 'react';
import BlogPost from './BlogPost';

const Blog = props => {
  const postNodes = props.posts.map(post => {
    return <BlogPost post={post} />;
  })

  return (
    <div className="blog">
      <ul>
        {postNodes}
      </ul>
    </div>
  );
}

export default Blog;