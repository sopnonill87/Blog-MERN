import React from "react";
import { Nav, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import BlogThumb from "./Blog/BlogThumb";

const CategoryPostList = (categoryPosts, loading, hasErrors) => {
  // const renderPosts = () => {
  return categoryPosts.categoryPosts.map((catPost) => (
    <div className="blog-post" key={catPost._id}>
      <BlogThumb />
      <div className="post-details">
        <Link to={"/post/" + catPost._id}>
          <h3>{catPost.title}</h3>
        </Link>
        <p>{catPost.body.substr(0, 300) + "..."}</p>
      </div>
    </div>
  ));
};

//   return <div> {renderPosts()} </div>;
// };

export default CategoryPostList;
