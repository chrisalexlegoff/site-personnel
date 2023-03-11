import LinkTo from "../LinkTo";

const ArticleCardCategory = ({ category }: { category?: string }) => {
  return (
    <>
      {category && (
        <>
          <p className="text-[14px] md:text-[16px] px-2 font-normal">dans</p>
          <p
            className={
              "font-medium text-[14px] md:text-[16px] hover:text-blue-600"
            }
          >
            <LinkTo underline={false} href={"/blog?category=" + category}>
              {category}
            </LinkTo>
          </p>
        </>
      )}
    </>
  );
};

export default ArticleCardCategory;
