import React, { useState, useEffect } from "react";
import { Form, ToggleButton, ToggleButtonGroup } from "react-bootstrap";
import { documente } from "./documente";

const Documents = ({ handleChange, values, setValues, setSizeDoc }) => {
  const [checked, setChecked] = useState(values.documente);

  const handleDoc = (val) => {
    setChecked(val);
  };

  useEffect(() => {
    setValues({...values, documente:checked});
    setSizeDoc(checked.length);
  },[checked]);

  return (
    <div className="d-flex flex-column align-items-center">
      <p className="scale-30">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/9/92/Audi-Logo_2016.svg"
          className="logo"
          alt="logo-audi"
        />
      </p>
      <h1>Dropbox</h1>
      <h5>Selectati documentele lasate in Audi DropBox</h5>
      <Form.Group className="w-30 mt-4" controlId="btn-check-outlined">
        <ToggleButtonGroup
          type="checkbox"
          className="container-rep btn-group-m"
          value={checked}
          onChange={handleDoc}
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
    </div>
  );
};

export default Documents;
