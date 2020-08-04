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
