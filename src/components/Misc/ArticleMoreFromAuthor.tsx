import Link from "next/link";
import { iArticle, IAuthor } from "../../shared/interfaces";
import {
  combineClasses,
  isDesktopDevice,
  transformImagePaths,
} from "../../utils/utils";
import LinkTo from "../LinkTo";
import Avatar from "./Avatar";
import SocialShare from "../SocialShare/SocialShare";
import {
  AiFillFacebook,
  AiFillGithub,
  AiFillInstagram,
  AiFillLinkedin,
  AiFillTwitterCircle,
} from "react-icons/ai";

const ArticleMoreFromAuthor = ({
  author,
  relatedArticles,
  articleGrid = false,
  category = "articles",
}: {
  author: IAuthor;
  relatedArticles: iArticle[];
  articleGrid?: boolean;
  category?: string;
}) => {
  const wrapperClasses =
    "bg-white dark:bg-slate-800 dark:border-none border-slate-100 shadow-lg border md:rounded-[8px] px-[15px] py-[10px] mb-[30px] overflow-hidden";
  return (
    <>
      <div className={wrapperClasses}>
        <div className="flex items-center">
          <Avatar author={author} className="w-[60px] h-[60px] mr-3 text-xl" />
          <div className="font-semibold">
            <p className={"text-[20px]  mb-0 mt-0"}>{author.name}</p>
            <p className="text-xs mt-0 mb-0">{author.designation}</p>
          </div>
        </div>
        <p className="text-[16px] mt-2">{author.bio}</p>
        {author.social?.length && (
          <div className="flex items-center flex-wrap mt-3">
            {author.social.map((each, i) => (
              <LinkTo
                underline={false}
                external
                href={each.link}
                key={i}
                className="z-50 mr-[15px] text-[32px]"
              >
                {each.icon === "Github" && <AiFillGithub />}
                {each.icon === "Linkedin" && <AiFillLinkedin />}
                {each.icon === "Facebook" && <AiFillFacebook />}
                {each.icon === "Instagram" && <AiFillInstagram />}
                {each.icon === "Twitter" && <AiFillTwitterCircle />}
              </LinkTo>
            ))}
          </div>
        )}
      </div>

      {isDesktopDevice() && (
        <div className={wrapperClasses}>
          <p className="border-b border-gray-300 pb-2 mb-3 font-medium w-full">
            Partager cet article
          </p>
          <SocialShare />
        </div>
      )}

      {relatedArticles.length && (
        <div className={wrapperClasses}>
          <p className="border-b border-gray-300 pb-2 mb-3 font-medium w-full">
            Autres {category} du même auteur
          </p>
          <div className={articleGrid ? "flex flex-wrap" : ""}>
            {relatedArticles.slice(0, 3).map((each, i) => (
              <Link href={each.path} key={i} passHref>
                <div
                  className={combineClasses(
                    "mb-3 cursor-pointer",
                    articleGrid ? "lg:w-1/3 md:w-1/2 w-full md:pr-2" : "w-full"
                  )}
                  key={each.path}
                >
                  <div className="rounded-[3px] dark:bg-slate-800 border border-slate-200 dark:border-slate-900 flex items-center overflow-hidden shadow-lg hover:shadow-md">
                    <div className={"object-cover shrink-0"}>
                      <img
                        src={transformImagePaths(each.preview.thumbnail)}
                        className="w-[120px] h-[70px] mr-2 object-cover"
                        alt={each.preview.articleTitle}
                      />
                    </div>
                    <div className="pr-1 text-[16px] hover:text-blue-500 font-semibold">
                      {each.preview.articleTitle}
                    </div>
                  </div>
                </div>
              </Link>
            ))}
            {relatedArticles.length > 3 ? (
              <LinkTo
                href={"/articles?author=" + author.name}
                passHref
                className="block text-sm py-3 px-2 text-center dark:bg-slate-900 bg-blue-500 rounded text-white font-bold hover:!text-blue-900 dark:hover:!text-slate-400 transition-all"
              >
                <p>
                  Tous les {category} de {author.name}
                </p>
              </LinkTo>
            ) : null}
          </div>
        </div>
      )}
    </>
  );
};

export default ArticleMoreFromAuthor;
