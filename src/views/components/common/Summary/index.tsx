import { Box, CardContent, Divider, Typography } from "@mui/material";
import { PercentIcon } from "../../../../assets/icon";
import { AppCard } from "../StyledComponent";
import Header from "../../shipping/Header";
import { useSelector } from "react-redux";
import { RootState } from "../../../../store";

const Summary = () => {
	const cart = useSelector((state: RootState) => state.cart);
	const { subtotal, total, shippingCharge, payableTotal, discount } =
		cart.checkoutSummary;

	return (
		<AppCard>
			<CardContent>
				<Header headerText="Checkout Summary" />
				<Box>
					<CheckoutItem title="Subtotal" amount={subtotal} />
					<CheckoutItem title="Shipping" amount={shippingCharge} />
					<CheckoutItem title="Total" amount={total} />
					<CheckoutItem title="Payalbe Total" amount={payableTotal} />
				</Box>
				<Typography
					color="primary"
					variant="h6"
					sx={{
						mb: 1,
						display: "flex",
						alignItems: "center",
						justifyContent: "center",
					}}
				>
					You are saving {discount} <PercentIcon color="primary" />
				</Typography>
			</CardContent>
		</AppCard>
	);
};

export default Summary;

const CheckoutItem = ({ title, amount }: { title: string; amount: number }) => {
	return (
		<Box my={2}>
			<Box sx={{ display: "flex", justifyContent: "space-between" }}>
				<Typography>{title}</Typography>
				<Typography>{amount} TK.</Typography>
			</Box>
			<Divider sx={{ mt: 1 }} />
		</Box>
	);
};
