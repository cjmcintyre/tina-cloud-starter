import React from "react";
import ContactForm from "./ContactForm";
import { Container } from "../container";
import { Section } from "../section";
import { ThemeContext } from '../theme';
import { headlineColorClasses } from './images';

export const Contact = ({ data }) => {

  const theme = React.useContext(ThemeContext);

  return (
    <Section color={data.color}>
      <Container
        className={`flex flex-col md:flex-row justify-center lg:gap-x-10 lg:gap-y-8  items-center ${data.color === "primary" ? `prose-primary` : `dark:prose-dark`
          }`}
        size="large"
      >

        <div className="px-2 md:px-8 py-6 mt-4 w-full">

          {data.headline && (
            <h3
              className={`w-full relative	mb-10 text-3xl font-extrabold tracking-normal leading-tight title-font`}
            >
              <span
                className={`bg-clip-text text-transparent bg-gradient-to-r  ${data.color === "primary"
                    ? `from-white to-gray-100`
                    : headlineColorClasses[theme.color]
                  }`}
              >
                {data.headline}
              </span>
            </h3>
          )}

          {data.body}


          {data.image && (
            <div className="row-start-1 flex justify-center">
              <img
                className=" h-auto"

                alt={data.image.alt}
                src={data.image.src}
              />
            </div>
          )}

        </div>

        <ContactForm data={data} ></ContactForm>

      </Container>
    </Section>
  );
};
