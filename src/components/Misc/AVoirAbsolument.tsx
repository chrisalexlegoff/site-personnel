import { LinkTo } from "..";
import { SORTED_ARTICLES_BY_DATE } from "../../../BLOG_CONSTANTS/_ARTICLES_LIST";
import { iArticle } from "../../shared/interfaces";
import Text from "../Text";

export const AVoirAbsoluement = () => {
  const aVoirAbsolumentArticles = SORTED_ARTICLES_BY_DATE.filter(
    (article: iArticle) => article.aVoirAbsolument === true
  ).slice(0, 4);
  return aVoirAbsolumentArticles.length ? (
    <>
      <hr />
      <Text subtitle className="mt-3 !text-[18px]">
        A voir absolument!
      </Text>
      {aVoirAbsolumentArticles.map((each: iArticle, i: number) => (
        <LinkTo
          key={i}
          href={each.path}
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
