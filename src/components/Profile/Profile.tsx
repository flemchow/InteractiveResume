import React, { ReactElement } from "react";
import { SectDescription } from "../";
import PosedImg from "../../assets/posed.jpeg";
import "./Profile.css";

export default function Profile(): ReactElement {
  return (
    <div id="outerWrapper" data-testid="profileWrapperTestId">
      <div id="innerWrapper">
        <SectDescription heading={"Profile"} />
        <div id="profileContent">
          <div id="aboutMe">
            <h2 className="title">About Me</h2>
            <p className="content">
              I am a recent graduate from British Columbia Institute of
              Technlogy's Computer Systems Technology program, where I
              cultivated my passion for solving problems using technology. At
              BCIT, I was exposed to the fundamentals of Object-Oriented
              Programming and Human-Computer Interaction principles. On my own,
              I delve into learning other technologies and developmental
              approaches such as TypeORM, JWT tokens, and Test-Driven
              Development.
            </p>
          </div>
          <div id="profilePicture">
            <img id="profileImg" src={PosedImg}></img>
          </div>
          <div id="profileDescription">
            <h2 className="title">Details</h2>
            <p className="title">
              <b>Name:</b>
            </p>
            <p className="content">Flemming Chow</p>
            <p className="title">
              <b>Location:</b>
            </p>
            <p className="content">Vancouver, British Columbia, Canada</p>
          </div>
        </div>
      </div>
    </div>
  );
}
