import React from "react";
import Navbar from "../../components/Navbar";
import ReadingProgress from "../../components/ReadingProgress";
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
}

const PageLayout = ({
  children,
  PAGE_SEO,
  blogwithsidebar = false,
  blogcentered = false,
  home = false,
  ads = [],
  articlesTab,
  authorsTab,
}: IBlogLayout) => {
  const target = React.createRef<HTMLDivElement>();

  return (
    <>
      <div ref={target}>
        <Navbar />
        <ReadingProgress target={target} />
        {blogwithsidebar ? (
          <WithSidebar
            articlesTab={articlesTab}
            authorsTab={authorsTab}
            children={children}
            ads={ads}
          />
        ) : blogcentered ? (
          <Centered
            authorsTab={authorsTab}
            articlesTab={articlesTab}
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
