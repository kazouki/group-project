import React, { useEffect } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "../../pages/Layout/Layout.css";
import Snippets from "./Snippets";
import Tags from "./Tags";
import { useDispatch } from "react-redux";
import { fetchSnippets } from "../../store/snippet/actions";

export default function Layout() {

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchSnippets());
  }, [dispatch]);

  return (
    <Container className="layoutContainer">
      <Row>
        <Col className="sectionTags">
          <Tags />
        </Col>
        <Col xs={8} className="sectionSnippets">
          <Snippets/>
        </Col>
      </Row>
    </Container>
  );
}
