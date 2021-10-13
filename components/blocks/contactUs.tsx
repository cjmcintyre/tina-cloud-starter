import React from "react";
import ContactForm from "./ContactForm";
import { Container } from "../container";
import { Section } from "../section";

export const ContactUs = ({ data }) => {
  return (
    <Section color={data.color}>
      <Container
        className={`flex flex-col md:flex-row justify-center lg:gap-x-10 lg:gap-y-8  items-center ${
          data.color === "primary" ? `prose-primary` : `dark:prose-dark`
        }`}
        size="large"  
      >
        <ContactForm data={data} ></ContactForm>

      </Container>
    </Section>
  );
};
