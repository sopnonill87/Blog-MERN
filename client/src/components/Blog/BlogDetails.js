import React, { useEffect } from "react";
import { Container, Image } from "react-bootstrap";
import { useParams } from "react-router-dom";
import { fetchSinglePost } from "../../actions/postActions";
import { connect, useDispatch, useSelector } from "react-redux";

const BlogDetails = () => {
  const { id } = useParams();
  const post = useSelector((state) => state.post.post);
  const loading = useSelector((state) => state.post.loading);
  const hasErrors = useSelector((state) => state.post.hasErrors);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchSinglePost(id));
  }, [dispatch]);

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

export default BlogDetails;
