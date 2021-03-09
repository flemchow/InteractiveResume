import React, { ReactElement } from "react";
import { personalExperiences } from "../../constants";
import { ExpPanel, SectDescription } from "../../";
import "./PersonalExp.css";

export default function PersonalExp(): ReactElement {
  return (
    <div id="outerWrapper">
      <div id="innerWrapper">
        <SectDescription heading={"Personal Projects"} />
        <div id="personalExp">
          {personalExperiences.map((exp) => {
            return (
              <ExpPanel
                key={exp.name + " Key"}
                name={exp.name}
                techStack={exp.techStack}
                tasks={exp.tasks}
                image={exp.image}
                websiteLink={exp.websiteLink}
                startDate={exp.startDate}
                endDate={exp.endDate}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}
