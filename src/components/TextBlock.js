import React from "react";
import { useOverrides } from "@quarkly/components";
import { Text } from "@quarkly/widgets";
const defaultProps = {
	"margin": "0px",
	"font-weight": "400",
	"font-family": "Avenir Next",
	"font-size": "20px",
	"line-height": 1.75
};
const overrides = {};

const TextBlock = props => {
	const {
		children,
		rest
	} = useOverrides(props, overrides, defaultProps);
	return <Text {...rest}>
		{children}
	</Text>;
};

Object.assign(TextBlock, { ...Text,
	defaultProps,
	overrides
});
export default TextBlock;