import { NextSeo } from "next-seo";
import React from "react";
import { DEFAULT_SEO } from "../../../BLOG_CONSTANTS/_BLOG_SETUP";
import Navbar from "../../components/Navbar";
import ReadingProgress from "../../components/ReadingProgress";
import {
  IArticleDefaultsValues,
  IAuthorDefaultsValues,
} from "../../shared/defaults";
import { iArticle, IAuthor, iMetaRobot, iSEO } from "../../shared/interfaces";
import { CREATE_SEO_CONFIG } from "../../utils/utils";
import Centered from "./BlogCentered";
import WithSidebar from "./BlogWithSidebar";
import HomeLayout from "./HomeLayout";

interface IBlogLayout {
  metaRobot?: iMetaRobot;
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
  metaRobot,
  PAGE_SEO,
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
  let SEO_CONFIG = {};
  if (article && article.seo) {
    SEO_CONFIG = CREATE_SEO_CONFIG({ ...article.seo });
  } else if (PAGE_SEO) {
    SEO_CONFIG = CREATE_SEO_CONFIG({ ...DEFAULT_SEO, ...PAGE_SEO });
  } else {
    SEO_CONFIG = CREATE_SEO_CONFIG({ ...DEFAULT_SEO });
  }
  return (
    <>
      <div ref={target}>
        <NextSeo
          noindex={metaRobot ? metaRobot.noindex : false}
          nofollow={metaRobot ? metaRobot.nofollow : false}
          {...SEO_CONFIG}
        />
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
