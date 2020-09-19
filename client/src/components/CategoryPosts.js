import React, { useEffect } from "react";
import { Container, Image, Row, Col } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { fetchCategoryPosts } from "../actions/categoriesActions";
import CategoryPostList from "./CategoryPostList";

const CategoryPosts = () => {
  const { id } = useParams();
  const categoryPosts = useSelector((state) => state.category.posts);
  //console.log("categoryPosts", categoryPosts);
  const loading = useSelector((state) => state.posts.loading);
  const hasErrors = useSelector((state) => state.posts.hasErrors);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCategoryPosts(id));
  }, [dispatch]);

  return (
    <div>
      <Container style={{ marginTop: "30px" }}>
        <Row>
          <Col xs={8} md={8}>
            <CategoryPostList
              categoryPosts={categoryPosts}
              loading={loading}
              hasErrors={hasErrors}
            />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default CategoryPosts;
