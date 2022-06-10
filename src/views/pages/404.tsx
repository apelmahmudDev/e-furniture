import { Box, Button, Container, Typography } from "@mui/material";
import { ReactComponent as NotFountSvg } from "../../assets/svg/not_found.svg";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { Link } from "react-router-dom";
import { ROUTING_TREE } from "../../constants/siteUrls";

const NotFound = () => {
	return (
		<Container>
			<Box
				sx={{
					height: "100vh",
					display: "flex",
					flexDirection: "column",
					alignItems: "center",
					justifyContent: "center",
				}}
			>
				<Box sx={{ width: { xs: "50%", sm: "40%", md: "30%" } }}>
					<NotFountSvg />
				</Box>
				<Typography
					variant="h5"
					textAlign="center"
					sx={{
						my: 3,
						fontWeight: "600",
						color: (theme) => theme.palette.primary.main,
					}}
				>
					oops! The page you requested was not found!
				</Typography>
				<Link to={ROUTING_TREE.HOME}>
					<Button
						sx={{ color: (theme) => theme.palette.secondary.light }}
						variant="contained"
						startIcon={<ArrowBackIcon />}
					>
						Back To Home
					</Button>
				</Link>
			</Box>
		</Container>
	);
};

export default NotFound;
