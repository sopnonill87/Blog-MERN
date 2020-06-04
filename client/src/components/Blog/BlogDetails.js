import React, { useEffect } from "react";
import { Container, Image } from "react-bootstrap";
import { useParams } from "react-router-dom";
import { fetchSinglePost } from "../../actions/postActions";
import { connect } from "react-redux";

const BlogDetails = ({ dispatch, post, loading, hasErrors }) => {
  const { id } = useParams();

  useEffect(() => {
    dispatch(fetchSinglePost(id));
  }, [dispatch]);

  //console.log("post details", post);

  return (
    <Container style={{ marginTop: "30px" }}>
      <div className="blog-single">
        <h1 style={{ margin: "15px 0px" }}>{post.title}</h1>
        <Image
          style={{ margin: "15px 0px" }}
          src="https://via.placeholder.com/1100x500"
          fluid
        />
        <p>{post.body}</p>
      </div>
    </Container>
  );
};

const mapStateToProps = (state) => {
  return {
    loading: state.post.loading,
    post: state.post.post,
    hasErrors: state.post.hasErrors,
  };
};

export default connect(mapStateToProps)(BlogDetails);
