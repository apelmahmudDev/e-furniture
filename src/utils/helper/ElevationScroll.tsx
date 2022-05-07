import useScrollTrigger from "@mui/material/useScrollTrigger";
import { cloneElement } from "react";
import { Props } from "../../types/elevation_scroll_props";

export default function ElevationScroll(props: Props) {
	const { children, window } = props;
	// Note that you normally won't need to set the window ref as useScrollTrigger
	// will default to window.
	// This is only being set here because the demo is in an iframe.
	const trigger = useScrollTrigger({
		disableHysteresis: true,
		threshold: 0,
		target: window ? window() : undefined,
	});

	return cloneElement(children, {
		elevation: trigger ? 4 : 0,
	});
}
