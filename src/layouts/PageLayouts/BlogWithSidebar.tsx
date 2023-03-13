import classes from "./PageLayout.module.scss";
import { combineClasses } from "../../utils/utils";
import ArticleHeader from "../../components/ArticleHeader";
import ArticleMoreFromAuthor from "../../components/Misc/ArticleMoreFromAuthor";
import { iArticle, IAuthor } from "../../shared/interfaces";

interface withSidebarProps {
  children: React.ReactNode;
  article: iArticle;
  author: IAuthor;
  articlesTab: iArticle[];
  ads?: string[];
}

const WithSidebar = ({
  children,
  ads,
  article,
  author,
  articlesTab,
}: withSidebarProps) => {
  const relatedArticles = articlesTab.filter(
    (article) =>
      article.preview.author === (author !== undefined && author.slug)
  );

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
            <ArticleHeader author={author} article={article} />
            {children}
          </article>
          <div className={classes.article_sidebar_wrapper}>
            <ArticleMoreFromAuthor
              category={
                article.preview !== undefined ? article.preview.category : ""
              }
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
