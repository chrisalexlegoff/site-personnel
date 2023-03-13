import React from "react";
import Navbar from "../../components/Navbar";
import ReadingProgress from "../../components/ReadingProgress";
import {
  IArticleDefaultsValues,
  IAuthorDefaultsValues,
} from "../../shared/defaults";
import { iArticle, IAuthor, iSEO } from "../../shared/interfaces";
import Centered from "./BlogCentered";
import WithSidebar from "./BlogWithSidebar";
import HomeLayout from "./HomeLayout";

interface IBlogLayout {
  children: any;
  PAGE_SEO?: iSEO;
  blogwithsidebar?: boolean;
  blogcentered?: boolean;
  home?: boolean;
  ads?: string[];
  articlesTab?: iArticle[];
  authorsTab?: IAuthor[];
  author?: IAuthor;
  article?: iArticle;
}

const PageLayout = ({
  children,
  blogwithsidebar = false,
  blogcentered = false,
  home = false,
  ads = [],
  articlesTab = [],
  authorsTab = [],
  article = IArticleDefaultsValues,
  author = IAuthorDefaultsValues,
}: IBlogLayout) => {
  const target = React.createRef<HTMLDivElement>();
  return (
    <>
      <div ref={target}>
        <Navbar />
        <ReadingProgress target={target} />
        {blogwithsidebar ? (
          <WithSidebar
            author={author}
            articlesTab={articlesTab}
            article={article}
            children={children}
            ads={ads}
          />
        ) : blogcentered ? (
          <Centered
            author={author}
            articlesTab={articlesTab}
            article={article}
            children={children}
          />
        ) : home ? (
          <HomeLayout
            authorsTab={authorsTab}
            articlesTab={articlesTab}
            children={children}
          />
        ) : (
          <HomeLayout
            authorsTab={authorsTab}
            articlesTab={articlesTab}
            children={children}
          />
        )}
      </div>
    </>
  );
};
export default PageLayout;
