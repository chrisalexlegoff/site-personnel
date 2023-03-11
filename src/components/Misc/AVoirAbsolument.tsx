import { LinkTo } from "..";
import { CHRISTOPHE } from "../../../BLOG_CONSTANTS/_BLOG_SETUP";
import { iArticle } from "../../shared/interfaces";
import Text from "../Text";

export const AVoirAbsoluement = () => {
  // const aVoirAbsolumentArticles = SORTED_ARTICLES_BY_DATE.filter(
  //   (article: iArticle) => article.aVoirAbsolument === true
  // ).slice(0, 4);
  const aVoirAbsolumentArticles = [
    {
      path: "/how-to-setup-blog",
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
  return aVoirAbsolumentArticles.length ? (
    <>
      <hr />
      <Text subtitle className="mt-3 !text-[18px]">
        A voir absolument 🖐️
      </Text>
      {aVoirAbsolumentArticles.map((each: any, i: number) => (
        <LinkTo
          key={i}
          href={each.preview.category + each.path}
          passHref
          className="text-[16px] block my-3"
        >
          {each.preview.articleTitle}
        </LinkTo>
      ))}
    </>
  ) : (
    <></>
  );
};
