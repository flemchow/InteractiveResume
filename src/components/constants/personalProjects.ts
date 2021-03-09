import { expInterface } from "../../models";
import moviefinder from "../../assets/movieFinderUI.png";
const personalProjects: expInterface[] = [
  {
    name: "MovieFinder",
    startDate: "October 2020",
    endDate: "Present",
    techStack: ["ReactJS", "TypeScript"],
    tasks: [
      'Make API calls to "The Movie DataBase" to fetch movies based upon genre or by search.',
      "Make API calls to MovieFinderServer for user authentication",
      "A platform to further learn ReactJS, TypeScript, and Test-Driven Development",
    ],
    image: moviefinder,
    websiteLink: "https://moviefinderui.netlify.app/",
  },
  {
    name: "MovieFinderServer",
    startDate: "December 2020",
    endDate: "Present",
    techStack: ["NodeJS", "ExpressJS", "TypeScript", "MySQL", "TypeORM", "JWT"],
    tasks: [
      "Backend Server to handle use account validation for MovieFinder",
      "Learn proper industry techniques for building ExpressJS backend",
    ],
  },
];

export default personalProjects;
