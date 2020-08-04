import React, { useState, useEffect } from "react";
import Container from "react-bootstrap/Container";

import Api from "../../Api";

import { selectAllSnippets } from "../../store/snippet/selectors";

import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import "./Snippets.css";

import Snippet from "../../components/Snippet";

import { selectToken } from "../../store/user/selectors";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, Link } from "react-router-dom";

export default function SignUp() {
  const [array, setArray] = useState([]);
  const dispatch = useDispatch();
  const token = useSelector(selectToken);
  const allSnippets = useSelector(selectAllSnippets);
  console.log("allSnippets", allSnippets);
  const history = useHistory();

  //   useEffect(() => {
  //     if (token === null) {
  //       history.push("/login");
  //     }
  //   }, [token, history]);

  return (
    <Container className="snippetsContainer">
      {/* <Button onClick={onFetchData}>fetch test data</Button> */}
      {allSnippets?.map((snippet) => (
        <>
          {
            <Container className="snippetBox">
              snippet container
              <Snippet snippet={snippet} />
            </Container>
          }
        </>
      ))}
      <Container className="snippetBox">
        <Snippet />
      </Container>
    </Container>
  );
}
