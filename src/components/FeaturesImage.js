import React from "react";
import { useOverrides } from "@quarkly/components";
import { Image } from "@quarkly/widgets";
const defaultProps = {
	"width": "640px",
	"height": "auto",
	"src": "https://uploads.quarkly.io/609edd7313e4b0001f829c98/images/Women%20Power%20Meditating.png?v=2021-05-15T08:39:26.356Z",
	"max-width": "100%"
};
const overrides = {};

const FeaturesImage = props => {
	const {
		rest
	} = useOverrides(props, overrides, defaultProps);
	return <Image {...rest} />;
};

Object.assign(FeaturesImage, { ...Image,
	defaultProps,
	overrides
});
export default FeaturesImage;