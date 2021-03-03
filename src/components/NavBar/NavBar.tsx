import React, { ReactElement } from "react";
import "./NavBar.css";

export default function NavBar(): ReactElement {
  return (
    <div id="navWrapper" data-testid="navWrapperTestId">
      <div id="nameContainer">
        <h1>Flemming Chow</h1>
      </div>
      <div id="linkContainer">
        <ul>
          <li className="linkitem">About</li>
          <li className="linkitem">Work Experience</li>
          <li className="linkitem">Personal Project</li>
          <li className="linkitem">Contact Me</li>
        </ul>
      </div>
    </div>
  );
}
