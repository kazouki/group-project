import React from "react";
import Container from "react-bootstrap/Container";
import "../../pages/Snippets/Snippets.css";

import { selectAllSnippets } from "../../store/snippet/selectors";
import { selectSelectedTags } from "../../store/layout/selectors";
import { selectAllSnippetTags } from "../../store/snippettag/selectors";


import Snippet from "./Snippet";
import { useSelector } from "react-redux";

export default function Snippets(props) {
  const selectedTags = useSelector(selectSelectedTags);
  const allSnippets = useSelector(selectAllSnippets);
  const allSnippetTags = useSelector(selectAllSnippetTags);

  function LoggedOutSnippets() {
    const activeTags = selectedTags
      ? Object.keys(selectedTags)
          .filter((key) => selectedTags[key] === true)
          .map((i) => parseInt(i))
      : null;

    const allSnippetsWithTagIds = allSnippets?.map((snippet) => {
      return {
        ...snippet,
        tagIds: allSnippetTags
          ?.filter((obj) => obj.snippetId === snippet.id)
          .map((tag) => tag.tagId),
      };
    });

    const displaySnippets = activeTags
      ? allSnippetsWithTagIds?.filter((obj) =>
          obj.tagIds?.some((el) => activeTags.includes(el))
        )
      : null;

    return (
      <Container className="snippetsContainer">
        <>
          <Container className="snippetBox">
            {displaySnippets?.map((snippet) => (
              <div key={snippet.id}>{<Snippet snippet={snippet} />}</div>
            ))}
          </Container>
        </>
      </Container>
    );
  }

  return <LoggedOutSnippets />;
}
