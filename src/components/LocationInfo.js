import React, {useState} from "react";
import { Form, ToggleButton, ToggleButtonGroup } from "react-bootstrap";
import { reparatii } from "./reparatii";

const LocationInfo = ( ) => {
  const handleRep = (val) => {
    setChecked(val);
    console.log(val);
  };
  const [checked, setChecked] = useState([]);
  return (
    <div className="d-flex flex-column align-items-center">
      <h1>Formular Audi Dropbox</h1>
      <p>Selectati reparatiile dorite</p>
      <Form.Group className="container-rep" value={checked}>
      <Form.Group className="w-30 mt-4" controlId="btn-check-outlined" >
        <ToggleButtonGroup className="container-rep" type="checkbox" value={checked} onChange={handleRep}>
          {reparatii.map(doc => (<ToggleButton className="button-rep" variant="outline-primary" id={doc.id} key={doc.id} value={doc.id}>{doc.name}</ToggleButton>))}
        </ToggleButtonGroup>
      </Form.Group>
      </Form.Group>
    </div>
  );
};

export default LocationInfo;