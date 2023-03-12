import { iArticle, IAuthor } from "../../shared/interfaces";
import FeaturedArticle from "../ArticleCards/FeaturedArticle";
import Seperator from "../Seperator";
import Text from "../Text";
interface articlesTabProps {
  featuredArticles: iArticle[];
  authorsTab: IAuthor[];
}
const FeaturedArticleSection = ({
  featuredArticles,
  authorsTab,
}: articlesTabProps) => {
  // const featureArticles = [
  //   {
  //     path: "/how-to-setup-blog",
  //     slug: "how-to-setup-blog",
  //     featureArticle: true,
  //     aVoirAbsolument: true,
  //     preview: {
  //       author: CHRISTOPHE,
  //       date: "August 09 2022",
  //       articleTitle: "How to setup this blog template",
  //       tags: "demo, blog setup",
  //       thumbnail: "/public/imp_assets/og-image.jpg",
  //       shortIntro: "These are the steps to setup your blog",
  //       category: "tutoriels",
  //     },
  //   },
  // ];
  // const featureArticles = SORTED_ARTICLES_BY_DATE.filter(
  //   (article: iArticle) => article.featureArticle === true
  // ).slice(0, 3);
  return featuredArticles.length ? (
    <>
      <Text
        subtitle
        className="mb-5 md:!text-4xl text-3xl w-full px-3 !font-medium"
      >
        Articles mis en avant
      </Text>
      <hr className="border-1 mb-5 w-[98%] mx-auto" />

      {featuredArticles.map((each, i) => (
        <FeaturedArticle
          author={
            authorsTab.filter(
              (author) => author.slug === each.preview.author
            )[0]
          }
          article={each.preview}
          path={each.path}
          key={each.path + i}
        />
      ))}

      <Seperator />
    </>
  ) : null;
};

export default FeaturedArticleSection;
