import React, { ReactElement } from "react";
import "./SectDescription.css";

interface SecDesc {
  heading: string;
}

export default function SecDescription(props: SecDesc): ReactElement {
  return (
    <div className="description title">
      <h1>{props.heading}</h1>
    </div>
  );
}
