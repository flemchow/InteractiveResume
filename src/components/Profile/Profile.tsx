import React, { ReactElement } from "react";
import { SectDescription } from "../SectionDescription";
import PosedImg from "../../assets/posed.jpeg";
import "./Profile.css";

export default function Profile(): ReactElement {
  return (
    <div id="profileWrapper" data-testid="profileWrapperTestId">
      <div id="innerWrapper">
        <SectDescription heading={"Profile"} />
        <div id="profileContent">
          <div id="aboutMe">
            <h2>About Me</h2>
            <p>
              I am a recent graduate from British Columbia Institute of
              Technlogy's Computer Systems Technology program, where I
              cultivated my passion for solving problems using technology. I
              love structure and order, to the point where I have a tedency to
              eat pancakes while maintaining them in a square shape.
            </p>
          </div>
          <div id="profilePicture">
            <img id="profileImg" src={PosedImg}></img>
          </div>
          <div id="profileDescription">
            <h2>Details</h2>
            <p>
              <b>Name:</b>
            </p>
            <p>Flemming Chow</p>
            <p>
              <b>Location:</b>
            </p>
            <p>Vancouver, British Columbia, Canada</p>
          </div>
        </div>
      </div>
    </div>
  );
}
