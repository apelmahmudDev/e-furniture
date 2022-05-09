import { Box, Container, Typography } from "@mui/material";
import ChairIcon from "@mui/icons-material/Chair";

const Footer = () => {
	return (
		<Box
			component="section"
			sx={{
				p: 2,
				height: 300,
				bgcolor: "#1f1f21",
			}}
		>
			<Container>
				<Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
					<ChairIcon sx={{ color: (theme) => theme.palette.secondary.main }} />
					<Typography
						variant="h6"
						noWrap
						component="a"
						href="/"
						sx={{
							fontFamily: "Titillium Web",
							fontWeight: 700,
							letterSpacing: ".1rem",
							color: (theme) => theme.palette.secondary.main,
							textDecoration: "none",
						}}
					>
						e-furniture
					</Typography>
				</Box>
			</Container>
		</Box>
	);
};

export default Footer;
