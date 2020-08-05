import React from "react";
// import Form from "react-bootstrap/Form";
// import Container from "react-bootstrap/Container";
// import Button from "react-bootstrap/Button";

// import Row from "react-bootstrap/Row";
// import Col from "react-bootstrap/Col";

// import { selectToken } from "../../store/user/selectors";
// import { useDispatch, useSelector } from "react-redux";
// import { useHistory } from "react-router-dom";

import "./Tags.css";
import Tag from "../../components/Tag";

export default function SignUp() {
  // const dispatch = useDispatch();
  // const token = useSelector(selectToken);
  // const history = useHistory();

  //   useEffect(() => {
  //     if (token === null) {
  //       history.push("/login");
  //     }
  //   }, [token, history]);

  return (
    <div className="tagsContainer">
      {/* TODO  dynamically load tag component with props, for each in response array */}
      <Tag color="primary" text="Vanilla JS" />
      <Tag color="secondary" text="React" />
      <Tag color="success" text="Bootstrap" />
      <Tag color="warning" text="Express" />
      <Tag color="danger" text="Sequelize" />
      <Tag color="light" text="Material-UI" />
      <Tag color="secondary" text="Something" />
    </div>
  );
}
