import React, { ReactElement } from "react";
import "./ExpPanel.css";

interface expPanel {
  name: string;
  desc: string;
  image?: string;
  websiteLink?: string;
}

export default function ExpPanel(props: expPanel): ReactElement {
  return (
    <div id="expPanelWrapper" data-testid="expPanelTestId">
      <div className="image">
        <img src={props.image} alt={props.name + " Image"} />
      </div>
      <div className="detailsContainer">
        <p className="detailItem">{props.name}</p>
        <p className="detailItem">{props.desc}</p>
        <p className="detailItem">{props.websiteLink}</p>
      </div>
    </div>
  );
}
