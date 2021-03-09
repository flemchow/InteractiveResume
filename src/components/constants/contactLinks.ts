import { contactLinkInterface } from "../../models";
import { GithubIcon, EmailIcon, LinkedInIcon1 } from "../../assets";
const contactLinks: contactLinkInterface[] = [
  {
    imgPath: GithubIcon,
    websiteLink: "https://github.com/flemchow",
  },
  {
    imgPath: LinkedInIcon1,
    websiteLink: "https://www.linkedin.com/in/flemchow/",
  },
  {
    imgPath: EmailIcon,
    address: "flem.chow94@gmail.com",
  },
];

export default contactLinks;
