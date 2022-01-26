import React from "react";
import { Form } from "react-bootstrap";

const PersonalInfo = ({ handleChange }) => {
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
      <h5>Informatii generale</h5>
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
    </div>
  );
};

export default PersonalInfo;
