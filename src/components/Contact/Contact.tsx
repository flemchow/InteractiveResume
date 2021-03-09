import React, { ReactElement } from "react";
import { SectDescription } from "../SectionDescription";
import { IconPanel } from "../Panels";
import { contactLinks } from "../constants";
import "./Contact.css";
import { Toast } from "..";

export default function Contact(): ReactElement {
  return (
    <div id="outerWrapper">
      <div id="innerWrapper">
        <SectDescription heading={"Contact"} />
        <div id="contactIconContainer">
          {contactLinks.map((contact) => {
            return (
              <IconPanel
                imgPath={contact.imgPath}
                address={contact.address}
                websiteLink={contact.websiteLink}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}
