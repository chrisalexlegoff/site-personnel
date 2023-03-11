import { useState } from "react";
import { combineClasses } from "../../utils/utils";
import classes from "./Search.module.scss";
import SearchArticleCard from "../ArticleCards/SearchArticleCard";

import { MdOutlineClose } from "react-icons/md";
import { CHRISTOPHE } from "../../../BLOG_CONSTANTS/_BLOG_SETUP";

interface ISearch {
  closeSearch: () => void;
}
const Search = ({ closeSearch }: ISearch) => {
  const [searchStr, setSearchStr] = useState("");
  const [searchResults, setSearchResults] = useState<any[]>([]);
  const handleSearch = () => {
    const data = [
      {
        path: "/tutoriels/how-to-setup-blog.tsx",
        featureArticle: true,
        aVoirAbsolument: true,
        preview: {
          author: CHRISTOPHE,
          date: "August 09 2022",
          articleTitle: "How to setup this blog template",
          tags: "demo, blog setup",
          thumbnail: "/public/imp_assets/tutorials/how-to-setup-blog.svg",
          shortIntro: "These are the steps to setup your blog",
          category: "tutorial",
        },
      },
    ];
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
                  article={article.preview}
                  key={i}
                  path={article.path}
                />
              ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Search;
