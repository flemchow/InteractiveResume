import React, { ReactElement } from "react";
import { SectDescription } from "../SectionDescription";
import { IconPanel } from "../Panels";
import { contactLinks } from "../constants";
import "./Contact.css";

export default function Contact(): ReactElement {
  return (
    <div id="contactScroll">
      <div id="outerWrapper">
        <div id="innerWrapper">
          <SectDescription heading={"Contact"} key="contactSectDesc" />
          <div
            id="contactIconContainer"
            className="contentBody"
            key="contactKey"
          >
            {contactLinks.map((contact, index) => {
              return (
                <IconPanel
                  imgPath={contact.imgPath}
                  address={contact.address}
                  websiteLink={contact.websiteLink}
                  key={`iconPanel${index}`}
                />
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
