import React, { ReactElement } from "react";
import "./NavBar.css";

export default function NavBar(): ReactElement {
  return (
    <div id="navWrapper" data-testid="navWrapperTestId">
      <div id="linkContainer">
        <ul id="navList">
          <li className="navLinkItem">Profile</li>
          <li className="navLinkItem">Experiences</li>
          <li className="navLinkItem">Personal Projects</li>
          <li className="navLinkItem">Contact</li>
        </ul>
      </div>
    </div>
  );
}
