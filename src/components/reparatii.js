import { BiWrench } from "react-icons/bi";
import { FaOilCan, FaCarCrash } from "react-icons/fa";
import { FcInspection } from "react-icons/fc";
import React from "react";

export const reparatii = [
  {
    name: "Inspectie Service",
    id: "insp service",
    icon: <BiWrench className="icons" />,
  },
  {
    name: "Schimb Ulei",
    id: "schimb ulei",
    icon: <FaOilCan className="icons" />,
  },
  {
    name: "Dauna auto",
    id: "dauna auto",
    icon: <FaCarCrash className="icons" />,
  },
  {
    name: "I.T.P.",
    id: "itp",
    icon: <FcInspection className="icons" />,
  },
];
