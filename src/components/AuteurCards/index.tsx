import LinkTo from "../LinkTo";
import { IArticleHeaderData } from "../../shared/interfaces";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillLinkedin,
  AiFillInstagram,
  AiFillFacebook,
  AiFillTwitterCircle,
  AiOutlineGithub,
  AiOutlineLinkedin,
} from "react-icons/ai";
import {
  combineClasses,
  dateToFr,
  transformImagePaths,
} from "../../utils/utils";
import classes from "./auteurCard.module.scss";
import Avatar from "../Misc/Avatar";
import ArticleCardCategory from "../Misc/ArticleCardCategory";
import ArticleTags from "../Misc/ArticleTags";
import Image from "next/image";
import { IAuthor } from "../../shared/interfaces";

interface IProp {
  author: IAuthor;
  path: string;
}

const AuthorCard = ({ author, path }: IProp) => {
  // set url and path
  const origin =
    typeof window !== "undefined" && window.location.origin
      ? window.location.origin
      : "";

  const imgLoader = ({ src, width, quality }: any) => {
    return `${origin}${src}?w=${width}&q=${quality || 75}`;
  };

  return (
    <div
      className={"z-10 w-full lg:w-1/3 md:w-1/2 md:px-[15px] px-2 mb-[30px]"}
    >
      <div
        className={combineClasses(
          classes.author_card,
          "border-b-[5px] border-blue-500 dark:bg-slate-800 dark:text-white dark:drop-shadow-lg flex flex-col justify-between"
        )}
      >
        <div>
          <div className={"rounded-t-[4px] overflow-hidden h-[200px] relative"}>
            <Image
              src={transformImagePaths(author.profilePic)}
              alt={author.name}
              layout="fill"
              quality={100}
              objectFit="cover"
              loader={imgLoader}
            />
          </div>

          <div className={"d-block px-[15px] py-0"}>
            <p className={"font-normal text-xs pt-3 mb-0 md:mb-3"}>
              Inscrit le {dateToFr({ date: author.InscriptionDate })}
            </p>
            {/* <LinkTo underline={false} href={author.category + path} passHref>
              <h1
                className={
                  "text-[22px] font-bold cursor-pointer tracking-wide hover:text-blue-600"
                }
              >
                {article.articleTitle}
              </h1>
            </LinkTo> */}
            <p
              className={combineClasses(
                classes.article_card__intro,
                "text-sm font-normal mt-2 md:mt-1"
              )}
            >
              {author.bio.slice(0, 100)} ...
            </p>
            {/* <ArticleTags tags={article.tags} /> */}
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
        </div>
        <div
          className={combineClasses(
            classes.article_card_footer,
            "mt-4 mb-3 flex items-center px-3"
          )}
        >
          <div className={"flex items-center"}>
            <Avatar
              author={author}
              className="w-[40px] h-[40px] mr-3 text-xl"
            />
            <LinkTo
              href={`/auteurs/${author.slug}`}
              passHref
              className={combineClasses(
                classes.author_name,
                "font-medium text-[14px] md:text-[16px] hover:text-blue-600"
              )}
            >
              {author.name}
            </LinkTo>
            {/* <p className={combineClasses(classes.author_name, 'text-sm font-medium')}>
              {article.author.name}
            </p> */}
          </div>
          {/* <ArticleCardCategory category={article.category} /> */}
        </div>
      </div>
    </div>
  );
};

export default AuthorCard;
