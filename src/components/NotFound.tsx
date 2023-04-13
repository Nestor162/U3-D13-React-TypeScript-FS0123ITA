import React from "react";
import { Alert } from "react-bootstrap";
import { Link } from "react-router-dom";

function NotFound() {
  return (
    <Alert variant="danger">
      <h4>Error 404 - NotFound ⚠️</h4>
      <Link to={"/"}>Return to Homepage</Link>
    </Alert>
  );
}

export default NotFound;
