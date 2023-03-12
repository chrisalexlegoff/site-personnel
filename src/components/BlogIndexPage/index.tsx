import ArticleCard from "../../components/ArticleCards/ArticleCard";
import { useRouter } from "next/router";
import { PageLayout } from "../../components";
import { combineClasses, sortTableauParDate } from "../../utils/utils";
import ReactPaginate from "react-paginate";
import { useEffect, useState } from "react";
import { iArticle, IAuthor } from "../../shared/interfaces";
import { AiFillCaretRight, AiFillCaretLeft } from "react-icons/ai";

const BlogIndexPage = ({
  articlesPerPage = 1,
  articlesTab,
  authorsTab,
  category = "",
  author = "",
}: {
  articlesPerPage?: number;
  articlesTab: iArticle[];
  authorsTab: IAuthor[];
  category?: string;
  author?: string;
}) => {
  const categoryArticles = sortTableauParDate({ articlesTab }).filter(
    (each) => each.preview.category === category
  );
  const authorArticles = sortTableauParDate({ articlesTab }).filter(
    (each) => each.preview.author === author
  );

  const [ARTICLES, setARTICLES] = useState(sortTableauParDate({ articlesTab }));

  useEffect(() => {
    setARTICLES(
      category
        ? categoryArticles
        : author
        ? authorArticles
        : sortTableauParDate({ articlesTab })
    );
  }, [category, author]);
  const [currentItems, setCurrentItems] = useState(ARTICLES);
  const [pageCount, setPageCount] = useState(0);
  const [itemOffset, setItemOffset] = useState(0);

  useEffect(() => {
    const endOffset = itemOffset + articlesPerPage;
    setCurrentItems(ARTICLES.slice(itemOffset, endOffset));
    setPageCount(Math.ceil(ARTICLES.length / articlesPerPage));
  }, [itemOffset, articlesPerPage, ARTICLES]);

  const handlePageClick = (event: any) => {
    const newOffset = (event.selected * articlesPerPage) % ARTICLES.length;
    setItemOffset(newOffset);
  };

  return (
    <PageLayout articlesTab={articlesTab} home>
      <div
        className={combineClasses(
          "container mt-10 md:pt-0 px-0 md:px-3",
          category ? "pt-10" : "pt-14"
        )}
      >
        {category || author ? (
          <h1
            className="px-2 mb-[30px] text-[45px] font-bold"
            style={{ textTransform: "capitalize" }}
          >
            {category || author}
            <hr className="mt-[10px]" />
          </h1>
        ) : null}

        <div className="flex flex-wrap">
          {currentItems
            ? (currentItems as any).map((each: iArticle, i: number) => (
                <ArticleCard
                  author={
                    authorsTab.filter(
                      (author) => author.slug === each.preview.author
                    )[0]
                  }
                  article={each.preview}
                  path={each.path}
                  key={i}
                />
              ))
            : null}
        </div>

        <ReactPaginate
          breakLabel="..."
          nextLabel={<AiFillCaretRight />}
          onPageChange={handlePageClick}
          pageRangeDisplayed={1}
          pageCount={pageCount}
          previousLabel={<AiFillCaretLeft />}
          containerClassName="pagination"
          activeClassName="active"
        />
      </div>
    </PageLayout>
  );
};

export default BlogIndexPage;
