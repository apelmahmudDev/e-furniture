import { useState } from "react";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import { STYLES } from "../../../../styles/styles";
import {
	Avatar,
	IconButton,
	SelectChangeEvent,
	Typography,
} from "@mui/material";
import { DeleteOutlined } from "@mui/icons-material";
import {
	orderApi,
	useDeleteOrderMutation,
	useGetOrdersQuery,
} from "../../../../store/api/api.order";
import Spinner from "../../common/Spinner";
import NoData from "../../common/NoData";
import { useEffect } from "react";
import Snackbar from "../../common/Snackbar";
import { useAppDispatch } from "../../../../store";

const styles = {
	display: "flex",
	alignItems: "center",
	gap: 1,
	whiteSpace: "noWrap",
};

const CustomerTable = () => {
	const dispatch = useAppDispatch();
	const handleClickVariant = Snackbar();
	const [status, setStatus] = useState("");
	const [orderId, setOrderId] = useState("");

	const { data, isFetching } = useGetOrdersQuery();
	const [deleteOrder, { isLoading, isSuccess, isError }] =
		useDeleteOrderMutation();

	// delete order
	const handleDeleteOrder = (id: string) => {
		deleteOrder(id);
	};

	useEffect(() => {
		if (isSuccess) {
			handleClickVariant("success", "Order has been successfully deleted!");
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [isSuccess]);

	useEffect(() => {
		if (isError) {
			handleClickVariant("error", "Something went wrong!");
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [isError]);

	// update order status
	useEffect(() => {
		if (status && orderId) {
			dispatch(
				orderApi.endpoints.updateOrder.initiate({
					id: orderId,
					body: { status: status },
				})
			)
				.unwrap()
				.then(() => {
					handleClickVariant("success", "Status Update Successfull!");
				})
				.catch(() => handleClickVariant("error", "Something went wrong!"));
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [status, orderId, dispatch]);

	const handleOrderStatus = (event: SelectChangeEvent, orderId: string) => {
		setStatus(event.target.value as string);
		setOrderId(orderId as string);
	};

	return (
		<Paper sx={{ overflow: "hidden", ...STYLES.boxShadow1 }}>
			<Typography sx={{ p: 2 }} variant="h6">
				Customer Orders
			</Typography>
			<TableContainer sx={{ maxHeight: 440 }}>
				<Table size="small" stickyHeader aria-label="sticky table">
					<TableHead>
						<TableRow>
							<TableCell>No.</TableCell>
							<TableCell>Products</TableCell>
							<TableCell>Customer</TableCell>
							<TableCell>Country</TableCell>
							<TableCell>Quantity</TableCell>
							<TableCell>Status</TableCell>
							<TableCell>Actions</TableCell>
						</TableRow>
					</TableHead>
					<TableBody>
						{/* loading spinner */}
						{isFetching && (
							<TableRow>
								<TableCell sx={{ height: 100 }} align="center" colSpan={7}>
									<Spinner />
								</TableCell>
							</TableRow>
						)}
						{/* no data found message */}

						{data?.data?.length === 0 && (
							<TableRow>
								<TableCell sx={{ height: 100 }} align="center" colSpan={7}>
									<NoData />
								</TableCell>
							</TableRow>
						)}

						{/* data show */}
						{data?.data?.map((order, idx) => (
							<TableRow key={idx} hover role="checkbox" tabIndex={-1}>
								<TableCell>{idx + 1}</TableCell>

								{order.cart.map((pd, idx) => (
									<TableCell key={idx} sx={styles}>
										<Avatar
											sx={{ borderRadius: 0 }}
											src={pd.image}
											alt="product-image"
										/>

										{pd.name}
									</TableCell>
								))}

								<TableCell sx={{ whiteSpace: "noWrap" }}>
									{order.shippingAddress.name}
								</TableCell>
								<TableCell>{order.shippingAddress.country}</TableCell>
								<TableCell>1</TableCell>
								<TableCell>
									<FormControl size="small">
										<Select
											defaultValue={order.status}
											onChange={(e) => handleOrderStatus(e, order._id)}
										>
											<MenuItem value="Pending">Pending</MenuItem>
											<MenuItem value="Cancel">Cancel</MenuItem>
											<MenuItem value="Done">Done</MenuItem>
										</Select>
									</FormControl>
								</TableCell>
								<TableCell>
									<IconButton
										size="small"
										sx={{ ...STYLES.icon }}
										disabled={isLoading}
										onClick={() => handleDeleteOrder(order._id)}
									>
										<DeleteOutlined />
									</IconButton>
								</TableCell>
							</TableRow>
						))}
					</TableBody>
				</Table>
			</TableContainer>
		</Paper>
	);
};

export default CustomerTable;
