import React, { ReactElement } from "react";
import { contactLinkInterface } from "../../../models";
import "./IconPanel.css";

export default function IconPanel(props: contactLinkInterface): ReactElement {
  const handleCopyToast = () => {
    navigator.clipboard.writeText(props.address!);
    window.location.assign(`mailto:${props.address}`);
  };

  return (
    <>
      <div
        className="contactContainer"
        onClick={() => {
          props.websiteLink
            ? window.open(props.websiteLink)
            : handleCopyToast();
        }}
      >
        <div className="iconContainer">
          <img className="contactIcon" src={props.imgPath} />
        </div>
        {props.websiteLink ? (
          <p className="contactString">{props.websiteLink}</p>
        ) : (
          <p className="contactString">{props.address}</p>
        )}
      </div>
    </>
  );
}
