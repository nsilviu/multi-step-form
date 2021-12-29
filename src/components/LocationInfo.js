import React from "react";
import { Form } from "react-bootstrap";

const LocationInfo = ({ handleChange }) => {
  return (
    <div className="d-flex flex-column align-items-center">
      <h2>Documente</h2>
      <Form.Group className="w-30 mt-4" controlId="btn-check-outlined">
        <Form.Check className="btn btn-primary"type="checkbox" label="Talon" id="btn-check-outlined"/>
        <Form.Check type="switch" label="Talon" id="btn-check-outlined"/>
        <Form.Check type="switch" label="Talon" id="btn-check-outlined"/>
        <Form.Check type="switch" label="Talon" id="btn-check-outlined"/>
      </Form.Group>
    </div>
  );
};

export default LocationInfo;