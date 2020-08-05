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
  return (
    <div className="tag">
      <Button
        variant={tagActive ? props.color : "secondary"}
        onClick={() => {
          dispatch(setSelectedTags({ [props.tagId]: !tagActive }));
          console.log(props.tagId);
        }}
      >
        {props.text}
      </Button>{" "}
    </div>
  );
}
