import React, { ReactElement } from "react";
import "./NavBar.css";

export default function NavBar(): ReactElement {
  return (
    <div id="navWrapper" data-testid="navWrapperTestId">
      <div id="linkContainer">
        <ul>
          <li className="linkitem">Profile</li>
          <li className="linkitem">Experiences</li>
          <li className="linkitem">Hobbies</li>
          <li className="linkitem">Contact</li>
        </ul>
      </div>
    </div>
  );
}
