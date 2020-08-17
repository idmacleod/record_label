import React from 'react';
import moment from 'moment';

import ReleaseDetails from './ReleaseDetails';
import '../styles/BlogPost.css'

const BlogPost = ({post}) => {
  return (
    <div className="blog-post">
      <h3 className="title"><span className="date">{moment(post.pub_date).format('MMM Do YYYY')}</span> {post.title}</h3>
      <p className="text">{post.text}</p>
      {post.media && <img src={'http://localhost:8000' + post.media} alt={post.title} /> }
      {post.release && <ReleaseDetails release={post.release} />}
    </div>
  );
}

export default BlogPost;