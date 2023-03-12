import classes from "./PageLayout.module.scss";
import { combineClasses } from "../../utils/utils";
import ArticleHeader from "../../components/ArticleHeader";
import ArticleMoreFromAuthor from "../../components/Misc/ArticleMoreFromAuthor";
import { CHRISTOPHE } from "../../../BLOG_CONSTANTS/_BLOG_SETUP";
import { iArticle, IAuthor } from "../../shared/interfaces";

interface withSidebarProps {
  children: React.ReactNode;
  articlesTab?: iArticle[];
  authorsTab?: IAuthor[];
  ads?: string[];
}

const WithSidebar = ({
  children,
  ads,
  articlesTab,
  authorsTab,
}: withSidebarProps) => {
  // const ARTICLE_DETAILS = getArticleDetails();
  // const author = ARTICLE_DETAILS.preview.author;
  // const relatedArticles = SORTED_ARTICLES_BY_DATE.filter((each) => each.preview.author === author);
  const author = CHRISTOPHE;
  // const relatedArticles = SORTED_ARTICLES_BY_DATE.filter((each) => each.preview.author === author);
  const relatedArticles = [
    {
      path: "/how-to-setup-blog.tsx",
      featureArticle: true,
      aVoirAbsolument: true,
      preview: {
        author: CHRISTOPHE,
        date: "August 09 2022",
        articleTitle: "How to setup this blog template",
        tags: "demo, blog setup",
        thumbnail: "/public/imp_assets/og-image.jpg",
        shortIntro: "These are the steps to setup your blog",
        category: "tutorial",
      },
    },
  ];
  const ARTICLE_DETAILS = {
    path: "/how-to-setup-blog.tsx",
    featureArticle: true,
    aVoirAbsolument: true,
    preview: {
      author: CHRISTOPHE,
      date: "August 09 2022",
      articleTitle: "How to setup this blog template",
      tags: "demo, blog setup",
      thumbnail: "/public/imp_assets/og-image.jpg",
      shortIntro: "These are the steps to setup your blog",
      category: "tutorial",
    },
  };

  return (
    <>
      <section
        className={combineClasses(
          classes.withSidebar_article_wrapper,
          "dark:bg-slate-900 dark:text-white"
        )}
      >
        <div className="container px-0 md:px-[15px] lg:flex pb-[50px] pt-[50px]">
          <article
            className={combineClasses(
              classes.article_content,
              "pb-[20px] px-3 text-black bg-white dark:bg-slate-800 dark:border-none dark:drop-shadow-lg dark:text-white pt-10 md:pt-0 font-regular text-lg leading-relaxed"
            )}
          >
            <ArticleHeader ARTICLE_DETAILS={ARTICLE_DETAILS} />
            {children}
          </article>
          <div className={classes.article_sidebar_wrapper}>
            <ArticleMoreFromAuthor
              author={author}
              relatedArticles={relatedArticles}
            />
            {ads && ads.length ? (
              <div className="flex flex-wrap">
                {ads.map((each: string, i: any) => (
                  <div
                    dangerouslySetInnerHTML={{
                      __html: `${each}`,
                    }}
                    key={i}
                  />
                ))}
              </div>
            ) : null}
          </div>
        </div>
      </section>
    </>
  );
};

export default WithSidebar;
