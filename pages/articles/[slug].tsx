// import PageLayout from components
import { GetStaticPaths, GetStaticProps } from "next";
import { PageLayout } from "../../src/components";
import { iArticle, IAuthor } from "../../src/shared/interfaces";

interface articleProps {
  article: iArticle;
  authorsTab: IAuthor[];
  articlesTab: iArticle[];
}

const Article = ({ article, authorsTab, articlesTab }: articleProps) => {
  return (
    // pass blogwithsidebar as shown
    <PageLayout
      authorsTab={authorsTab}
      article={article}
      author={
        authorsTab.filter((author) => author.slug === article.preview.author)[0]
      }
      articlesTab={articlesTab}
      blogwithsidebar
    >
      test
    </PageLayout>
  );
};

export default Article;

export const getStaticPaths: GetStaticPaths = async () => {
  const allArticles = JSON.stringify([
    {
      path: "/how-to-setup-blog",
      slug: "how-to-setup-blog",
      featureArticle: true,
      aVoirAbsolument: false,
      preview: {
        author: "christophe-le-goff",
        date: "2022-06-11",
        articleTitle: "How to setup this blog template",
        tags: "demo, blog setup",
        thumbnail: "/public/imp_assets/og-image.jpg",
        shortIntro: "These are the steps to setup your blog",
        category: "tutoriels",
      },
    },
    {
      path: "/how-to-do",
      slug: "how-to-do-1",
      featureArticle: false,
      aVoirAbsolument: false,
      preview: {
        author: "christophe-le-goff",
        date: "2022-07-11",
        articleTitle: "How to do a template",
        tags: "demo, article, template",
        thumbnail: "/public/imp_assets/og-image.jpg",
        shortIntro: "These are the steps to setup your blog",
        category: "articles",
      },
    },
    {
      path: "/how-to-do",
      slug: "how-to-do-2",
      featureArticle: false,
      aVoirAbsolument: false,
      preview: {
        author: "christophe-le-goff",
        date: "2022-05-11",
        articleTitle: "How to do a template",
        tags: "demo, article, template",
        thumbnail: "/public/imp_assets/og-image.jpg",
        shortIntro: "These are the steps to setup your blog",
        category: "articles",
      },
    },
    {
      path: "/how-to-do",
      slug: "how-to-do",
      featureArticle: false,
      aVoirAbsolument: false,
      preview: {
        author: "christophe-le-goff",
        date: "2023-02-11",
        articleTitle: "How to do a template",
        tags: "demo, article, template",
        thumbnail: "/public/imp_assets/og-image.jpg",
        shortIntro: "These are the steps to setup your blog",
        category: "articles",
      },
    },
    {
      path: "/how-to-setup-blog",
      slug: "how-to-setup-blog",
      featureArticle: false,
      aVoirAbsolument: false,
      preview: {
        author: "christophe-le-goff",
        date: "2022-12-11",
        articleTitle: "How to setup this blog template",
        tags: "demo, blog setup",
        thumbnail: "/public/imp_assets/og-image.jpg",
        shortIntro: "These are the steps to setup your blog",
        category: "tutoriels",
      },
    },
    {
      path: "/how-to-setup-blog",
      slug: "how-to-setup-blog",
      featureArticle: false,
      aVoirAbsolument: false,
      preview: {
        author: "christophe-le-goff",
        date: "2022-08-10",
        articleTitle: "How to setup this blog template",
        tags: "demo, blog setup",
        thumbnail: "/public/imp_assets/og-image.jpg",
        shortIntro: "These are the steps to setup your blog",
        category: "tutoriels",
      },
    },
  ]);
  const articlesTab = JSON.parse(allArticles);

  return {
    paths: articlesTab.map((article: iArticle) => ({
      params: { slug: article.slug },
    })),
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const allAuthors = JSON.stringify([
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
    {
      name: "Christophe Le Goff",
      slug: "christophe-le-goffffff",
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
      ],
    },
  ]);

  const allArticles = JSON.stringify([
    {
      path: "/how-to-setup-blog",
      slug: "how-to-setup-blog",
      featureArticle: true,
      aVoirAbsolument: false,
      preview: {
        author: "christophe-le-goff",
        date: "2022-06-11",
        articleTitle: "How to setup this blog template",
        tags: "demo, blog setup",
        thumbnail: "/public/imp_assets/og-image.jpg",
        shortIntro: "These are the steps to setup your blog",
        category: "tutoriels",
      },
    },
    {
      path: "/how-to-do",
      slug: "how-to-do-1",
      featureArticle: false,
      aVoirAbsolument: false,
      preview: {
        author: "christophe-le-goff",
        date: "2022-07-11",
        articleTitle: "How to do a template",
        tags: "demo, article, template",
        thumbnail: "/public/imp_assets/og-image.jpg",
        shortIntro: "These are the steps to setup your blog",
        category: "articles",
      },
    },
    {
      path: "/how-to-do",
      slug: "how-to-do-2",
      featureArticle: false,
      aVoirAbsolument: false,
      preview: {
        author: "christophe-le-goff",
        date: "2022-05-11",
        articleTitle: "How to do a template",
        tags: "demo, article, template",
        thumbnail: "/public/imp_assets/og-image.jpg",
        shortIntro: "These are the steps to setup your blog",
        category: "articles",
      },
    },
    {
      path: "/how-to-do",
      slug: "how-to-do",
      featureArticle: false,
      aVoirAbsolument: false,
      preview: {
        author: "christophe-le-goff",
        date: "2023-02-11",
        articleTitle: "How to do a template",
        tags: "demo, article, template",
        thumbnail: "/public/imp_assets/og-image.jpg",
        shortIntro: "These are the steps to setup your blog",
        category: "articles",
      },
    },
    {
      path: "/how-to-setup-blog",
      slug: "how-to-setup-blog",
      featureArticle: false,
      aVoirAbsolument: false,
      preview: {
        author: "christophe-le-goff",
        date: "2022-12-11",
        articleTitle: "How to setup this blog template",
        tags: "demo, blog setup",
        thumbnail: "/public/imp_assets/og-image.jpg",
        shortIntro: "These are the steps to setup your blog",
        category: "tutoriels",
      },
    },
    {
      path: "/how-to-setup-blog",
      slug: "how-to-setup-blog",
      featureArticle: false,
      aVoirAbsolument: false,
      preview: {
        author: "christophe-le-goff",
        date: "2022-08-10",
        articleTitle: "How to setup this blog template",
        tags: "demo, blog setup",
        thumbnail: "/public/imp_assets/og-image.jpg",
        shortIntro: "These are the steps to setup your blog",
        category: "tutoriels",
      },
    },
  ]);
  const article = JSON.parse(allArticles).filter(
    (article: iArticle) =>
      article.slug === (params !== undefined && params.slug)
  )[0];
  const authorsTab = JSON.parse(allAuthors);
  const articlesTab = JSON.parse(allArticles);
  return { props: { article, authorsTab, articlesTab } };
};
