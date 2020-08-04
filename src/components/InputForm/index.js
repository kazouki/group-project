import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import { useDispatch } from "react-redux";
import { Col } from "react-bootstrap";
import { newSnippet } from "../../store/snippet/actions";

export default function InputForm() {
  const [title, setTitle] = useState("");
  const [snippet, setSnippet] = useState("");
  const [tag, setTag] = useState("");

  const [password, setPassword] = useState("");
  const dispatch = useDispatch();

  function submitForm(event) {
    console.log("hi");
    event.preventDefault();

    dispatch(newSnippet(title, password, tag));
    console.log("this is tag sent", tag)

    setTitle("");
    setPassword("");
  }

  return (
    <Container>
      <Form as={Col} md={{ span: 6, offset: 3 }} className="mt-5">
        <h1 className="mt-5 mb-5">Login</h1>
        <Form.Group controlId="formBasicTitle">
          <Form.Label>Title</Form.Label>
          <Form.Control
            value={title}
            onChange={(event) => setTitle(event.target.value)}
            type="text"
            placeholder="Enter title"
            required
          />
        </Form.Group>

        <Form.Group controlId="formBasicSnippet">
          <Form.Label>Snippet</Form.Label>
          <Form.Control
            value={snippet}
            onChange={(event) => setSnippet(event.target.value)}
            type="textarea"
            placeholder="Paste code here ..."
            required
          />
        </Form.Group>

        <Form.Group controlId="formBasicTags">
          <Form.Label>Example multiple select</Form.Label>
          <Form.Control
            as="select"
            multiple
            value={tag}
            onChange={(event) => setTag(event.target.value)}
          >
            <option value="1">HTML</option>
            <option value="2">CSS</option>
            <option value="3">JavaScript</option>
            <option value="4">TypeScript</option>
          </Form.Control>
        </Form.Group>

        <Form.Group className="mt-5">
          <Button variant="primary" type="submit" onClick={submitForm}>
            Post
          </Button>
        </Form.Group>
      </Form>
    </Container>
  );
}
