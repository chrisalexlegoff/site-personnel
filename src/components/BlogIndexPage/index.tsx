import ArticleCard from "../../components/ArticleCards/ArticleCard";

import { useRouter } from "next/router";
import { PageLayout } from "../../components";
import { combineClasses } from "../../utils/utils";
import ReactPaginate from "react-paginate";
import { useEffect, useState } from "react";
import { iArticle } from "../../shared/interfaces";
import { AiFillCaretRight, AiFillCaretLeft } from "react-icons/ai";
import { CHRISTOPHE } from "../../../BLOG_CONSTANTS/_BLOG_SETUP";

const BlogIndexPage = ({
  articlesPerPage = 6,
}: {
  articlesPerPage?: number;
}) => {
  const router = useRouter();
  const { category, author } = router.query;
  const categoryArticles = [
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
  ].filter((each) => each.preview.category === category);
  const authorArticles = [
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
  ].filter((each) => each.preview.author.name === author);

  const [ARTICLES, setARTICLES] = useState([
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
  ]);

  useEffect(() => {
    setARTICLES(
      category
        ? categoryArticles
        : author
        ? authorArticles
        : [
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
          ]
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
    <PageLayout home>
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
            ? (currentItems as any).map((each: iArticle, i: any) => (
                <ArticleCard article={each.preview} path={each.path} key={i} />
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
