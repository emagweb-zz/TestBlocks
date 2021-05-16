import React from "react";
import { useOverrides, Override } from "@quarkly/components";
import { Strong } from "@quarkly/widgets";
import QuarklycommunityKitCarousel from "./QuarklycommunityKitCarousel";
const defaultProps = {
  "width": "100%"
};
const overrides = {
  "strong": {
    "kind": "Strong",
    "props": {
      "font-size": "21px",
      "font-family": "Avenir Next",
      "sm-font-size": "14px",
      "font-style": "italic",
      "font-weight": "500",
      "children": "Lifestyle"
    }
  },
  "strong1": {
    "kind": "Strong",
    "props": {
      "font-size": "21px",
      "font-family": "Avenir Next",
      "sm-font-size": "14px",
      "font-style": "italic",
      "font-weight": "500",
      "children": "World"
    }
  },
  "strong2": {
    "kind": "Strong",
    "props": {
      "font-size": "21px",
      "font-family": "Avenir Next",
      "sm-font-size": "14px",
      "font-style": "italic",
      "font-weight": "500",
      "children": "Adventures"
    }
  },
  "strong3": {
    "kind": "Strong",
    "props": {
      "font-size": "21px",
      "font-family": "Avenir Next",
      "sm-font-size": "14px",
      "font-style": "italic",
      "font-weight": "500",
      "children": "Journey"
    }
  }
};

const SliderCarousel = props => {
  const {
    override,
    children,
    rest
  } = useOverrides(props, overrides, defaultProps);
  return <QuarklycommunityKitCarousel {...rest}>
    <Override slot="Slide Image" src="https://images.unsplash.com/photo-1511884642898-4c92249e20b6?ixlib=rb-1.2.1&q=85&fm=jpg&crop=entropy&cs=srgb&w=2000" />
    <Override slot="Slide Image 2" src="https://images.unsplash.com/photo-1445217143695-467124038776?ixlib=rb-1.2.1&q=85&fm=jpg&crop=entropy&cs=srgb&w=2000" />
    <Override slot="Slide Image 3" src="https://images.unsplash.com/photo-1413752362258-7af2a667b590?ixlib=rb-1.2.1&q=85&fm=jpg&crop=entropy&cs=srgb&w=2000" />
    <Override slot="Slide Image 4" src="https://images.unsplash.com/photo-1620439097636-bbc0ff9c7d5b?ixlib=rb-1.2.1&q=85&fm=jpg&crop=entropy&cs=srgb&w=2000" />
    <Override
      slot="Slide Text"
      display="flex"
      sm-width="90%"
      sm-min-width="90%"
      sm-max-width="90%"
      font-size="48px"
      lg-font-size="38px"
      md-font-size="28px"
      sm-font-size="12px"
      font-weight="600"
      sm-font-weight="500"
      line-height="1.25"
      sm-line-height="1.15"
      font-family="Avenir Next"
      text-transform="uppercase"
      sm-padding="0px 0px 3vh 0px"
      font="600 200px/60px &quot;Avenir Next&quot;"
    >
      Travel is the only thing you buy that makes you richer
		</Override>
    <Override slot="Slide Head">
      <Strong {...override("strong")} />
    </Override>
    <Override
      slot="Slide Link"
      font-size="16px"
      font-family="Avenir Next"
      line-height="24px"
      font-weight="400"
      sm-zoom=".5"
    >
      Learn More
		</Override>
    <Override
      slot="Slide Text 2"
      display="block"
      width="100%"
      min-width="100%"
      max-width="100%"
      sm-width="60%"
      sm-min-width="90%"
      sm-max-width="90%"
      sm-margin="0 5%"
      font-size="48px"
      lg-font-size="38px"
      md-font-size="28px"
      sm-font-size="12px"
      font-weight="600"
      sm-font-weight="500"
      line-height="1.25"
      sm-line-height="1.15"
      font-family="Avenir Next"
      text-transform="uppercase"
    >
      The world is a book and those who do not travel read only one page
		</Override>
    <Override slot="Slide Head 2">
      <Strong {...override("strong1")} />
    </Override>
    <Override
      slot="Slide Link 2"
      font-size="16px"
      font-family="Avenir Next"
      line-height="24px"
      font-weight="400"
      sm-zoom=".5"
    >
      Learn More
		</Override>
    <Override
      slot="Slide Text 3"
      display="block"
      width="100%"
      min-width="100%"
      max-width="100%"
      sm-width="60%"
      sm-min-width="90%"
      sm-max-width="90%"
      sm-margin="0 5%"
      font-size="48px"
      lg-font-size="38px"
      md-font-size="28px"
      sm-font-size="12px"
      font-weight="600"
      sm-font-weight="500"
      line-height="1.25"
      sm-line-height="1.15"
      font-family="Avenir Next"
      text-transform="uppercase"
    >
      Jobs fill your pockets, adventures fill your soul
		</Override>
    <Override slot="Slide Head 3">
      <Strong {...override("strong2")} />
    </Override>
    <Override
      slot="Slide Link 3"
      font-size="16px"
      font-family="Avenir Next"
      line-height="24px"
      font-weight="400"
      sm-zoom=".5"
    >
      Learn More
		</Override>
    <Override
      slot="Slide Text 4"
      display="block"
      width="100%"
      min-width="100%"
      max-width="100%"
      sm-width="60%"
      sm-min-width="90%"
      sm-max-width="90%"
      sm-margin="0 5%"
      font-size="48px"
      lg-font-size="38px"
      md-font-size="28px"
      sm-font-size="12px"
      font-weight="600"
      sm-font-weight="500"
      line-height="1.25"
      sm-line-height="1.15"
      font-family="Avenir Next"
      text-transform="uppercase"
    >
      The journey of a thousand miles begins with a single step
		</Override>
    <Override slot="Slide Head 4">
      <Strong {...override("strong3")} />
    </Override>
    <Override
      slot="Slide Link 4"
      font-size="16px"
      font-family="Avenir Next"
      line-height="24px"
      font-weight="400"
      sm-zoom=".5"
    >
      Learn More
		</Override>
    <Override slot="Points" sm-display="none" display="block" />
    <Override slot="Arrow Icon" sm-width="24px" />
    <Override slot="Slide Content" sm-padding="0px 0px 2vh 0px" width="75%" />
    {children}
  </QuarklycommunityKitCarousel>;
};

Object.assign(SliderCarousel, {
  ...QuarklycommunityKitCarousel,
  defaultProps,
  overrides
});
export default SliderCarousel;