import {
  HeroSection,
  Hero,
  HeroBody,
  HeroTitle,
  HeroTeaser,
  HeroActionList,
  HeroAction,
} from "../../mdx/Hero";
import { ScreenContainer } from "../../mdx/ScreenContainer";
import { Button } from "../../Button";

export default function HeroBlock({ hero }) {
  return (
    <HeroSection>
      <ScreenContainer>
        <Hero backgroundImageUrl={hero.backgroundImageUrl}>
          <HeroBody>
            <HeroTitle>{hero.slogan}</HeroTitle>
            <HeroTeaser>{hero.teaser}</HeroTeaser>
            <HeroActionList>
              <HeroAction>
                <Button as="a" href={hero.btnUrl}>
                  {hero.btnTxt}
                </Button>
              </HeroAction>
            </HeroActionList>
          </HeroBody>
        </Hero>
      </ScreenContainer>
    </HeroSection>
  );
}
