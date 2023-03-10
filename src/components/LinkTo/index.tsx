import Link from "next/link";
import { combineClasses, transformPath } from "../../utils/utils";

interface iLinkTo {
  href: string;
  passHref?: boolean;
  newTab?: boolean;
  children?: any;
  external?: boolean;
  className?: string;
  underline?: boolean;
}

const LinkTo = ({
  href,
  passHref = true,
  newTab = false,
  external = false,
  children,
  className,
  underline = true,
}: iLinkTo) => {
  return (
    <>
      {newTab || external ? (
        <a
          href={transformPath(href)}
          className={`${className} w-fit`}
          target="_blank"
          rel="noopener noreferrer"
        >
          <span className="group relative w-fit">
            {children}
            {underline && (
              <span className="absolute -bottom-0.5 left-0 h-[1px] w-0 group-hover:w-full group-focus:w-full bg-blue-500 duration-300 ease-in-scroll"></span>
            )}
          </span>
        </a>
      ) : (
        <Link href={transformPath(href)} passHref={passHref}>
          <span
            className={combineClasses(
              `${className} w-fit cursor-pointer hover:text-blue-500`
            )}
          >
            <span className="group relative w-fit">
              {children}
              {underline && (
                <span className="absolute -bottom-0.5 left-0 h-[1px] w-0 group-hover:w-full group-focus:w-full bg-blue-500 duration-300 ease-in-scroll"></span>
              )}
            </span>
          </span>
        </Link>
      )}
    </>
  );
};

export default LinkTo;
