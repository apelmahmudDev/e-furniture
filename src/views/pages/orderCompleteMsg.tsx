import {
	Avatar,
	Box,
	Button,
	Card,
	CardContent,
	Container,
	Typography,
} from "@mui/material";
import { makeStyles } from "@mui/styles";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { ArrowBackIcon } from "../../assets/icon";
import { ROUTING_TREE } from "../../constants/siteUrls";
import { IMAGES } from "../../constants/themeData";
import { RootState, useAppDispatch } from "../../store";
import { resetCart } from "../../store/slice/cartSlice";
import { resetShipping } from "../../store/slice/shippingSlice";
import { STYLES } from "../../styles/styles";

const useStyles = makeStyles(() => ({
	cardContent: {
		display: "flex",
		flexDirection: "column",
		alignItems: "center",
		textAlign: "center",
	},
}));

const OrderCompleteMsg = () => {
	const classes = useStyles();
	const navigate = useNavigate();
	const dispatch = useAppDispatch();
	const global = useSelector((state: RootState) => state.global);

	// is coming from shipping route ?
	useEffect(() => {
		// dispatch(setIsGoToOrderCompletedPage(false));
		if (!global.isGoToOrderCompletedPage) navigate(ROUTING_TREE.HOME);
	}, [global.isGoToOrderCompletedPage, navigate]);

	// remove shipping info after comming this page
	useEffect(() => {
		dispatch(resetShipping());
		dispatch(resetCart());
	}, [dispatch]);

	return (
		<Box
			sx={{
				...STYLES.auth,
			}}
		>
			<Container maxWidth="sm">
				<Card
					sx={{
						...STYLES.boxShadow2,
						margin: "16px 0",
						backdropFilter: "blur(1000px)",
						opacity: 0.876,
						border: " 1px solid #fff",
						background:
							"linear-gradient(230deg, rgb(255 255 255) 5%, rgb(216 214 214) 100%)",
					}}
				>
					<CardContent className={classes.cardContent}>
						<Avatar src={IMAGES.TickMarkImg} alt="tickmark" />
						<Typography sx={{ fontWeight: "bold", mt: 2 }} variant="h5">
							Your Order Is Completed!
						</Typography>
						<Typography variant="body2" sx={{ my: 2 }}>
							Thank you for your order! Your order is being processed and will
							be completed within 1-2 hours. You will receive an email
							cofirmation when your order is completed.
						</Typography>
						<Button
							onClick={() => navigate(ROUTING_TREE.HOME)}
							sx={{ color: (theme) => theme.palette.secondary.light }}
							variant="contained"
							size="small"
							startIcon={<ArrowBackIcon />}
						>
							Continue Shopping
						</Button>
					</CardContent>
				</Card>
			</Container>
		</Box>
	);
};

export default OrderCompleteMsg;
