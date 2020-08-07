import React, { useEffect } from "react";

import "./Tags.css";
import Tag from "../../components/Tag";

import { useDispatch, useSelector } from "react-redux";

import { selectUser } from "../../store/user/selectors";
import { selectAllTags } from "../../store/tag/selectors";
import { selectAllSnippetTags } from "../../store/snippettag/selectors";
import { selectAllSnippets } from "../../store/snippet/selectors";
// import { selectSelectedTags } from "../../store/layout/selectors";

import { setSelectedTags } from "../../store/layout/actions";

export default function Tags() {
  const user = useSelector(selectUser);
  const allTags = useSelector(selectAllTags);
  const allSnippetTags = useSelector(selectAllSnippetTags);
  const allSnippets = useSelector(selectAllSnippets);
  const dispatch = useDispatch();

  let selectedTagsInit = {};
  const xy = allTags?.tags.forEach((tag) => (selectedTagsInit[tag.id] = true));
  console.log("selectedTagsInit", selectedTagsInit);

  useEffect(() => {
    dispatch(setSelectedTags({ ...selectedTagsInit, all: true }));
  }, [selectedTagsInit, dispatch]);

  const userSnippetIds = allSnippets
    ?.filter((snippet) => snippet.userId === user.id)
    .map((snippet) => snippet.id);

  const relatedTagIds = allSnippetTags
    ?.filter((tag) => userSnippetIds.includes(tag.tagId))
    .map((tag) => tag.tagId);

  const userTags = allTags?.tags.filter((tag) =>
    relatedTagIds.includes(tag.id)
  );

  function switchColor(i) {
    switch (i) {
      case 0:
        return "primary";
      case 1:
        return "success";
      case 2:
        return "warning";
      case 3:
        return "danger";
      case 4:
        return "light";
      case 5:
        return "info";
      default:
        break;
    }
  }

  return (
    <div className="tagsContainer">
      <Tag color="warning" text={"All"} tagId={"all"} />
      {user.token ? (
        <>
          {userTags?.map((tag) => (
            <Tag
              key={tag.id}
              color="warning"
              text={`${tag.name}`}
              tagId={tag.id}
            />
          ))}
        </>
      ) : null}
      {!user.token &&
        allTags?.tags.map((tag) => {
          return (
            <Tag
              key={tag.id}
              color="warning"
              text={`${tag.name}`}
              tagId={tag.id}
            />
          );
        })}
    </div>
  );
}
