import React from "react";
import { useOverrides } from "@quarkly/components";
import { Icon } from "@quarkly/widgets";
import { IoIosCompass } from "react-icons/io";
const defaultProps = {
	"category": "io",
	"icon": IoIosCompass,
	"size": "48px",
	"color": "--primary",
	"width": "24px",
	"height": "24px",
	"border-radius": "32px",
	"padding": "16px 16px 16px 16px",
	"border-color": "--color-primary",
	"border-width": "2px",
	"border-style": "solid"
};
const overrides = {};

const IconCircle = props => {
	const {
		rest
	} = useOverrides(props, overrides, defaultProps);
	return <Icon {...rest} />;
};

Object.assign(IconCircle, { ...Icon,
	defaultProps,
	overrides
});
export default IconCircle;