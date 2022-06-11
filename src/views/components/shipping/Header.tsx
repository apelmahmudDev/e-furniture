import { Typography } from "@mui/material";

const Header = ({ headerText }: { headerText: string }) => {
	return (
		<Typography variant="h6" sx={{ mb: 1, fontWeight: "600" }}>
			{headerText}
		</Typography>
	);
};

export default Header;
