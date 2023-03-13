import { useEffect, useState } from "react";
import { combineClasses } from "../../utils/utils";
import classes from "./Search.module.scss";
import SearchArticleCard from "../ArticleCards/SearchArticleCard";
import { MdOutlineClose } from "react-icons/md";

interface ISearch {
  closeSearch: () => void;
}
const Search = ({ closeSearch }: ISearch) => {
  const [searchStr, setSearchStr] = useState("");
  const [searchResults, setSearchResults] = useState<any[]>([]);
  const [data, setData] = useState<any[]>([]);
  const [authors, setAuthors] = useState<any[]>([]);
  useEffect(() => {
    setData([
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
        aVoirAbsolument: false,
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
    setAuthors([
      {
        name: "Christophe Le Goff",
        slug: "christophe-le-goff",
        designation: "Développeur NodeJs Full Stack",
        bio: "Je suis un développeur freelance web Full Stack passionné ayant une expérience dans la création de sites web et applications avec les framework React.js, Next.js, ExpressJS, le CMS HeadLess Strapi et l'administration de bases de données.",
        profilePic: "/public/imp_assets/profils/christophe-le-goff-500x500.jpg",
        InscriptionDate: "2022-10-19",
        social: [
          {
            icon: "Github",
            link: "https://github.com/chrisalexlegoff",
          },
          {
            icon: "Linkedin",
            link: "https://www.linkedin.com/in/chrisalexlegoff/",
          },
          {
            icon: "Facebook",
            link: "https://www.facebook.com/christophe.legoff.739",
          },
          {
            icon: "Instagram",
            link: "https://www.instagram.com/chrisalexlegoff/",
          },
          {
            icon: "Twitter",
            link: "https://twitter.com/chrisalexlegoff",
          },
        ],
      },
    ]);
  }, [searchResults]);
  const handleSearch = () => {
    const results = data.filter(
      (article) =>
        article.preview.tags
          .split(",")
          .join()
          .indexOf(searchStr.toLocaleLowerCase()) >= 0 ||
        article.preview.articleTitle.indexOf(searchStr.toLocaleLowerCase()) >= 0
    );
    setSearchResults(results);
  };

  return (
    <div
      className={combineClasses(
        "bg-slate-100 text-black dark:bg-slate-900 dark:text-white",
        classes?.search_container
      )}
    >
      <div className="container mx-auto">
        <div className="px-3">
          <div className="flex justify-between items-center md:pt-10 pt-5">
            <h1 className={"text-[45px] font-bold"}>Search</h1>
            <button
              name="search-button"
              aria-label="search button"
              type="button"
              className={classes.search_close_icon}
              onClick={closeSearch}
            >
              <MdOutlineClose className="text-slate-800 dark:text-white text-4xl" />
            </button>
          </div>
          <div className="mb-[40px] mt-3">
            <input
              className="text-[20px] w-full bg-inherit border-b border-gray-400 p-2 dark:text-white text-black"
              placeholder="Entrez des mots-clés en les séparant par une virgule"
              value={searchStr}
              onChange={(e) => setSearchStr(e.target.value)}
              onKeyPress={(e) => e.key === "Enter" && handleSearch()}
            />
          </div>
        </div>

        {searchResults?.length > 0 && (
          <div className="flex flex-wrap">
            {searchResults?.length > 0 &&
              searchResults?.map((article, i) => (
                <SearchArticleCard
                  author={
                    authors.filter(
                      (author) => author.slug === article.preview.author
                    )[0]
                  }
                  article={article.preview}
                  key={i}
                  path={`/${article.preview.category}${article.path}`}
                />
              ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Search;
