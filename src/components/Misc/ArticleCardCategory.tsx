import LinkTo from "../LinkTo";

const ArticleCardCategory = ({ category }: { category?: string }) => {
  return (
    <>
      {category && (
        <>
          <p className="text-[14px] md:text-[16px] px-2 font-normal">dans</p>
          <p
            className={
              "text-[14px] md:text-[16px] my-0 font-medium hover:text-blue-600"
            }
          >
            <LinkTo underline={false} href={"/" + category}>
              {category}
            </LinkTo>
          </p>
        </>
      )}
    </>
  );
};

export default ArticleCardCategory;
