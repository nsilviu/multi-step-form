import React, {useState} from "react";
import { Form, ToggleButton, ToggleButtonGroup } from "react-bootstrap";
import { documente } from "./documente";

const ContactInfo = ({ handleChange }) => {

  const [checked, setChecked] = useState([]);

  const handleToggle = (val) => {
    console.log("handleToggle");
    setChecked(val);
    console.log(val);
  };

  return (
    <div className="d-flex flex-column align-items-center">
      <h1>Formular Audi Dropbox</h1>
      <p>Selectati documentele lasate in Audi DropBox</p>
      <Form.Group className="w-30 mt-4" controlId="btn-check-outlined" >
        <ToggleButtonGroup type="checkbox" className="container-rep" value={checked} onChange={handleToggle}>
          {documente.map(doc => (<ToggleButton variant="outline-primary" className="button-rep"id={doc.id} key={doc.id} value={doc.id}>{doc.name}</ToggleButton>))}
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
