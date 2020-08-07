import React from "react";
import Button from "react-bootstrap/Button";
import "../Tag/Tag.css";

import { useDispatch, useSelector } from "react-redux";
import { setSelectedTags } from "../../store/layout/actions";
import { selectSelectedTags } from "../../store/layout/selectors";
import { selectAllTags } from "../../store/tag/selectors";

export default function Tag(props) {

  const selectedTags = useSelector(selectSelectedTags);
  const allTags = useSelector(selectAllTags);
  const tagActive = selectedTags ? selectedTags[props.tagId] : false;
  const dispatch = useDispatch();

  const setSelectedTagsHandler = (e) => {
    e.preventDefault();

    const allTagIds = allTags ? allTags.tags.map((tag) => tag.id) : null;

    if (props.tagId === "all" && selectedTags && !selectedTags["all"]) {
      if (allTagIds) {
        allTagIds.forEach((id) => dispatch(setSelectedTags({ [id]: true })));
      }
      dispatch(setSelectedTags({ all: true }));
      return null;
    } else if (props.tagId === "all" && selectedTags && selectedTags["all"]) {
      if (allTagIds) {
        allTagIds.forEach((id) => dispatch(setSelectedTags({ [id]: false })));
      }
      dispatch(setSelectedTags({ all: false }));
      return null;
    }
    dispatch(setSelectedTags({ [props.tagId]: !tagActive }));
  };

  return (
    <div className="tag">
      <Button
        variant={tagActive ? props.color : "secondary"}
        onClick={setSelectedTagsHandler}
      >
        {props.text}
      </Button>{" "}
    </div>
  );
}
