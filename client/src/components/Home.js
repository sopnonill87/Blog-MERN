import React, { useEffect } from "react";
import { connect, useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { fetchPosts } from "../actions/postsActions";
import { fetchCategories } from "../actions/categoriesActions";
import { Container, Row, Col, ListGroup } from "react-bootstrap";
import { BlogList, BlogTitle } from "./Blog";
// import Paginate from "./Paginate";

const Home = () => {
  const posts = useSelector((state) => state.posts.posts);
  const categories = useSelector((state) => state.category.categories);
  const loading = useSelector((state) => state.posts.loading);
  const hasErrors = useSelector((state) => state.posts.hasErrors);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchPosts());
    dispatch(fetchCategories());
  }, [dispatch]);

  //console.log("posts from home:", posts);

  return (
    <div>
      <Container>
        <h1>Some of my blog posts</h1>
        <Row>
          <Col xs={8} md={8}>
            <BlogList posts={posts} loading={loading} hasErrors={hasErrors} />
            {/* <Paginate /> */}
          </Col>
          <Col xs={4} md={4}>
            <div className="recent-posts">
              <h3>Recent Posts</h3>
              <ListGroup>
                {posts.length &&
                  posts.slice(0, 5).map((post) => {
                    return (
                      <ListGroup.Item key={post._id}>
                        <Link to={"/post/" + post._id}>{post.title}</Link>
                      </ListGroup.Item>
                    );
                  })}
              </ListGroup>
            </div>

            <div className="recent-posts categories">
              <h3>Blog Categories</h3>
              <ListGroup>
                {categories.map((category) => {
                  return (
                    <ListGroup.Item key={category._id}>
                      <Link to={"/categories/" + category._id + "/posts"}>
                        {category.name}
                      </Link>
                    </ListGroup.Item>
                  );
                })}
              </ListGroup>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Home;
