import React, { ReactElement } from "react";
import "./Toast.css";

export default function Toast(): ReactElement {
  return (
    <div id="toasterWrapper">
      <div className="notification toast">
        <button>X</button>
        <div className="notification-image">
          <img src="" />
        </div>
        <div>
          <p className="notification-title"></p>
          <p className="notification-message"></p>
        </div>
      </div>
    </div>
  );
}
