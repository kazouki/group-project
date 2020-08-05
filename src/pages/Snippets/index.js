import React, { useState, useEffect } from "react";
// import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/Container";
// import Button from "react-bootstrap/Button";

import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "./Snippets.css";

import Snippet from "../../components/Snippet";

import { selectToken } from "../../store/user/selectors";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, Link } from "react-router-dom";

export default function SignUp() {
  const dispatch = useDispatch();
  const token = useSelector(selectToken);
  const history = useHistory();

  //   useEffect(() => {
  //     if (token === null) {
  //       history.push("/login");
  //     }
  //   }, [token, history]);

  return (
    <Container className="snippetsContainer">
      <Container className="snippetBox">
        snippet container
        <Snippet />
      </Container>
      <Container className="snippetBox">
        <Snippet />
      </Container>
    </Container>
  );
}
