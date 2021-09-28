import React from 'react'
import PropTypes from "prop-types";

import Post from "./Post";

const PostList = ({ posts }) => {
  return (
    <div className="postlist">
      {posts.map((post) => (
        <Post key={post.id} postData={post} />
      ))}
    </div>
  )
}

PostList.propTypes = {
  posts: PropTypes.arrayOf(
    PropTypes.shape({
      author: PropTypes.string,
      body: PropTypes.string,
      date: PropTypes.string,
      isPublished: PropTypes.bool,
      tags: PropTypes.arrayOf(PropTypes.string),
      title: PropTypes.string,
    })
  )
}

export default PostList
