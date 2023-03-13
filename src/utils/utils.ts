import { THEMES } from "../shared/enums";
import { GAEvent } from "../../google";
import { iArticle, iSEO } from "../shared/interfaces";
import { WEBSITE_NAME } from "../../BLOG_CONSTANTS/_BLOG_SETUP";
import { useRouter } from "next/router";

// env
const env = process.env.NODE_ENV;
export const IS_DEV_MODE = env === "development" ? true : false;

/**
 *
 * @param classes string
 * @returns string
 */
export const combineClasses = function (...classes: any): string {
  return classes.filter((item: any) => !!item).join(" ");
};

/**
 * Changes Dark / Light Theme
 */
export const changeTheme = (): void => {
  const lsTheme = localStorage.getItem("theme");
  localStorage.setItem(
    "theme",
    lsTheme === THEMES.LIGHT ? THEMES.DARK : THEMES.LIGHT
  );

  if (
    localStorage.theme === "dark" ||
    (!("theme" in localStorage) &&
      window.matchMedia("(prefers-color-scheme: dark)").matches)
  ) {
    document.documentElement.classList.add("dark");
  } else {
    document.documentElement.classList.remove("dark");
  }

  location.reload();
};

/**
 * Returns Device Type tablet , mobile, desktop
 * @returns string
 */
export const getDeviceType = (): string => {
  const ua = typeof window !== "undefined" ? navigator.userAgent : "desktop";
  if (/(tablet|ipad|playbook|silk)|(android(?!.*mobi))/i.test(ua)) {
    return "tablet";
  }
  if (
    /Mobile|iP(hone|od)|Android|BlackBerry|IEMobile|Kindle|Silk-Accelerated|(hpw|web)OS|Opera M(obi|ini)/.test(
      ua
    )
  ) {
    return "mobile";
  }
  return "desktop";
};

/**
 * Returns true if desktop
 * @returns boolean
 */
export const isDesktopDevice = (): boolean => {
  if (getDeviceType() === "desktop") {
    return true;
  } else {
    return false;
  }
};

/**
 * Returns true if mobile
 * @returns boolean
 */
export const isMobileDevice = (): boolean => {
  if (getDeviceType() === "mobile") {
    return true;
  } else {
    return false;
  }
};

/**
 * Add no scroll class to body when modal isopen
 */
export const addBodyNoScroll = (): void => {
  document.body.classList.add("no-scroll");
};

/**
 * Removes no scroll class to body when modal isopen
 */
export const removeBodyNoScroll = (): void => {
  document.body.classList.remove("no-scroll");
};

/**
 * Removes /public from images path
 * @param path
 * @returns string
 */
export const transformImagePaths = (path = ""): string => {
  return path.replace("/public", "");
};

/**
 * Share link or article method
 * @returns false if desktop else open share window on mobile devices
 */
export const webShare = () => {
  const pageTitle = document.title;
  const url =
    typeof window !== "undefined"
      ? window.location.href
      : process.env.NEXT_PUBLIC_URL;

  GAEvent({
    action: "share_clicked",
    event_category: "click",
    label: url,
    value: null,
  });

  if (isDesktopDevice()) {
    return false;
  } else {
    if (typeof window !== "undefined" && navigator) {
      navigator
        .share({
          text: pageTitle,
          url: url,
        })
        .catch(console.error);
      return true;
    } else {
      return false;
    }
  }
};

/**
 * Cacher la barre de navigation au scroll
 * @returns false si pas de nav!
 */
export const hideNavWhileScrolling = ({
  id = "navbar",
  offset = 100,
  when = true,
}: {
  id?: string;
  offset?: number;
  when: boolean;
}) => {
  const nav = document.getElementById(id);
  if (!nav) return;

  let prevScrollPos = window.pageYOffset;

  window.onscroll = () => {
    if (when) {
      let curScrollPos = window.pageYOffset;
      if (prevScrollPos < curScrollPos) nav.style.top = `-${offset}px`;
      else nav.style.top = "0";
      prevScrollPos = curScrollPos;
    }
  };
};

