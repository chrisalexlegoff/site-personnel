import classes from "./PageLayout.module.scss";
import { combineClasses } from "../../utils/utils";
import Seperator from "../../components/Seperator";
import ArticleHeader from "../../components/ArticleHeader";
import Avatar from "../../components/Misc/Avatar";
import ArticleMoreFromAuthor from "../../components/Misc/ArticleMoreFromAuthor";
import { CHRISTOPHE } from "../../../BLOG_CONSTANTS/_BLOG_SETUP";
import { iArticle, IAuthor } from "../../shared/interfaces";

interface centeredProps {
  children: React.ReactNode;
  articlesTab?: iArticle[];
  authorsTab?: IAuthor[];
}

const Centered = ({ children, articlesTab, authorsTab }: centeredProps) => {
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
          <ArticleHeader ARTICLE_DETAILS={ARTICLE_DETAILS} centered />
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
