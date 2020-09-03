import React from 'react';
import moment from 'moment';

import ReleaseDetails from './ReleaseDetails';
import '../styles/BlogPost.css'

const BlogPost = ({post}) => {
  return (
    <div className="blog-post">
      <div className="header">
        <h3>{post.title}</h3>
        <h4>~ ~ ~ ~ ~ ~ / / / {moment(post.pub_date).format('MMM Do YYYY')}</h4>
      </div>
      <p className="text">{post.text}</p>
      {post.media && <img src={'http://localhost:8000' + post.media} alt={post.title} /> }
      {post.release && <ReleaseDetails release={post.release} />}
    </div>
  );
}

export default BlogPost;