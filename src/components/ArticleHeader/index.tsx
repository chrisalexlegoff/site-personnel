import { iArticle, IAuthor } from "../../shared/interfaces";
import ArticleHeaderCenter from "./ArticleHeaderCentered";
import ArticleHeaderDefault from "./ArticleHeaderDefault";

interface IArticleHeader {
  centered?: boolean;
  article: iArticle;
  author: IAuthor;
}
const ArticleHeader = ({
  centered = false,
  article,
  author,
}: IArticleHeader) => {
  return centered ? (
    <ArticleHeaderCenter author={author} headerData={article.preview} />
  ) : (
    <ArticleHeaderDefault author={author} headerData={article.preview} />
  );
};

export default ArticleHeader;
