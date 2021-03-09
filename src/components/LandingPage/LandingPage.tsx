import React, { ReactElement } from "react";
import { dogTitlePic2, YellowShirt } from "../../assets";
import "./LandingPage.css";
import "./LandingPage.css";

export default function LandingPage(): ReactElement {
  return (
    <div id="outerWrapper">
      <div id="backgroundContainer">
        <img id="doggoBackground" src={dogTitlePic2} />
      </div>
      <div id="landingTitleContainer">
        <h1 id="landingTitle">Flemming Chow</h1>
        <h1 id="landingTitleDescript">Interactive Resume</h1>
      </div>
    </div>
  );
}
