import React, { ReactElement } from "react";
import { SectDescription } from "../../SectionDescription";
import { ExpPanel } from "../../ExpPanel";
import { workExperiences } from "../../constants";
import "./workExp.css";

export default function WorkExp(): ReactElement {
  return (
    <div id="outerWrapper" data-testid="experienceSection">
      <div id="innerWrapper">
        <SectDescription heading={"Work Experiences"} />
        <div id="workExp">
          {workExperiences.map((exp) => {
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
