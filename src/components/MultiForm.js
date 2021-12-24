import React, { useState } from "react";
import PersonalInfo from "./PersonalInfo";
import ContactInfo from "./ContactInfo";
import LocationInfo from "./LocationInfo";

const MultiForm = () => {
    const [values, setValues] = useState(
        {
            first_name = "",
            last_name = "",
            gender = "",
            email = "",
            phone_number = "",
            city = "",
            state = "",
        }
    );

    const [step, setStep] = useState(1);

    const nextStep = () => {
        if (step < 3) {
        setStep(step + 1);
        } else if(step === 3) {
            console.log(values);
        }
    };

    const prevStep = () => {
        if (step > 1) {
            setStep(step-1);
        }
    };

    const handleChange = (name) => (e) => {
        setValues({...values, [name]: e.target.value});
    };

    return <div></div>;
};

export default MultiForm;