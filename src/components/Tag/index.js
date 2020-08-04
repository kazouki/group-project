import React, { useState, useEffect } from "react";
import Container from "react-bootstrap/Container";

import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import "./Tag.css";

import { selectToken } from "../../store/user/selectors";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, Link } from "react-router-dom";

export default function Tag(props) {
  const dispatch = useDispatch();
  const token = useSelector(selectToken);
  const history = useHistory();

  //   useEffect(() => {
  //     if (token === null) {
  //       history.push("/login");
  //     }
  //   }, [token, history]);

  return (
    <div className="tag">
      <Button variant={props.color}>{props.text}</Button>{" "}
    </div>
  );
}
