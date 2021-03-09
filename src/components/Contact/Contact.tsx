import React, { ReactElement } from "react";
import { SectDescription } from "../SectionDescription";
export default function Contact(): ReactElement {
  return (
    <div id="outerWrapper">
      <div id="innerWrapper">
        <SectDescription heading={"Contact"} />
        <div id="contactIconContainer"></div>
      </div>
    </div>
  );
}
