import React from "react";
import Navbar from "../../components/Navbar";
import ReadingProgress from "../../components/ReadingProgress";
import { iSEO } from "../../shared/interfaces";
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
}

const PageLayout = ({
  children,
  PAGE_SEO,
  blogwithsidebar = false,
  blogcentered = false,
  home = false,
  ads = [],
}: IBlogLayout) => {
  const target = React.createRef<HTMLDivElement>();

  return (
    <>
      <div ref={target}>
        <Navbar />
        <ReadingProgress target={target} />
        {blogwithsidebar ? (
          <WithSidebar children={children} ads={ads} />
        ) : blogcentered ? (
          <Centered children={children} />
        ) : home ? (
          <HomeLayout children={children} />
        ) : (
          <HomeLayout children={children} />
        )}
      </div>
    </>
  );
};
export default PageLayout;
