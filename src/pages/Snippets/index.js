import React from "react";
import Container from "react-bootstrap/Container";
import "./Snippets.css";

import { selectAllSnippets } from "../../store/snippet/selectors";
import { selectSelectedTags } from "../../store/layout/selectors";

import { selectAllSnippetTags } from "../../store/snippettag/selectors";

import { selectUser } from "../../store/user/selectors";

import Snippet from "../../components/Snippet";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

export default function Snippets() {
  const user = useSelector(selectUser);
  const selectedTags = useSelector(selectSelectedTags);
  const allSnippets = useSelector(selectAllSnippets);
  const allSnippetTags = useSelector(selectAllSnippetTags);

  const activeTags = selectedTags
    ? Object.keys(selectedTags)
        .filter((key) => selectedTags[key] === true)
        .map((i) => parseInt(i))
    : null;

  const userSnippetsWithTagIds = allSnippets
    ?.filter((snippet) => snippet.userId === user.id)
    .map((snippet) => {
      return {
        ...snippet,
        tagIds: allSnippetTags
          ?.filter((obj) => obj.snippetId === snippet.id)
          .map((tag) => tag.tagId),
      };
    });

  const displaySnippets = activeTags
    ? userSnippetsWithTagIds?.filter((obj) =>
        obj.tagIds.some((el) => activeTags.includes(el))
      )
    : null;

  return (
    <Container className="snippetsContainer">
      {user.token ? (
        <>
          <Container className="snippetBox">
            {displaySnippets?.map((snippet) => (
              <div key={snippet.id}>{<Snippet snippet={snippet} />}</div>
            ))}
          </Container>
        </>
      ) : (
        <>
          <Link to={"/login"}>log in to load your snippets!</Link>

          <Container className="snippetBox">
            {allSnippets &&
              allSnippets.map((snippet) => {
                return (
                  <div key={snippet.id}>{<Snippet snippet={snippet} />}</div>
                );
              })}
          </Container>
        </>
      )}
    </Container>
  );
}
