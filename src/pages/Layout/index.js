import React, { useEffect } from "react";

import { useHistory } from "react-router-dom";

import Container from "react-bootstrap/Container";

import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "./Layout.css";
import Snippets from "../Snippets";
import Tags from "../Tags";

import { selectToken } from "../../store/user/selectors";
import { useDispatch, useSelector } from "react-redux";

export default function Layout() {
  const token = useSelector(selectToken);
  const history = useHistory();

  // useEffect(() => {
  //   if (token === null) {
  //     history.push("/login");
  //   }
  // }, [token, history]);

  return (
    <Container className="layoutContainer">
      <Row>
        <Col className="sectionTags">
          <Tags />
        </Col>
        <Col xs={8} className="sectionSnippets">

          {token ? <>logged in view</> : <>logged out view</>}
          {token ? <Snippets loggedIn={true} /> : <Snippets loggedIn={false} />}

      

        </Col>
      </Row>
    </Container>
  );
}
