import React from "react";
import type { Pages } from "../.tina/__generated__/types";
import type { Services } from "../.tina/__generated__/types";
import { Content } from "./blocks/content";
import { Features } from "./blocks/features";
import { Hero } from "./blocks/hero";
import { Testimonial } from "./blocks/testimonial";
import { Images }  from "./blocks/images";
import { Contact } from "./blocks/contact";
import { Pricings } from "./blocks/pricings";

export const Blocks = (props: Pages, Services) => {
  return (
    <>
      {props.blocks
        ? props.blocks.map(function (block, i) {
            switch (block.__typename) {
              case "PagesBlocksContent":
                return (
                  <React.Fragment key={i + block.__typename}>
                    <Content data={block} />
                  </React.Fragment>
                );
              case "PagesBlocksHero":
                return (
                  <React.Fragment key={i + block.__typename}>
                    <Hero data={block} />
                  </React.Fragment>
                );
              case "PagesBlocksFeatures":
                return (
                  <React.Fragment key={i + block.__typename}>
                    <Features data={block} />
                  </React.Fragment>
                );
              case "PagesBlocksTestimonial":
                return (
                  <React.Fragment key={i + block.__typename}>
                    <Testimonial data={block} />
                  </React.Fragment>
                );
              case "PagesBlocksImages":
                return (
                  <React.Fragment key={i + block.__typename}>
                    <Images data={block} />
                  </React.Fragment>
                );
              case "PagesBlocksContact":
                return (
                  <React.Fragment key={i + block.__typename}>
                    <Contact data={block} />
                  </React.Fragment>
                )
              case "PagesBlocksPricings":
                return (
                  <React.Fragment key={i + block.__typename}>
                    <Pricings data={block} />
                  </React.Fragment>
                )
              default:
                return null;
            }
          })
        : null}
    </>
  );
};
