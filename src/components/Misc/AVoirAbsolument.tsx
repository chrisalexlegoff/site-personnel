import { LinkTo } from "..";
import { iArticle } from "../../shared/interfaces";
import Text from "../Text";

interface articlesAVoirAbsoluementProps {
  articlesAVoirAbsoluement: iArticle[];
}

export const AVoirAbsoluement = ({
  articlesAVoirAbsoluement,
}: articlesAVoirAbsoluementProps) => {
  return articlesAVoirAbsoluement.length ? (
    <>
      <hr />
      <Text subtitle className="mt-3 !text-[18px]">
        A voir absolument 🖐️
      </Text>
      {articlesAVoirAbsoluement.map((each: any, i: number) => (
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
