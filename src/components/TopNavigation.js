import React from "react";
import { useOverrides, Override, Menu, Section } from "@quarkly/components";
import { Image, Link, Box } from "@quarkly/widgets";
const defaultProps = {
	"lazy-load": false,
	"padding": "16px 0 16px 0"
};
const overrides = {
	"box": {
		"kind": "Box",
		"props": {
			"display": "flex",
			"padding": "12px 0",
			"justify-content": "space-between",
			"align-items": "center",
			"flex-direction": "row",
			"md-flex-direction": "column"
		}
	},
	"link": {
		"kind": "Link",
		"props": {
			"href": "#",
			"display": "inline-flex",
			"align-items": "center",
			"justify-content": "flex-start",
			"height": "32px",
			"width": "auto",
			"font-weight": "500",
			"font-family": "Avenir Next",
			"font-size": "16px",
			"color": "--light",
			"text-transform": "uppercase",
			"text-decoration-line": "initial"
		}
	},
	"image": {
		"kind": "Image",
		"props": {
			"src": "https://uploads.quarkly.io/609edd7313e4b0001f829c98/images/logo.svg?v=2021-05-15T18:28:01.593Z",
			"margin": "0px 12px 0px 0px",
			"width": "64px",
			"height": "64px"
		}
	},
	"menu": {
		"kind": "Menu",
		"props": {
			"display": "flex",
			"justify-content": "center",
			"font-weight": "700",
			"font-family": "Avenir Next",
			"font-size": "14px",
			"color": "--light",
			"text-transform": "uppercase",
			"md-flex-direction": "column",
			"md-align-items": "center"
		}
	},
	"menuOverride": {
		"kind": "Override",
		"props": {
			"slot": "link",
			"title": "Home",
			"display": "inline-block",
			"padding": "6px 12px",
			"color": "--light",
			"font-weight": "600",
			"font-family": "Avenir Next",
			"font-size": "14px",
			"line-height": 1.5,
			"letter-spacing": ".05em",
			"text-transform": "uppercase",
			"text-decoration": "none",
			"border-color": "--light",
			"border-width": "0 0 2px 0",
			"transition": "--opacityOut",
			"opacity": "0.85"
		}
	},
	"menuOverride1": {
		"kind": "Override",
		"props": {
			"slot": "link-active",
			"color": "--light",
			"font-weight": "600",
			"font-family": "Avenir Next",
			"font-size": "14px",
			"line-height": 1.5,
			"letter-spacing": ".05em",
			"text-transform": "uppercase",
			"text-decoration": "none",
			"text-align": "center",
			"transition": "all 0.3s ease 0s",
			"border-width": "0 0 2px 0",
			"border-style": "solid",
			"border-color": "--light"
		}
	},
	"menuOverride2": {
		"kind": "Override",
		"props": {
			"slot": "item",
			"padding": "6px"
		}
	}
};

const TopNavigation = props => {
	const {
		override,
		children,
		rest
	} = useOverrides(props, overrides, defaultProps);
	return <Section {...rest}>
		<Box {...override("box")}>
			<Link {...override("link")}>
				<Image {...override("image")} />
				Company Name
			</Link>
			<Menu {...override("menu")}>
				<Override {...override("menuOverride")} />
				<Override {...override("menuOverride1")} />
				<Override {...override("menuOverride2")} />
			</Menu>
		</Box>
		{children}
	</Section>;
};

Object.assign(TopNavigation, { ...Section,
	defaultProps,
	overrides
});
export default TopNavigation;