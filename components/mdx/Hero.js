import React from "react";
//import styled, { up, css, x } from "@xstyled/styled-components";
import { ScreenContainer } from "./ScreenContainer";

export const HeroTitle = "";

export const HeroTeaser = "";

const InnerHero = ScreenContainer;

export const Hero = React.forwardRef(
  ({ backgroundImageUrl, ...props }, ref) => {
    return (
      <InnerHero
        ref={ref}
        backgroundImage={`url(${backgroundImageUrl})`}
        {...props}
      />
    );
  }
);

export const HeroBody = React.forwardRef((props, ref) => {
  return <x.div ref={ref} w={{ md: 0.5 }} {...props} />;
});

export const HeroSection = ""

export const HeroActionList = React.forwardRef((props, ref) => {
  return (
    <x.div
      ref={ref}
      row
      m={2}
      justifyContent={{ xs: "center", md: "initial" }}
      {...props}
    />
  );
});

export const HeroAction = React.forwardRef((props, ref) => {
  return <x.div ref={ref} col="auto" p={2}  {...props} />;
});
