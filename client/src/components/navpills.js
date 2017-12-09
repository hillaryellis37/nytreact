import React from "react";
import { Link } from "react-router-dom";

const Navpills = () =>
  <ul className="nav nav-tabs">
    <li>
      <Link to="/">Home</Link>
    </li>
    <li>
      <Link to="/saved">Saved</Link>
    </li>
  </ul>;

export default Navpills;