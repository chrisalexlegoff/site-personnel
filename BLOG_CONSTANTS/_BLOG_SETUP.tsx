import { LogoType, NavbarType } from "../src/shared/enums";
import { iNavSetup } from "../src/shared/interfaces";
import {
  AiOutlineTwitter,
  AiFillInstagram,
  AiFillFacebook,
  AiOutlineGithub,
  AiOutlineLinkedin,
} from "react-icons/ai";

/**
 * EXAMPLE AUTHOR
 * 
 export const AUTHOR_NAME: IAuthor = {
    name: "Full Name",
    designation: "Work Designation",
    bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    profilePic: "",
     social: [
        {
            icon: <AiFillGithub />,
            link: 'https://github.com/'
        },
        {
            icon: <AiFillLinkedin />,
            link: 'https://www.linkedin.com/'
        },
    ]
}
 */

// This can your company name / your name etc for SEO purposes
export const WEBSITE_NAME: string = "Christophe Le Goff";

/**
 * This is the main navigation setup.
 * This includes the main navbar and the side drawer.
 */
export const PRIMARY_NAV: iNavSetup = {
  type: NavbarType.DEFAULT,
  // max logo image height 40px
  // you can add logo light version if using image
  // logo: {
  //     type: LogoType.IMAGE,
  //     logo: '/images/logo.png',
  //     logoLight: '/images/logo-light.png'
  // },
  logo: {
    type: LogoType.TEXT,
    logo: "Christophe Le Goff",
  },
  // navLinks are the main navbar links that apper on top of every page
  navLinks: [
    {
      label: "Accueil",
      path: "/",
    },
    {
      // for categories don't add path and add type: dropdown and pass path empty
      label: "Shortcuts",
      type: "dropdown",
      path: "",
    },
    {
      label: "A propos",
      path: "/a-propos",
    },
    {
      // to open a link in new tab pass newTab: true
      label: "Support",
      path: "https://www.buymeacoffee.com/chrisalexlegoff",
      newTab: true,
    },
    {
      label: "Portfolio",
      path: "https://christophe-le-goff.fr",
      newTab: true,
    },
    {
      label: "Contact",
      path: "/contact",
    },
  ],
  // sideNavLinks are the links which appear when you open the side menu after clicking the burger menu icon.
  sideNavLinks: [
    {
      label: "Accueil",
      path: "/",
    },
    {
      // for categories dont add path and add type: dropdown
      label: "Shortcuts",
      type: "dropdown",
      path: "",
    },
    {
      label: "A propos",
      path: "/a-propos",
    },
    {
      label: "Support",
      path: "https://www.buymeacoffee.com/chrisalexlegoff",
      newTab: true,
    },
    {
      label: "Portfolio",
      path: "https://christophe-le-goff.fr",
      newTab: true,
    },
    {
      label: "Contact",
      path: "/contact",
    },
  ],
  socials: [
    {
      link: "https://www.facebook.com/christophe.legoff.739",
      icon: <AiFillFacebook />,
    },
    {
      link: "https://www.instagram.com/chrisalexlegoff/",
      icon: <AiFillInstagram />,
    },
    {
      link: "https://twitter.com/chrisalexlegoff",
      icon: <AiOutlineTwitter />,
    },
    {
      link: "https://github.com/chrisalexlegoff",
      icon: <AiOutlineGithub />,
    },
    {
      link: "https://www.linkedin.com/in/chrisalexlegoff/",
      icon: <AiOutlineLinkedin />,
    },
  ],
};
