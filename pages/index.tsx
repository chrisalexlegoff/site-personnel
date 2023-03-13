/**These are necessary imports / components for the page */
import { GetStaticProps } from "next";
import { DEFAULT_SEO } from "../BLOG_CONSTANTS/_BLOG_SETUP";
import { PageLayout, Text, LinkTo, Seperator } from "../src/components";
import FeaturedArticleSection from "../src/components/Misc/FeaturedArticleSection";
import HomeNonFeatureArticles from "../src/components/Misc/HomeNonFeatureArticles";
import { iArticle, IAuthor } from "../src/shared/interfaces";
import { sortTableauParDate } from "../src/utils/utils";

interface articlesTabProps {
  articlesTab: iArticle[];
  authorsTab: IAuthor[];
}

const Home = ({ articlesTab, authorsTab }: articlesTabProps) => {
  const featuredArticles = sortTableauParDate({ articlesTab }).filter(
    (article: iArticle) => article.featureArticle === true
  );
  const nonFeaturedArticles = sortTableauParDate({ articlesTab }).filter(
    (article: iArticle) =>
      article.preview.category === "articles" && !article.featureArticle
  );
  const nonFeaturedTutoriels = sortTableauParDate({ articlesTab }).filter(
    (article: iArticle) =>
      article.preview.category === "tutoriels" && !article.featureArticle
  );
  return (
    <PageLayout
      PAGE_SEO={DEFAULT_SEO}
      article={articlesTab[0]}
      author={authorsTab[0]}
      authorsTab={authorsTab}
      articlesTab={articlesTab}
      home
    >
      <section className="w-full md:pt-[100px] md:pb-[70px] pt-[130px] pb-20 mb-10 dark:bg-slate-800 bg-slate-200">
        <div className="container text-center px-3">
          <Text title className="text-3xl">
            Bienvenue sur le site personnel de Christophe Le Goff
          </Text>

          <Text p className="mt-3 text-xl">
            Du simple pour dompter le compliqué, je partage mon expérience de
            développeur NodeJs.
          </Text>

          <div className="flex justify-center mt-5 flex-wrap ">
            <LinkTo
              underline={false}
              external
              href="https://github.com/chrisalexlegoff"
              className="flex items-center justify-center rounded-md bg-blue-600 px-4 pb-2 text-white hover:text-white shadow-lg hover:shadow-none transition-all mb-3 md:mx-5 mx-2"
            >
              <span className="text-xl pt-2 block">Github</span>
            </LinkTo>
            <LinkTo
              underline={false}
              href="/a-propos"
              passHref
              className="flex items-center justify-center rounded-md bg-blue-600 px-4 pb-2 text-white hover:text-white shadow-lg hover:shadow-none transition-all mb-3 md:mx-5 mx-2"
            >
              <span className="text-xl pt-2 block">A propos</span>
            </LinkTo>
            <LinkTo
              underline={false}
              href="/articles"
              passHref
              className="flex items-center justify-center rounded-md bg-blue-600 px-4 pb-2 text-white hover:text-white shadow-lg hover:shadow-none transition-all mb-3 md:mx-5 mx-2"
            >
              <span className="text-xl pt-2 block">Articles</span>
            </LinkTo>
            <LinkTo
              underline={false}
              href="/tutoriels"
              passHref
              className="flex items-center justify-center rounded-md bg-blue-600 px-4 pb-2 text-white hover:text-white shadow-lg hover:shadow-none transition-all mb-3 md:mx-5 mx-2"
            >
              <span className="text-xl pt-2 block">Tutoriels</span>
            </LinkTo>
            <LinkTo
              underline={false}
              external
              href="https://www.buymeacoffee.com/chrisalexlegoff"
              className="flex items-center justify-center rounded-md bg-blue-600 px-4 pb-2 text-white hover:text-white shadow-lg hover:shadow-none transition-all mb-3 md:mx-5 mx-2"
            >
              <span className="text-xl pt-2 block">Support</span>
            </LinkTo>
          </div>
        </div>
      </section>
      <div className="container mx-auto lg:px-[15px] px-0">
        <div className={"flex flex-wrap"}>
          <FeaturedArticleSection
            authorsTab={authorsTab}
            featuredArticles={featuredArticles}
          />
        </div>
        <h1 className="px-3 w-full mb-5 text-xl md:text-3xl font-medium">
          Voir les autres articles
        </h1>
        <hr className="border-1 mb-5 w-[98%] mx-auto" />
        <div className={"flex flex-wrap"}>
          <HomeNonFeatureArticles
            authorsTab={authorsTab}
            nonFeaturedArticles={nonFeaturedArticles}
          />
        </div>
        <Seperator />
        {/* TODO: METTRE UN FILTRE !! */}
        <h1 className="px-3 w-full mb-5 text-xl md:text-3xl font-medium">
          Voir les autres tutoriels
        </h1>
        <hr className="border-1 mb-5 w-[98%] mx-auto" />
        <div className={"flex flex-wrap"}>
          <HomeNonFeatureArticles
            authorsTab={authorsTab}
            nonFeaturedArticles={nonFeaturedTutoriels}
          />
        </div>
      </div>
    </PageLayout>
  );
};

export default Home;

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
      slug: "how-to-do",
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
      slug: "how-to-do",
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
  const authorsTab = JSON.parse(allauthors);
  return { props: { articlesTab, authorsTab } };
};
