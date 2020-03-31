import React from "react";
import { Container, Row, Col, ListGroup } from "react-bootstrap";
import { BlogList, BlogTitle } from "./Blog";
import Paginate from "./Paginate";

const Home = () => {
  return (
    <div>
      <Container>
        <h1>Some of my blog posts</h1>
        <Row>
          <Col xs={8} md={8}>
            <BlogList />
            <Paginate />
          </Col>
          <Col xs={4} md={4}>
            <div className="recent-posts">
              <h3>Recent Posts</h3>
              <ListGroup>
                <ListGroup.Item>Cras justo odio</ListGroup.Item>
                <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
                <ListGroup.Item>Morbi leo risus</ListGroup.Item>
                <ListGroup.Item>Porta ac consectetur ac</ListGroup.Item>
                <ListGroup.Item>Porta ac consectetur ac</ListGroup.Item>
              </ListGroup>
            </div>

            <div className="recent-posts categories">
              <h3>Blog Categories</h3>
              <ListGroup>
                <ListGroup.Item>Cras justo odio</ListGroup.Item>
                <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
                <ListGroup.Item>Morbi leo risus</ListGroup.Item>
                <ListGroup.Item>Porta ac consectetur ac</ListGroup.Item>
                <ListGroup.Item>Porta ac consectetur ac</ListGroup.Item>
              </ListGroup>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Home;
