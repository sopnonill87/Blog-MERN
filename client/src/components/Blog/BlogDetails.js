import React from "react";
import BlogThumb from "./BlogThumb";
import BlogTitle from "./BlogTitle";
import BlogExcerpt from "./BlogExcerpt";

const BlogDetails = () => {
  return (
    <div className="blog-post">
      <BlogThumb />
      <div className="post-details">
        <BlogTitle />
        <BlogExcerpt />
      </div>
    </div>
  );
};

export default BlogDetails;
