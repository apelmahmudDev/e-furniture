import { Card } from "@mui/material";
import { styled } from "@mui/system";
import { STYLES } from "../../../../styles/styles";

const AppCard = styled(Card)({
	...STYLES.boxShadow1,
	margin: "16px 0",
	backdropFilter: "blur(1000px)",
	opacity: 0.876,
	border: " 1px solid #fff",
});

export { AppCard };
