import React from "react";

import "./Tags.css";
import Tag from "../../components/Tag";

import { selectUser } from "../../store/user/selectors";
import { selectAllTags } from "../../store/tag/selectors";
import { selectAllSnippetTags } from "../../store/snippettag/selectors";
import { selectAllSnippets } from "../../store/snippet/selectors";
import { useSelector } from "react-redux";

export default function Tags() {
  const user = useSelector(selectUser);
  const allTags = useSelector(selectAllTags);
  const allSnippetTags = useSelector(selectAllSnippetTags);
  const allSnippets = useSelector(selectAllSnippets);

  const userSnippetIds = allSnippets
    ?.filter((snippet) => snippet.userId === user.id)
    .map((snippet) => snippet.id);

  const relatedTagIds = allSnippetTags
    ?.filter((tag) => userSnippetIds.includes(tag.tagId))
    .map((tag) => tag.tagId);

  const userTags = allTags?.tags.filter((tag) =>
    relatedTagIds.includes(tag.id)
  );

  return (
    <div className="tagsContainer">
      {user.token ? (
        <>
          {userTags?.map((tag) => (
            <Tag key={tag.id} color="primary" text={`${tag.name}`} />
          ))}
        </>
      ) : null}
    </div>
  );
}
