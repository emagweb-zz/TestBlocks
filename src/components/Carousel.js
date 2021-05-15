import React from "react";
import { useOverrides } from "@quarkly/components";
import QuarklycommunityKitCarousel from "./QuarklycommunityKitCarousel";
const defaultProps = {};
const overrides = {};

const Carousel = props => {
	const {
		children,
		rest
	} = useOverrides(props, overrides, defaultProps);
	return <QuarklycommunityKitCarousel {...rest}>
		{children}
	</QuarklycommunityKitCarousel>;
};

Object.assign(Carousel, { ...QuarklycommunityKitCarousel,
	defaultProps,
	overrides
});
export default Carousel;