import React from "react";
import { useOverrides } from "@quarkly/components";
import { Span } from "@quarkly/widgets";
const defaultProps = {
	"display": "block",
	"font-weight": "400",
	"font-family": "Avenir Next",
	"font-size": "20px",
	"color": "--greyD2",
	"padding": "16px 0px 16px 0px",
	"text-transform": "uppercase"
};
const overrides = {};

const UpSpan = props => {
	const {
		children,
		rest
	} = useOverrides(props, overrides, defaultProps);
	return <Span {...rest}>
		{children}
	</Span>;
};

Object.assign(UpSpan, { ...Span,
	defaultProps,
	overrides
});
export default UpSpan;