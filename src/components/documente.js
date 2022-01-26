import React from "react";
import { ImKey2, ImFileText } from "react-icons/im";
import { FaBook, FaLock } from "react-icons/fa";

export const documente = [
  {
    name: "Talon",
    id: "talon",
    icon: <ImFileText className="icons" />,
  },
  {
    name: "Cheie masina",
    id: "cheie masina",
    icon: <ImKey2 className="icons" />,
  },
  {
    name: "Carte de service",
    id: "carte de service",
    icon: <FaBook className="icons" />,
  },
  {
    name: "Cheie antifurt",
    id: "cheie antifurt",
    icon: <FaLock className="icons" />,
  },
];
