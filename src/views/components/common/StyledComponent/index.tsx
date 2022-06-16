import { Card, IconButton } from "@mui/material";
import { styled } from "@mui/system";
import { STYLES } from "../../../../styles/styles";
import Badge, { BadgeProps } from "@mui/material/Badge";
import TableCell from "@mui/material/TableCell";

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

const AppIconButton = styled(IconButton)(({ theme }) => ({
	background: theme.palette.secondary.light,
	color: theme.palette.primary.main,

	"& .MuiSvgIcon-root": {
		width: "1rem",
		height: "1rem",
	},
}));

const StatusChip = styled("div")(({ status }: { status: string }) => ({
	backgroundColor:
		status === "pending"
			? "#ffc107"
			: status === "done"
			? "#28a745"
			: "#dc3545",
	color: "#fff",
	textAlign: "center",
	borderRadius: "35px",
	padding: "2px 15px",
	maxWidth: 90,
}));

const AppTableCell = ({ children }: { children: React.ReactNode }) => {
	return (
		<TableCell align="center" sx={{ whiteSpace: "noWrap" }}>
			{children}
		</TableCell>
	);
};

export { AppCard, StyledBadge, AppIconButton, StatusChip, AppTableCell };
