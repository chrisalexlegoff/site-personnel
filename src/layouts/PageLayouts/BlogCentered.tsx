import classes from "./PageLayout.module.scss";
import { combineClasses } from "../../utils/utils";
import Seperator from "../../components/Seperator";
import ArticleHeader from "../../components/ArticleHeader";
import ArticleMoreFromAuthor from "../../components/Misc/ArticleMoreFromAuthor";
import { iArticle, IAuthor } from "../../shared/interfaces";

interface centeredProps {
  children: React.ReactNode;
  article: iArticle;
  author: IAuthor;
  articlesTab: iArticle[];
}

const Centered = ({
  children,
  article,
  author,
  articlesTab,
}: centeredProps) => {
  const relatedArticles = articlesTab.filter(
    (article) =>
      article.preview.author === (author !== undefined && author.slug)
  );

  return (
    <section
      className={combineClasses(
        classes.centered_article_wrapper,
        "dark:bg-slate-900 dark:text-white"
      )}
    >
      <div className="container px-0 md:px-[15px] pt-[50px] pb-[50px]">
        <article
          className={combineClasses(
            classes.article_content,
            "pb-[30px] px-3 bg-white dark:bg-slate-800 dark:border-none dark:drop-shadow-lg dark:text-white pt-10 md:pt-0 mx-auto font-regular text-lg leading-relaxed"
          )}
        >
          <ArticleHeader author={author} article={article} centered />
          {children}
        </article>
        <Seperator />
        <div className={combineClasses(classes.author_and_more, "mx-auto")}>
          <ArticleMoreFromAuthor
            author={author}
            relatedArticles={relatedArticles}
            articleGrid
          />
        </div>
      </div>
    </section>
  );
};

export default Centered;
