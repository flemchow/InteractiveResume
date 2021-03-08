import React, { ReactElement } from "react";
import { SectDescription } from "../SectionDescription";
import ExpPanel from "./ExpPanel";
import loveYourWorldImg from "../../assets/LoveYourPlanet.png";

export default function Exp(): ReactElement {
  return (
    <div id="outerWrapper" data-testid="experienceSection">
      <div id="innerWrapper">
        <SectDescription heading={"Experiences"} />
        <div id="professional">
          <h2>Work</h2>
          {/* Love your world */}
          <ExpPanel
            name="Love Your World's Social Media Platform"
            desc="At Love Your World Social Media Platform, I worked on their ReactJS and TypeScript application.
1. I worked on finding and fixing known and unknown bug issues discovered through manual testing.
2. Worked on improving the Human-Computer Interaction through the feedback from the various end users.
3. Worked on code refactoring (changing component names to something more relevant and condensing the import statements)
4. Implemented a simple GUI for administrative purposes.
5. Removed mock data previously used for automated testing by a different team."
            image={loveYourWorldImg}
          />
          {/* taiwanese association */}
          {/* Clio */}
        </div>
        <div id="personal"></div>
        <h2>Passion Projects</h2>
      </div>
    </div>
  );
}
