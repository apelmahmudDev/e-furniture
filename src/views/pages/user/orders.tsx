import { Box } from "@mui/material";
import OrdersTable from "../../components/user/OrdersTable";

const Orders = () => {
	return (
		<Box component="div">
			<Box my={2}>
				<OrdersTable />
			</Box>
		</Box>
	);
};

export default Orders;
