import { expInterface } from "../../models";
import loveYourPlanet from "../../assets/LoveYourPlanet.png";
import taiwanAssociation from "../../assets/TwnAssociation.png";
import clio from "../../assets/clio.png";
const workExperiences: expInterface[] = [
  {
    name: "Love Your World's Social Media Platform",
    startDate: "September 2020",
    endDate: "December 2020",
    tasks: [
      "Worked on finding and fixing known and unknown bug issues discovered through manual testing.",
      "Worked on improving the Human-Computer Interaction through the feedback from the various end users.",
      "Worked on code refactoring (function name changes and mock data removal)",
      "Implemented a simple GUI for administrative purposes.",
    ],
    techStack: ["ReactJS", "TypeScript", "MongoDB"],
    image: loveYourPlanet,
    websiteLink: "lyp-world.herokapp.com",
  },
  {
    name: "Taiwanese Association of Toronto",
    startDate: "May 2020",
    endDate: "August 2020",
    tasks: [
      "Created Newsletter Subscription and Contact Us form components and a matching game that uses profile pictures submitted to the application by front line workers.",
      "Worked on the other initiatives with my teammates, such as the photo and art gallery components.",
      "Manual Tested all the other components",
      "Making application responsive through media queries.",
    ],
    techStack: ["ReactJS", "JavaScript", "FireBase"],
    image: taiwanAssociation,
    websiteLink: "https://gallery.torontotaiwanfest.ca/GalleryHome",
  },
  {
    name: "Clio - Legal Software",
    startDate: "April 2020",
    endDate: "May 2020",
    tasks: [
      "Worked on creating a parsing tool that would reduce their developer overhead by removing human errors.",
      "Created an automation script that would replace manual set up processes.",
    ],
    techStack: ["Ruby"],
    image: clio,
    websiteLink: "https://www.clio.com/",
  },
];

export default workExperiences;
