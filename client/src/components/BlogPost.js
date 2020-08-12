import React from 'react';
import moment from 'moment';

import ReleaseDetails from './ReleaseDetails';

const BlogPost = ({post}) => {
  return (
    <div className="blog-post">
      <h3 className="title">{moment(post.pub_date).format('MMM Do YYYY')} - {post.title}</h3>
      <p className="text">{post.text}</p>
      {post.release && <ReleaseDetails release={post.release} />}
    </div>
  );
}

export default BlogPost;