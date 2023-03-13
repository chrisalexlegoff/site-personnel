import ArticleCard from "../ArticleCards/ArticleCard";
import { useRouter } from "next/router";
import { PageLayout } from "..";
import { combineClasses, sortTableauParDate } from "../../utils/utils";
import ReactPaginate from "react-paginate";
import { useEffect, useState } from "react";
import { iArticle, IAuthor, iSEO } from "../../shared/interfaces";
import { AiFillCaretRight, AiFillCaretLeft } from "react-icons/ai";
import AuthorCard from "../AuteurCards";

const AuthorsIndexPage = ({
  PAGE_SEO,
  authorsPerPage = 1,
  authorsTab,
}: {
  PAGE_SEO?: iSEO;
  authorsPerPage?: number;
  authorsTab: IAuthor[];
}) => {
  const [authors, setAuthors] = useState(authorsTab);

  useEffect(() => {
    setAuthors(authorsTab);
  }, []);
  const [currentItems, setCurrentItems] = useState(authors);
  const [pageCount, setPageCount] = useState(0);
  const [itemOffset, setItemOffset] = useState(0);

  useEffect(() => {
    const endOffset = itemOffset + authorsPerPage;
    setCurrentItems(authors.slice(itemOffset, endOffset));
    setPageCount(Math.ceil(authors.length / authorsPerPage));
  }, [itemOffset, authorsPerPage, authors]);

  const handlePageClick = (event: any) => {
    const newOffset = (event.selected * authorsPerPage) % authors.length;
    setItemOffset(newOffset);
  };

  return (
    <PageLayout PAGE_SEO={PAGE_SEO} authorsTab={authorsTab} home>
      <div className="container mt-10 md:pt-0 px-0 md:px-3 pt-14">
        <h1
          className="px-2 mb-[30px] text-[45px] font-bold"
          style={{ textTransform: "capitalize" }}
        >
          Tous les auteurs
          <hr className="mt-[10px]" />
        </h1>

        <div className="flex flex-wrap">
          {currentItems
            ? (currentItems as any).map((each: IAuthor, i: any) => (
                <AuthorCard author={each} key={i} />
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

export default AuthorsIndexPage;
