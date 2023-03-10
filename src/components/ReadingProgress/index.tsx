import React from "react";

interface Props {
  target: React.RefObject<HTMLDivElement>;
  changeColorByTheme?: boolean;
}

const ReadingProgress: React.FC<Props> = ({
  target,
  changeColorByTheme = false,
}) => {
  const [readingProgress, setReadingProgress] = React.useState(0);
  const scrollListener = () => {
    if (!target.current) {
      return;
    }

    const element = target.current;
    const totalHeight =
      element.clientHeight - element.offsetTop - window.innerHeight;
    const windowScrollTop =
      window.pageYOffset ||
      document.documentElement.scrollTop ||
      document.body.scrollTop ||
      0;

    if (windowScrollTop === 0) {
      return setReadingProgress(0);
    }

    if (windowScrollTop > totalHeight) {
      return setReadingProgress(100);
    }

    setReadingProgress((windowScrollTop / totalHeight) * 100);
  };

  React.useEffect(() => {
    window.addEventListener("scroll", scrollListener);
    return () => window.removeEventListener("scroll", scrollListener);
  });

  return (
    <>
      {readingProgress > 0 &&
        (changeColorByTheme ? (
          <div
            className="fixed top-0 h-[5px] bg-slate-900 dark:bg-blue-600 z-50"
            style={{ width: `${readingProgress}%` }}
          />
        ) : (
          <div
            className="fixed top-0 h-[5px] bg-blue-600 z-50"
            style={{ width: `${readingProgress}%` }}
          />
        ))}
    </>
  );
};
export default ReadingProgress;
