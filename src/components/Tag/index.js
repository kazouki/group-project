import React from "react";
import Button from "react-bootstrap/Button";
import "./Tag.css";

import { useDispatch } from "react-redux";
import { setSelectedTag } from "../../store/layout/actions";

export default function Tag(props) {
  const dispatch = useDispatch();
  return (
    <div className="tag">
      <Button
        variant={props.color}
        onClick={() => {
          dispatch(setSelectedTag(props.tagId));
          console.log(props.tagId);
        }}
      >
        {props.text}
      </Button>{" "}
    </div>
  );
}
