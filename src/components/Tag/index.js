import React from "react";
import Button from "react-bootstrap/Button";
import "./Tag.css";

import { useDispatch, useSelector } from "react-redux";
import { setSelectedTags } from "../../store/layout/actions";
import { selectSelectedTags } from "../../store/layout/selectors";

export default function Tag(props) {
  const selectedTags = useSelector(selectSelectedTags);
  const tagActive = selectedTags ? selectedTags[props.tagId] : false;
  const dispatch = useDispatch();

  function setSelectedTagsHandler(event) {
    event.preventDefault();
    dispatch(setSelectedTags({ [props.tagId]: !tagActive }));
    return false;
  }

  return (
    <div className="tag">
      <Button
        type="button"
        variant={tagActive ? props.color : "secondary"}
        onClick={setSelectedTagsHandler}
      >
        {props.text}
      </Button>{" "}
    </div>
  );
}
