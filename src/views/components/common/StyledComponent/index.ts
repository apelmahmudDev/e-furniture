import { Card } from "@mui/material";
import { styled } from "@mui/system";
import { STYLES } from "../../../../styles/styles";
import Badge, { BadgeProps } from "@mui/material/Badge";

const AppCard = styled(Card)({
	...STYLES.boxShadow1,
	margin: "16px 0",
	backdropFilter: "blur(1000px)",
	opacity: 0.876,
	border: " 1px solid #fff",
});

const StyledBadge = styled(Badge)<BadgeProps>(({ theme }) => ({
	"& .MuiBadge-badge": {
		right: -3,
		top: 13,
		border: `2px solid ${theme.palette.background.paper}`,
		padding: "0 4px",
	},
}));

export { AppCard, StyledBadge };
