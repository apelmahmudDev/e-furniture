import { Box, Typography } from "@mui/material";
import ChairIcon from "@mui/icons-material/Chair";

const AppLogo = () => {
	return (
		<Box sx={{ display: "flex", alignItems: "center" }}>
			<ChairIcon sx={{ mr: 1 }} />
			<Typography
				variant="h6"
				noWrap
				sx={{
					mr: 2,
					fontFamily: "Titillium Web",
					fontWeight: 700,
					letterSpacing: ".1rem",
					color: "inherit",
					textDecoration: "none",
				}}
			>
				e-furniture
			</Typography>
		</Box>
	);
};

export default AppLogo;
