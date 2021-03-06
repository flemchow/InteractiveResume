import React, { ReactElement } from "react";

interface SecDesc {
  heading: string;
}

export default function SecDescription(props: SecDesc): ReactElement {
  return (
    <div className="description">
      <h1>{props.heading}</h1>
    </div>
  );
}
