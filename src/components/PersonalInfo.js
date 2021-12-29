import React from "react";
import { Form , ToggleButton, ToggleButtonGroup} from "react-bootstrap";

const PersonalInfo = ({ handleChange }) => {
  return (
    <div className="d-flex flex-column align-items-center">
      <h1>Formular Audi Dropbox</h1>
      <h3>Personal Info</h3>
      <Form.Group className="w-75 mt-4">
        <Form.Control
          placeholder="Nume Complet"
          onChange={handleChange("nume_complet")}
          name="nume_complet"
        />
      </Form.Group>
      <Form.Group className="w-75 mt-4">
        <Form.Control
          placeholder="Numar inmatriculare"
          onChange={handleChange("plate_number")}
          name="plate_number"
        />
      </Form.Group>
      <Form.Group className="w-75 mt-4">
        <Form.Control
          placeholder="Numar de telefon"
          onChange={handleChange("phone_number")}
          name="phone_number"
        />
      </Form.Group>
      <Form.Group className="w-75 mt-4">
        <Form.Control
          placeholder="Adresa de email"
          onChange={handleChange("email")}
          name="email"
        />
      </Form.Group>
      <Form.Group className="w-75 mt-4">
        <Form.Control
          placeholder="First Name"
          as="select"
          onChange={handleChange("gender")}
          name="gender"
        >
          <option>Male</option>
          <option>Female</option>
        </Form.Control>
      </Form.Group>
      <Form.Group className="w-30 mt-4" controlId="btn-check-outlined">
        <ToggleButtonGroup type="checkbox">
          <ToggleButton value={1}>Talon</ToggleButton>
          <ToggleButton value={2}>Cheie</ToggleButton>
          <ToggleButton value={3}>Carte de service</ToggleButton>
          <ToggleButton value={4}>Cheie antifurt</ToggleButton>
        </ToggleButtonGroup>
      </Form.Group>
    </div>
  );
};

export default PersonalInfo;
