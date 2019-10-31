import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { getPosts } from '../reducers/postsReducer';

function Posts({ getPosts, postPosts, posts }) {
  useEffect(() => {
    getPosts();
  }, [getPosts]);

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   postPosts(state);
  // }

  return (
    <ul className="posts">
      {posts && posts.length > 0 && posts.map(({ id, title }) => (
        <li key={id}>
          <h2>{title}</h2>
        </li>
      ))}
    </ul>
  );
}

const mapStateToProps = ({ postsReducer }) => ({
  posts: postsReducer.posts,
});

const mapDispatchToProps = {
  getPosts,
  // postPosts
};

export default connect(mapStateToProps, mapDispatchToProps)(Posts);
