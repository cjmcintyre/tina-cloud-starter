import * as React from "react";
import { Actions } from "../actions";
import { Section } from "../section";
import { Container } from "../container";

import Markdown from "react-markdown";
import { Icon } from "../icon";
import { ThemeContext } from "../theme";

export const headlineColorClasses = {
  blue: "from-blue-400 to-blue-600",
  teal: "from-teal-400 to-teal-600",
  green: "from-green-400 to-green-600",
  red: "from-red-400 to-red-600",
  pink: "from-pink-400 to-pink-600",
  purple: "from-purple-400 to-purple-600",
  orange: "from-orange-300 to-orange-600",
  yellow: "from-yellow-400 to-yellow-600",
};

export const Image = ({ themeColor, data }) => {

  const theme = React.useContext(ThemeContext);

  return (
    
    <div
      className="flex-1 flex flex-col gap-6 justify-center text-center items-center content-center lg:items-start lg:text-left max-w-xl mx-auto"
      style={{ flexBasis: "16rem" }}
    >
       
       {data.image && (
          <div className="row-start-1 flex justify-center">
            <img
              className="w-full max-w-xs lg:max-w-none h-auto"
              alt={data.image.alt}
              src={data.image.src}
            />
          </div>
        )}

    {data.imageTitle && (
            <h3
              className={`w-full relative	mb-10 text-2xl font-extrabold tracking-normal leading-tight title-font`}
            >
              <span
                className={`bg-clip-text text-transparent bg-gradient-to-r  ${
                  themeColor === "primary"
                    ? `from-white to-gray-100`
                    : headlineColorClasses[theme.color]
                }`}
              >
                {data.imageTitle}
              </span>
            </h3>
          )}
       {data.text && (
            <div
              className={`prose prose-lg mx-auto lg:mx-0 mb-10 ${
                themeColor === "primary" ? `prose-primary` : `dark:prose-dark`
              }`}
            >
              <Markdown>{data.text}</Markdown>
            </div>
          )}
    </div>
  );
};
 
export const Images = ({ data }) => {

  return (
    <Section color={data.color}>
      <Container
        className={`flex flex-wrap gap-x-10 gap-y-8 text-left`}
        size="large"
      >
        
        {data.items &&
          data.items.map(function (block, i) {
            return <Image themeColor={data.color} key={i} data={block} />;
          })}
      </Container>
    </Section>
  );
};
