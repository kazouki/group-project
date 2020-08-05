import React from "react";
import Button from "react-bootstrap/Button";
import "./Tag.css";

export default function Tag(props) {
  return (
    <div className="tag">
      <Button variant={props.color}>{props.text}</Button>{" "}
    </div>
  );
}
