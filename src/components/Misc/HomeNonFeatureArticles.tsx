import { CHRISTOPHE } from "../../../BLOG_CONSTANTS/_BLOG_SETUP";
import { iArticle } from "../../shared/interfaces";
import ArticleCard from "../ArticleCards/ArticleCard";
import LinkTo from "../LinkTo";

const HomeNonFeatureArticles = () => {
  // const restArticles = SORTED_ARTICLES_BY_DATE.filter(
  //   (article: iArticle) => !article.featureArticle
  // );
  const restArticles = [
    {
      path: "/tutoriels/how-to-setup-blog",
      slug: "how-to-setup-blog",
      featureArticle: true,
      aVoirAbsolument: true,
      preview: {
        author: CHRISTOPHE,
        date: "August 09 2022",
        articleTitle: "How to setup this blog template",
        tags: "demo, blog setup",
        thumbnail: "/public/imp_assets/tutorials/how-to-setup-blog.svg",
        shortIntro: "These are the steps to setup your blog",
        category: "tutoriels",
      },
    },
  ];
  const articlesToDisplay = 9;
  return (
    <>
      {restArticles.length ? (
        restArticles
          .slice(0, articlesToDisplay)
          .map((each, i) => (
            <ArticleCard
              article={each.preview}
              path={each.path}
              key={each.path + i}
            />
          ))
      ) : (
        <></>
      )}

      {restArticles.length > articlesToDisplay ? (
        <div className="w-full flex items-center">
          <LinkTo
            href="/blog"
            className="w-auto h-auto text-sm py-3 px-10 text-center dark:bg-slate-800 bg-blue-500 rounded-full mx-auto text-white font-bold hover:!text-blue-900 dark:hover:!text-slate-400 transition-all"
          >
            Voir tous les articles
          </LinkTo>
        </div>
      ) : null}
    </>
  );
};

export default HomeNonFeatureArticles;
