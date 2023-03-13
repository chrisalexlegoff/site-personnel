import { GetStaticProps } from "next";
import AuthorsIndexPage from "../src/components/AuteursIndexPage";
import { IAuthor } from "../src/shared/interfaces";

interface authorsTabProps {
  authorsTab: IAuthor[];
}

const TousLesauthors = ({ authorsTab }: authorsTabProps) => {
  return <AuthorsIndexPage authorsTab={authorsTab} authorsPerPage={6} />;
};

export default TousLesauthors;

export const getStaticProps: GetStaticProps = async () => {
  const allauthors = JSON.stringify([
    {
      name: "Christophe Le Goff",
      slug: "christophe-le-goff",
      designation: "Développeur NodeJs Full Stack",
      bio: "Je suis un développeur freelance web Full Stack passionné ayant une expérience dans la création de sites web et applications avec les framework React.js, Next.js, ExpressJS, le CMS HeadLess Strapi et l'administration de bases de données.",
      profilePic: "/public/imp_assets/profils/christophe-le-goff-500x500.jpg",
      InscriptionDate: "2022-10-19",
      social: [
        {
          icon: "Github",
          link: "https://github.com/chrisalexlegoff",
        },
        {
          icon: "Linkedin",
          link: "https://www.linkedin.com/in/chrisalexlegoff/",
        },
        {
          icon: "Facebook",
          link: "https://www.facebook.com/christophe.legoff.739",
        },
        {
          icon: "Instagram",
          link: "https://www.instagram.com/chrisalexlegoff/",
        },
        {
          icon: "Twitter",
          link: "https://twitter.com/chrisalexlegoff",
        },
      ],
    },
  ]);
  const authorsTab = JSON.parse(allauthors);
  return { props: { authorsTab } };
};
