import React, { ReactElement } from "react";
import { contactLinkInterface } from "../../../models";
import "./IconPanel.css";

export default function IconPanel(props: contactLinkInterface): ReactElement {
  const handleCopyToast = () => {
    navigator.clipboard.writeText(props.address!);
  };

  return (
    <>
      <a href={`mailto:${props.address}`}>
        <div
          className="contactContainer"
          onClick={() => {
            props.websiteLink
              ? window.open(props.websiteLink)
              : navigator.clipboard.writeText(props.address!);
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
      </a>
    </>
  );
}
