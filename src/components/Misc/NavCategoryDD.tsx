import { BiChevronDown } from "react-icons/bi";
import { combineClasses } from "../../utils/utils";
import LinkTo from "../LinkTo";

interface INavCatergoryDD {
  openDD: boolean;
  setOpenDD: any;
  label: string;
  floating?: boolean;
}

const NavCatergoryDD = ({
  openDD,
  setOpenDD,
  label,
  floating = false,
}: INavCatergoryDD) => {
  const categories = ["Articles", "Tutoriels", "Auteurs"];
  return (
    <>
      <div className={"relative"}>
        <div
          className={combineClasses(
            "flex items-center cursor-pointer",
            floating ? "mx-2" : "justify-between"
          )}
          onClick={() => setOpenDD(!openDD)}
        >
          <p className="my-0">{label}</p>
          <BiChevronDown className="text-[20px]" />
        </div>
        <div
          onMouseLeave={() => setOpenDD(!openDD)}
          className={combineClasses(
            "overflow-auto",
            floating
              ? "absolute w-[180px] z-20 top-[30px] rounded-[4px] shadow-lg bg-white dark:bg-slate-800 border border-gray-300 dark:border-0"
              : "relative",
            openDD ? "h-auto" : "h-0 border-0"
          )}
        >
          {categories.map((each, i) => (
            <LinkTo
              href={each.toLowerCase()}
              key={i}
              passHref
              className={`block text-sm py-2 px-2 ${
                i !== 0 ? "border-t" : ""
              } border-gray-400`}
            >
              <span
                style={{ textTransform: "capitalize" }}
                onClick={() => setOpenDD(!openDD)}
              >
                {each}
              </span>
            </LinkTo>
          ))}
        </div>
      </div>
    </>
  );
};

export default NavCatergoryDD;
