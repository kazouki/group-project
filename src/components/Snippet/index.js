import React, { useState } from "react";

// import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
// import Row from "react-bootstrap/Row";
// import InputGroup from "react-bootstrap/InputGroup";
// import FormControl from "react-bootstrap/Form";

import { CopyBlock, dracula } from "react-code-blocks";

import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import "./Snippet.css";

import { updateSnippet } from "../../store/snippet/actions";
// import { selectToken } from "../../store/user/selectors";
import { useDispatch, useSelector } from "react-redux";
// import { useHistory, Link } from "react-router-dom";

export default function Snippet(props) {
  // const [title, setTitle] = useState(props.snippet?.title);
  // const [snippet, setSnippet] = useState(props.snippet?.snippet);
  const [snippetState, setSnippetState] = useState({
    title: props.snippet?.title,
    snippet: props.snippet?.snippet,
  });
  const dispatch = useDispatch();

  console.log("props.snippet.snippet ", props.snippet?.snippet);

  // const token = useSelector(selectToken);
  // const history = useHistory();

  //   useEffect(() => {
  //     if (token === null) {
  //       history.push("/login");
  //     }
  //   }, [token, history]);
  // console.log("snippetState in index", {
  //   ...snippetState,
  //   snippetId: props.snippet?.id,
  // });

  const onClickSave = (e) => {
    e.preventDefault();
    dispatch(updateSnippet({ ...snippetState, snippetId: props.snippet.id }));
  };

  return (
    <div>
      <Container className="snippet">
        snippet component
        {/* <Form as={Col} md={{ span: 6, offset: 3 }} className="mt-5"> */}
        <Form>
          {/* <h4 className="mt-5 mb-5">some header</h4> */}
          <h4>some header</h4>
          <Form.Group controlId="formBasicName">
            <Form.Label>title</Form.Label>
            <Form.Control
              value={snippetState.title}
              onChange={(event) =>
                setSnippetState({ ...snippetState, title: event.target.value })
              }
              type="text"
              placeholder="snippet title here"
              required
            />
          </Form.Group>
          <Form.Group controlId="formBasicEmail">
            <Form.Label>snippet code</Form.Label>
            <Form.Control
              as="textarea"
              rows="3"
              value={snippetState.snippet}
              onChange={(event) =>
                setSnippetState({
                  ...snippetState,
                  snippet: event.target.value,
                })
              }
              type="text"
              placeholder="snippet here"
              required
            />

            {/* <CopyBlock
            language="jsx"
            text={`${snippetState?.snippet}`}
            codeBlock
            theme={dracula}
            showLineNumbers={true}
          /> */}

            <Form.Text className="text-muted">blabla</Form.Text>
          </Form.Group>
          <Button variant="primary" onClick={onClickSave}>
            Primary
          </Button>{" "}
        </Form>
      </Container>
      <div className="container mx-auto p-4">
        <CopyBlock
          language={"jsx"}
          text={`${snippetState?.snippet}`}
          showLineNumbers={true}
          theme={dracula}
          wrapLines={true}
          codeBlock
        />
      </div>
    </div>
  );
}
