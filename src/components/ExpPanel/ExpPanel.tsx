import React, { ReactElement } from "react";
import { expInterface } from "../../models";
import { externalLinkImg } from "../../assets";
import "./ExpPanel.css";

export default function ExpPanel(props: expInterface): ReactElement {
  return (
    <div
      id="expPanelWrapper"
      data-testid="expPanelTestId"
      onClick={() => {
        if (props.websiteLink) window.open(props.websiteLink);
      }}
    >
      <div className="image">
        {props.image ? (
          <img src={props.image} alt={props.name + " Image"} />
        ) : (
          <div className="noImage"></div>
        )}
        {/* <img src={props.image} alt={props.name + " Image"} /> */}
      </div>
      <div className="detailsContainer">
        <div className="headContainer">
          <h2 className="detailItem title name">{props.name}</h2>
          {props.websiteLink ? (
            <img className="extLinkImg" src={externalLinkImg} />
          ) : (
            <></>
          )}
          <p className="content date">
            {props.startDate} - {props.endDate}
          </p>
        </div>
        <div className="techStackContainer">
          <p className="detailItem title">Technology Stack:</p>
          <ul>
            {props.techStack.map((tech) => {
              return (
                <li
                  key={tech + "_key"}
                  className="techStackListItem expPanelListItem content"
                >
                  {tech}
                </li>
              );
            })}
          </ul>
        </div>
        <div className="tasksContainer">
          <p className="detailItem title">Tasks:</p>
          <ol>
            {props.tasks.map((task) => {
              return (
                <li
                  key={task + "_key"}
                  className="taskListItem expPanelListItem content"
                >
                  {task}
                </li>
              );
            })}
          </ol>
        </div>
      </div>
    </div>
  );
}
