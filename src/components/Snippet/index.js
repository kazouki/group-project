import React, { useState } from "react";

import Button from "react-bootstrap/Button";
import { CopyBlock, dracula } from "react-code-blocks";

import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import "./Snippet.css";

import { updateSnippet, deleteSnippet } from "../../store/snippet/actions";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { selectUser } from "../../store/user/selectors";

export default function Snippet(props) {
  const [editMode, setEditMode] = useState(false);
  const [snippetState, setSnippetState] = useState({
    title: props.snippet?.title,
    snippet: props.snippet?.snippet,
  });
  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  const onClickSave = (e) => {
    e.preventDefault();
    dispatch(updateSnippet({ ...snippetState, snippetId: props.snippet.id }));
  };
  const deleteHandler = () => {
    dispatch(deleteSnippet({ snippetId: props.snippet.id }));
  };
  return (
    <div className="snippet">
      {user.token ? (
        <Button
          variant={!editMode ? "primary" : "secondary"}
          onClick={() => setEditMode(!editMode)}
        >
          {editMode ? "Cancel" : "Edit"}
        </Button>
      ) : null}
      {user.token ? <Button onClick={deleteHandler}>Delete</Button> : null}
      <h4 className="snippetTitle">{snippetState.title}</h4>
      {editMode ? (
        <Container>
          <Form>
            <Form.Group controlId="formBasicText">
              <Form.Label>snippet title</Form.Label>
              <Form.Control
                value={snippetState.title}
                onChange={(event) =>
                  setSnippetState({
                    ...snippetState,
                    title: event.target.value,
                  })
                }
                type="text"
                placeholder="snippet title here"
                required
              />
            </Form.Group>
            <Form.Group controlId="formBasicTextarea">
              <Form.Label>snippet code</Form.Label>
              <Form.Control
                as="textarea"
                rows="15"
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

              <Form.Text className="text-muted">blabla</Form.Text>
            </Form.Group>
            <Button variant="primary" onClick={onClickSave}>
              Save
            </Button>{" "}
          </Form>
        </Container>
      ) : (
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
      )}
    </div>
  );
}
