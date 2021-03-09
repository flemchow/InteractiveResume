import React, { ReactElement } from "react";
import { Link, animateScroll as scroll } from "react-scroll";
import "./NavBar.css";

export default function NavBar(): ReactElement {
  return (
    <div id="navWrapper" data-testid="navWrapperTestId">
      <div id="linkContainer">
        <ul id="navList">
          <li className="navLinkItem">
            <Link
              activeClass="activeScroll"
              smooth
              spy={true}
              to="profileScroll"
            >
              <p className="navItem">Profile</p>
            </Link>
          </li>
          <li className="navLinkItem">
            <Link
              activeClass="activeScroll"
              smooth
              spy={true}
              to="workExpScroll"
            >
              <p className="navItem">Work Experiences</p>
            </Link>
          </li>
          <li className="navLinkItem">
            <Link
              activeClass="activeScroll"
              smooth
              spy={true}
              to="personalExpScroll"
            >
              <p className="navItem">Personal Projects</p>
            </Link>
          </li>
          <li className="navLinkItem">
            <Link
              activeClass="activeScroll"
              smooth
              spy={true}
              to="contactScroll"
            >
              <p className="navItem">Contact</p>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}
