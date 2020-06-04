import React from "react";
import { Nav, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import BlogThumb from "./BlogThumb";

const BlogList = (posts, loading, hasErrors) => {
  // const { blogPosts } = posts;
  //console.log(posts.posts);

  const renderPosts = () => {
    // if (loading) return <p>Loading posts...</p>;
    // if (hasErrors) return <p>Unable to display posts.</p>;

    return posts.posts.map((post) => (
      <div className="blog-post" key={post._id}>
        <BlogThumb />
        <div className="post-details">
          <Link to={"/post/" + post._id}>
            <h3>{post.title}</h3>
          </Link>
          <p>{post.body}</p>
        </div>
      </div>
    ));
  };

  return <div>{renderPosts()}</div>;
};

export default BlogList;
