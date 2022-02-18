import React, { useEffect, useState } from "react";
import { Form, ToggleButton, ToggleButtonGroup } from "react-bootstrap";
import { reparatii } from "./reparatii";

const Repairs = ({ values }) => {
  const [checked, setChecked] = useState([]);

  const handleRep = (rep) => {
    setChecked(rep);
  };

  useEffect(() => {
    values.reparatii = checked;
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
      <h1>Dropbox</h1>
      <h5>Selectati reparatiile dorite</h5>
      <Form.Group className="align-items-center" value={checked}>
        <Form.Group className="w-30 mt-4" controlId="btn-check-outlined">
          <ToggleButtonGroup
            className="btn-group-m container-rep align-center"
            type="checkbox"
            value={checked}
            onChange={handleRep}
          >
            {reparatii.map((doc) => (
              <ToggleButton
                className="button-rep"
                variant="outline-primary"
                id={doc.id}
                key={doc.id}
                value={doc.id}
              >
                {doc.icon}
                <p></p>
                {doc.name}
              </ToggleButton>
            ))}
          </ToggleButtonGroup>
        </Form.Group>
      </Form.Group>
    </div>
  );
};

export default Repairs;
