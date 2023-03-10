import { useEffect, useState } from "react";
import { THEMES } from "../../shared/enums";
import {
  addBodyNoScroll,
  combineClasses,
  removeBodyNoScroll,
} from "../../utils/utils";
import classes from "./Navbar.module.scss";
import { Text, LinkTo } from "../../components";
import { useTheme } from "next-themes";
import { BsFillMoonFill, BsFillSunFill } from "react-icons/bs";
import { MdOutlineClose } from "react-icons/md";
import NavCatergoryDD from "../Misc/NavCategoryDD";
import {
  iArticle,
  iNavLink,
  iNavSetup,
  iNavSocials,
} from "../../shared/interfaces";
import { CURRENT_YEAR } from "../../constants/appConstants";
import { AVoirAbsoluement } from "../Misc/AVoirAbsolument";
import { IArticleDefaultsValues } from "../../shared/defaults";

interface IProps {
  openSidebar: boolean;
  closeNavSidebar: () => void;
  navSetup: iNavSetup;
  changeTheme: () => void;
}

const NavSidebar = ({
  openSidebar = false,
  closeNavSidebar,
  navSetup,
  changeTheme,
}: IProps) => {
  const { theme, setTheme } = useTheme();
  const [articlesAVoirAbsoluement, setArticlesAVoirAbsoluement] = useState<
    iArticle[]
  >([IArticleDefaultsValues]);
  console.log(articlesAVoirAbsoluement);
  useEffect(() => {
    const allArticles = JSON.stringify([
      {
        path: "/how-to-setup-blog",
        slug: "how-to-setup-blog",
        featureArticle: true,
        aVoirAbsolument: false,
        preview: {
          author: "christophe-le-goff",
          date: "2022-06-11",
          articleTitle: "How to setup this blog template",
          tags: "demo, blog setup",
          thumbnail: "/public/imp_assets/og-image.jpg",
          shortIntro: "These are the steps to setup your blog",
          category: "tutoriels",
        },
      },
      {
        path: "/how-to-do",
        slug: "how-to-do",
        featureArticle: false,
        aVoirAbsolument: true,
        preview: {
          author: "christophe-le-goff",
          date: "2022-07-11",
          articleTitle: "How to do a template",
          tags: "demo, article, template",
          thumbnail: "/public/imp_assets/og-image.jpg",
          shortIntro: "These are the steps to setup your blog",
          category: "articles",
        },
      },
      {
        path: "/how-to-do",
        slug: "how-to-do",
        featureArticle: false,
        aVoirAbsolument: false,
        preview: {
          author: "christophe-le-goff",
          date: "2022-05-11",
          articleTitle: "How to do a template",
          tags: "demo, article, template",
          thumbnail: "/public/imp_assets/og-image.jpg",
          shortIntro: "These are the steps to setup your blog",
          category: "articles",
        },
      },
      {
        path: "/how-to-do",
        slug: "how-to-do",
        featureArticle: false,
        aVoirAbsolument: false,
        preview: {
          author: "christophe-le-goff",
          date: "2023-02-11",
          articleTitle: "How to do a template",
          tags: "demo, article, template",
          thumbnail: "/public/imp_assets/og-image.jpg",
          shortIntro: "These are the steps to setup your blog",
          category: "articles",
        },
      },
      {
        path: "/how-to-setup-blog",
        slug: "how-to-setup-blog",
        featureArticle: false,
        aVoirAbsolument: false,
        preview: {
          author: "christophe-le-goff",
          date: "2022-12-11",
          articleTitle: "How to setup this blog template",
          tags: "demo, blog setup",
          thumbnail: "/public/imp_assets/og-image.jpg",
          shortIntro: "These are the steps to setup your blog",
          category: "tutoriels",
        },
      },
      {
        path: "/how-to-setup-blog",
        slug: "how-to-setup-blog",
        featureArticle: false,
        aVoirAbsolument: false,
        preview: {
          author: "christophe-le-goff",
          date: "2022-08-10",
          articleTitle: "How to setup this blog template",
          tags: "demo, blog setup",
          thumbnail: "/public/imp_assets/og-image.jpg",
          shortIntro: "These are the steps to setup your blog",
          category: "tutoriels",
        },
      },
    ]);
    const articlesTab = JSON.parse(allArticles).filter(
      (article: iArticle) => article.aVoirAbsolument
    );
    setArticlesAVoirAbsoluement(articlesTab);
    console.log(articlesTab);
  }, []);
  useEffect(() => {
    openSidebar ? addBodyNoScroll() : removeBodyNoScroll();

    return () => {
      removeBodyNoScroll();
    };
  }, [openSidebar]);

  const env = process.env.NODE_ENV;
  const [openDD, setOpenDD] = useState(false);
  useEffect(() => {
    const aside = document.querySelector("aside");
    if (aside)
      aside.onscroll = () => {
        openDD && setOpenDD(false);
      };
  }, [openDD]);

  return (
    <>
      {openSidebar ? (
        <div className="backdrop" onClick={closeNavSidebar}></div>
      ) : null}

      <aside
        className={combineClasses(
          classes.nav_sidebar_wrapper,
          openSidebar && classes.open,
          "dark:bg-slate-900 dark:text-white bg-white text-black"
        )}
      >
        <div
          className="flex items-center justify-between pb-3"
          onClick={closeNavSidebar}
        >
          <p className="">menu</p>
          <div>
            <MdOutlineClose className="text-slate-800 dark:text-white text-[25px]" />
          </div>
        </div>
        <hr />
        <div className="my-15">
          {navSetup.sideNavLinks.map((each: iNavLink, i: number) =>
            each.type !== "dropdown" ? (
              !each.newTab ? (
                <LinkTo
                  href={each.path}
                  key={i}
                  passHref
                  className="text-[16px] block my-3"
                >
                  {each.label}
                </LinkTo>
              ) : (
                <LinkTo
                  external
                  href={each.path}
                  key={i}
                  className="text-[16px] block my-3 flex-wrap"
                >
                  {each.label}
                </LinkTo>
              )
            ) : (
              <NavCatergoryDD
                key={i}
                label={each.label}
                openDD={openDD}
                setOpenDD={() => setOpenDD(!openDD)}
              />
            )
          )}
          {env != "development" ? (
            <>
              <hr />
              <Text subtitle className="mt-3 !text-[18px]">
                Examples and tutorials
              </Text>
              <LinkTo
                href="/all-components.tsx"
                passHref
                className="text-[16px] block my-3"
              >
                All Components
              </LinkTo>
              <LinkTo
                href="/style-guide.tsx"
                passHref
                className="text-[16px] block my-3"
              >
                Style Guide
              </LinkTo>
              <LinkTo
                href="/home-layout.tsx"
                passHref
                className="text-[16px] block my-3"
              >
                Home Page Layout
              </LinkTo>
              <LinkTo
                href="/blog-with-sidebar-layout.tsx"
                passHref
                className="text-[16px] block my-3"
              >
                Page Layout for article with sidebar
              </LinkTo>
              <LinkTo
                href="/blog-with-centered-layout.tsx"
                passHref
                className="text-[16px] block my-3"
              >
                Page Layout for centered article
              </LinkTo>
              <LinkTo
                href="/how-to-setup-blog.tsx"
                passHref
                className="text-[16px] block my-3"
              >
                How to setup your blog
              </LinkTo>
              <LinkTo
                href="/how-to-write-your-first-article.tsx"
                passHref
                className="text-[16px] block my-3"
              >
                How to write your first article
              </LinkTo>
              <LinkTo
                href="/how-to-deploy-blog.tsx"
                passHref
                className="text-[16px] block my-3"
              >
                How to export the blog
              </LinkTo>
              <LinkTo
                href="/icons.tsx"
                passHref
                className="text-[16px] block my-3"
              >
                Icons
              </LinkTo>
            </>
          ) : (
            <AVoirAbsoluement
              articlesAVoirAbsoluement={articlesAVoirAbsoluement}
            />
          )}
        </div>
        <hr />
        <div className="my-5">
          {navSetup.socials && (
            <>
              <p className="font-light">Suivez-moi : </p>{" "}
              {navSetup.socials.map((each: iNavSocials, i: number) => (
                <LinkTo
                  underline={false}
                  external
                  href={each.link}
                  key={i}
                  className="text-[28px] inline-block mr-5 mt-2"
                >
                  {each.icon}
                </LinkTo>
              ))}
              <hr className="mt-5" />
            </>
          )}
        </div>
        <div className="mt-5 mb-4">
          <p className="mb-2 font-light">
            Changer pour le th??me {theme === THEMES.LIGHT ? "Dark" : "Light"} :
          </p>
          <button
            name="theme-switch"
            aria-label="theme-switch"
            className={combineClasses(
              classes.theme_switch,
              "dark:text-white text-black"
            )}
            onClick={() => changeTheme()}
          >
            {theme === THEMES.DARK ? (
              <BsFillSunFill className="text-2xl" />
            ) : (
              <BsFillMoonFill className="text-lg" />
            )}
          </button>
        </div>
        <hr />
        <div className="my-5">
          <p className="text-sm font-light dark:text-gray-400 text-gray-500 mb-1">
            Copyright ?? {`${CURRENT_YEAR}`}
          </p>
          <LinkTo
            href="/privacy-policy"
            passHref
            className="text-sm font-light dark:text-gray-400 text-gray-500 pr-3"
          >
            Privacy Policy
          </LinkTo>
          <LinkTo
            href="/terms-and-condition"
            passHref
            className="text-sm font-light dark:text-gray-400 text-gray-500"
          >
            Terms and Conditions
          </LinkTo>
        </div>
      </aside>
    </>
  );
};

export default NavSidebar;
