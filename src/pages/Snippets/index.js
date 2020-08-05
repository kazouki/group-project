import React from "react";
import Container from "react-bootstrap/Container";
import "./Snippets.css";
import { selectAllSnippets } from "../../store/snippet/selectors";
import Snippet from "../../components/Snippet";
import { useSelector } from "react-redux";

export default function SignUp() {
  const allSnippets = useSelector(selectAllSnippets);
  console.log("allSnippets", allSnippets);

  //   useEffect(() => {
  //     if (token === null) {
  //       history.push("/login");
  //     }
  //   }, [token, history]);

  return (
    <Container className="snippetsContainer">
      {allSnippets?.map((snippet) => (
        <div key={snippet.id}>
          {
            <Container className="snippetBox">
              <Snippet snippet={snippet} />
            </Container>
          }
        </div>
      ))}
      <Container className="snippetBox">
        <Snippet />
      </Container>
    </Container>
  );
}
