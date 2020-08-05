import React from "react";
import Container from "react-bootstrap/Container";
import "./Snippets.css";
import { selectAllSnippets } from "../../store/snippet/selectors";
import { selectUser } from "../../store/user/selectors";
import Snippet from "../../components/Snippet";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

export default function SignUp() {
  const allSnippets = useSelector(selectAllSnippets);
  const user = useSelector(selectUser);

  const userSnippets = allSnippets?.filter(
    (snippet) => snippet.userId === user.id
  );

  return (
    <Container className="snippetsContainer">
      {user.token ? (
        <>
          <Container className="snippetBox">
            {userSnippets?.map((snippet) => (
              <div key={snippet.id}>{<Snippet snippet={snippet} />}</div>
            ))}
          </Container>
        </>
      ) : (
        <>
          <Link to={"/login"}>log in to load your snippets!</Link>

          <Container className="snippetBox">...</Container>
        </>
      )}
    </Container>
  );
}
