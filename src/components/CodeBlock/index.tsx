import Highlight, { defaultProps } from "prism-react-renderer";
import theme from "prism-react-renderer/themes/nightOwl";
import { combineClasses } from "../../utils/utils";
import { AiOutlineCopy, AiTwotoneCopy } from "react-icons/ai";
import { Pre } from "./style";
import copy from "copy-to-clipboard";
import { useState } from "react";

const CodeBlock = ({
  code,
  className,
}: {
  code: string;
  className?: string;
}) => {
  const [message, setMessage] = useState("copier");
  function copyToCliPboard(code: string) {
    copy(code);
    setMessage("copié!");
    setTimeout(() => {
      setMessage("copier");
    }, 1500);
  }
  return (
    <div className={combineClasses("bg-blue-500 md:p-5 p-2 ", className)}>
      <div className="shadow-lg relative">
        {" "}
        <div
          onClick={() => copyToCliPboard(code)}
          className="cursor-pointer group absolute flex items-center justify-center top-5 right-5"
        >
          <span
            className={`${
              message === "copié!" ? "font-bold text-blue-500" : "text-white"
            } ml-6 text-sm`}
          >
            {message}
          </span>
          {message === "copier" ? (
            <AiOutlineCopy className="text-3xl group-hover:text-blue-500 text-white" />
          ) : (
            <AiTwotoneCopy className="text-3xl text-blue-500" />
          )}
        </div>
        <Highlight {...defaultProps} theme={theme} code={code} language="tsx">
          {({ className, style, tokens, getLineProps, getTokenProps }) => (
            <Pre className={className} style={style}>
              {tokens.map((line, i) => (
                <div {...getLineProps({ line, key: i })} key={Math.random()}>
                  {line.map((token, key) => (
                    <span
                      {...getTokenProps({ token, key })}
                      key={Math.random()}
                    />
                  ))}
                </div>
              ))}
            </Pre>
          )}
        </Highlight>
      </div>
    </div>
  );
};

export default CodeBlock;
