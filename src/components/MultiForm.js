import React, { useState, useEffect } from "react";
import PersonalInfo from "./PersonalInfo";
import Documents from "./Documents";
import Repairs from "./Repairs";

const MultiForm = () => {
  const [values, setValues] = useState({
    nume_complet: "",
    plate_number: "",
    email: "",
    phone_number: "",
    alte_documente: "",
    documente: [],
    reparatii: [],
  });

  const [sizeDoc, setSizeDoc] = useState(values.documente.length);
  const [sizeRep, setSizeRep] = useState(values.reparatii.length);

useEffect(() => {
  console.log(sizeDoc);
});

  const [step, setStep] = useState(1);

  const nextStep = () => {
    if (step < 3) {
      setStep(step + 1);
    } else if (step === 3) {
      console.log(values);
    }
  };

  const prevStep = () => {
    if (step > 1) {
      setStep(step - 1);
    }
  };

  const handleChange = (name) => (e) => {
    setValues({ ...values, [name]: e.target.value });
  };

  let isNextDisabled = true;

  switch(step){
    case 1: {
      if(sizeDoc > 0)
      {
        isNextDisabled = false;
      }
    break;
    }
    case 2:
    case 3: {
      if(sizeRep)
      {
        isNextDisabled = false;
      }
      break;
    }
    default: 
      isNextDisabled = false;
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch("https://form.porscheinterauto.app/api/send", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ ...values }),
    });
    setStep(1);
    alert("Masina a fost predata cu succes!");
  };

  return (
    <div className="bg-dark vh-100">
      <div className="container d-flex justify-content-center align-items-center">
        <div className="card p-3 w-100 h-100 mt-5">
          {
            {
              3: <PersonalInfo handleChange={handleChange} />,
              1: <Documents handleChange={handleChange} values={values} setValues={setValues} sizeDoc={sizeDoc} setSizeDoc={setSizeDoc}/>,
              2: <Repairs handleChange={handleChange} values={values} setValues={setValues} sizeRep={sizeDoc} setSizeRep={setSizeRep} />,
            }[step]
          }
          <div className="d-flex justify-content-around px-5 mt-5">
            {step > 1 ? (
              <button className="btn btn-warning" onClick={prevStep}>
                Back
              </button>
            ) : null}
            <button
              className="btn btn-warning"
              onClick={step === 3 ? handleSubmit : nextStep}
              disabled={isNextDisabled}
            >
              {step === 3 ? "Submit" : "Next"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MultiForm;
