import { iArticle, IAuthor } from "../../shared/interfaces";

interface homeLayoutProps {
  children: React.ReactNode;
  articlesTab?: iArticle[];
  authorsTab: IAuthor[];
}

const HomeLayout = ({ children, articlesTab, authorsTab }: homeLayoutProps) => {
  return (
    <>
      <div
        className={
          "dark:bg-slate-900 dark:text-white bg-slate-100 text-black pb-[20px] md:min-h-screen font-regular text-lg leading-relaxed"
        }
      >
        {children}
      </div>
    </>
  );
};

export default HomeLayout;
