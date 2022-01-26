import React, { useState, useEffect } from "react";
import { Form, ToggleButton, ToggleButtonGroup } from "react-bootstrap";
import { documente } from "./documente";

const ContactInfo = ({ handleChange, values }) => {
  const [checked, setChecked] = useState(values.documente);

  const handleToggle = (val) => {
    setChecked(val);
    console.log(val);
  };
  useEffect(() => {
    values.documente = checked;
    console.log(values);
  });

  return (
    <div className="d-flex flex-column align-items-center">
      <p className="scale-30">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/9/92/Audi-Logo_2016.svg"
          className="logo"
          alt="logo-audi"
        />
      </p>
      <h1>Audi Dropbox</h1>
      <h5>Selectati documentele lasate in Audi DropBox</h5>
      <Form.Group className="w-30 mt-4" controlId="btn-check-outlined">
        <ToggleButtonGroup
          type="checkbox"
          className="container-rep btn-group-m"
          value={checked}
          onChange={handleToggle}
        >
          {documente.map((doc) => (
            <ToggleButton
              variant="outline-primary"
              className="button-rep"
              id={doc.id}
              key={doc.id}
              value={doc.id}
              name={doc.id}
            >
              {doc.icon}
              <p></p>
              {doc.name}
            </ToggleButton>
          ))}
        </ToggleButtonGroup>
      </Form.Group>
      <Form.Group className="w-75 mt-4">
        <Form.Control
          placeholder="Alte documente"
          onChange={handleChange("alte_documente")}
          name="alte_documente"
        />
      </Form.Group>
      {/* </Form.Group>
      <Form.Group className="w-75 mt-4">
        <Form.Control
          placeholder="Email"
          onChange={handleChange("email")}
          name="email"
        />
      </Form.Group>
      <Form.Group className="w-75 mt-4">
        <Form.Control
          placeholder="Phone Number"
          onChange={handleChange("phone_number")}
          name="phone_number"
        />
      </Form.Group> */}
    </div>
  );
};

export default ContactInfo;
