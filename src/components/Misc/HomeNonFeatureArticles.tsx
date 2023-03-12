import { CHRISTOPHE } from "../../../BLOG_CONSTANTS/_BLOG_SETUP";
import { iArticle, IAuthor } from "../../shared/interfaces";
import ArticleCard from "../ArticleCards/ArticleCard";
import LinkTo from "../LinkTo";

interface articlesTabProps {
  nonFeaturedArticles?: iArticle[];
  authorsTab: IAuthor[];
}

const HomeNonFeatureArticles = ({
  nonFeaturedArticles,
  authorsTab,
}: articlesTabProps) => {
  const articlesToDisplay = 6;
  return (
    <>
      {nonFeaturedArticles !== undefined && nonFeaturedArticles.length ? (
        nonFeaturedArticles
          .slice(0, articlesToDisplay)
          .map((each, i) => (
            <ArticleCard
              author={
                authorsTab.filter(
                  (author) => author.slug === each.preview.author
                )[0]
              }
              article={each.preview}
              path={each.path}
              key={each.path + i}
            />
          ))
      ) : (
        <></>
      )}

      {nonFeaturedArticles !== undefined &&
      nonFeaturedArticles.length > articlesToDisplay ? (
        <div className="w-full flex items-center">
          <LinkTo
            href={`/${nonFeaturedArticles[0].preview.category}`}
            className="w-auto h-auto text-sm py-3 px-10 text-center dark:bg-slate-800 bg-blue-500 rounded-full mx-auto text-white font-bold hover:!text-blue-900 dark:hover:!text-slate-400 transition-all"
          >
            Voir tous les {`${nonFeaturedArticles[0].preview.category}`}
          </LinkTo>
        </div>
      ) : null}
    </>
  );
};

export default HomeNonFeatureArticles;