interface articlesTabProps {
  articlesTab: iArticle[];
}
/**
 * Trier les articles: anciens > récents
 * @returns Tableau d'articles
 */
export const sortTableauParDate = ({ articlesTab }: articlesTabProps) => {
  return articlesTab.sort((a, b) =>
    new Date(a.preview.date) > new Date(b.preview.date) ? -1 : 1
  );
};

/**
 * Transfo. Date FR
 * @returns Date
 */
export const dateToFr = ({ date }: any) => {
  let dateAr = new Date(date).toLocaleDateString().split("/");
  const mois = [
    "Janvier",
    "Février",
    "Mars",
    "Avril",
    "Mai",
    "Juin",
    "Juillet",
    "Aout",
    "Septembre",
    "Octobre",
    "Novembre",
    "Décembre",
  ];
  return `${dateAr[0]} ${mois[parseInt(dateAr[1]) - 1]} ${dateAr[2]}`;
};

/**
 * Creates SEO Config from ArticleDetails.preview || ArticleDetails.seo ||  PAGE_SEO
 * @param PAGE_SEO : iSEO
 * @returns SEO config
 */
export const CREATE_SEO_CONFIG = (pageSEO: iSEO) => {
  /**
   * We can create SEO Config from
   * ARTICLE_DETAILS or SEO object passed in article list or layout
   */
  const router = useRouter();

  const isArticle = pageSEO.hasOwnProperty("seo");
  console.log(isArticle);

  // set url and path
  const origin =
    typeof window !== "undefined" && window.location.origin
      ? window.location.origin
      : "";
  const LOCAL_URL = IS_DEV_MODE
    ? origin
    : process.env.NEXT_PUBLIC_URL
    ? process.env.NEXT_PUBLIC_URL
    : origin;
  const LOCAL_PATH = isArticle ? pageSEO["seo"]?.path : router.asPath;

  const meta_description = isArticle
    ? pageSEO["seo"]?.preview?.shortIntro
    : pageSEO.description;

  const keywords = isArticle
    ? pageSEO["seo"]?.preview?.tags
    : pageSEO?.keywords;
  const ogUrl = `${LOCAL_URL}${LOCAL_PATH}`;

  const ogImage = pageSEO.ogImage
    ? `${LOCAL_URL}${transformImagePaths(pageSEO?.ogImage)}`
    : `${LOCAL_URL}${
        isArticle ? transformImagePaths(pageSEO["seo"]?.preview.thumbnail) : ""
      }`;

  const twitterHandle = pageSEO?.twitterHandle || "";
  const author = isArticle ? pageSEO["seo"]?.preview.author : pageSEO?.author;

  const title =
    router.asPath === "/"
      ? `${
          isArticle ? pageSEO["seo"]?.preview?.articleTitle : pageSEO?.title
        } ${author ? "| " + author : ""}`
      : `${
          isArticle ? pageSEO["seo"]?.preview?.articleTitle : pageSEO?.title
        } | ${WEBSITE_NAME} ${
          author && author !== WEBSITE_NAME ? "| " + author : ""
        }`;

  let seo_config = {
    title: title,
    description: meta_description,
    canonical: `${process.env.NEXT_PUBLIC_URL}${router.asPath}`,
    additionalMetaTags: [
      {
        property: "keywords",
        content: keywords || "",
      },
      {
        property: "al:web:url",
        content: ogUrl,
      },
    ],
    openGraph: {
      type: "website",
      locale: "fr_FR",
      url: ogUrl,
      site_name: WEBSITE_NAME,
      images: [
        {
          url: ogImage,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
    },
    twitter: {
      handle: twitterHandle,
      site: ogUrl,
      cardType: "summary_large_image",
    },
  };
  return seo_config;
};
