import React, { useState } from "react";
import Select from "react-select";
import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import { useDispatch, useSelector } from "react-redux";
import { Col } from "react-bootstrap";
import { newSnippet } from "../../store/snippet/actions";
import { selectAllTags } from "../../store/tag/selectors";

export default function InputForm() {
  const [title, setTitle] = useState("");
  const [snippet, setSnippet] = useState("");
  const [tag, setTag] = useState([]);

  const dispatch = useDispatch();
  const tags = useSelector(selectAllTags);

  const option =
    tags &&
    tags.tags.map((tag) => {
      return { value: tag.id, label: tag.name };
    });

    const changeHandler = e => {
      setTag({ tag: e ? e.map(x => x.value) : [] });
    };

  function submitForm(event) {
    console.log("hi");
    event.preventDefault();

    dispatch(newSnippet(title, snippet, tag));
    console.log("this is tag sent", tag);

    setTitle("");
    setSnippet("");
    setTag("");
  }

  return (
    <div>
      <Container>
        <Form as={Col} md={{ span: 6, offset: 3 }} className="mt-5">
          <h1 className="mt-5 mb-5">Post Snippet</h1>
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
              as="textarea"
              value={snippet}
              onChange={(event) => setSnippet(event.target.value)}
              type="textarea"
              placeholder="Paste code here ..."
              required
            />
          </Form.Group>

          <Form.Group controlId="formBasicTags">
            <Form.Label>Select Tag</Form.Label>
            <Select
              isMulti
              options={option}
              name="tag"
              // value={option?.filter(item => tag.includes(item.value))}
              onChange={changeHandler}
              
            />
          
          </Form.Group>

          <Form.Group className="mt-5">
            <Button variant="primary" type="submit" onClick={submitForm}>
              Post
            </Button>
          </Form.Group>
        </Form>
      </Container>
    </div>
  );
}
