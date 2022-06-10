import { Box, CardContent, Divider, Typography } from "@mui/material";
import { PercentIcon } from "../../../../assets/icon";
import { AppCard } from "../../common/StyledComponent";

const Summary = () => {
	return (
		<AppCard>
			<CardContent>
				<Typography variant="h5" sx={{ mb: 1 }}>
					Checkout Summary
				</Typography>
				<Box>
					<CheckoutItem title="Subtotal" amount={50} />
					<CheckoutItem title="Shipping" amount={50} />
					<CheckoutItem title="Total" amount={50} />
					<CheckoutItem title="Payalbe Total" amount={50} />
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
					You are saving 20 <PercentIcon color="primary" />
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
