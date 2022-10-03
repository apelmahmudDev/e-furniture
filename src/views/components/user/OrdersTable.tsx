import { Avatar, Box, CardContent } from "@mui/material";

// table
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import {
	AppCard,
	AppIconButton,
	AppTableCell,
	StatusChip,
} from "../common/StyledComponent";
import Header from "../common/Header";
import NotFound from "../common/NotFound";

// icons
import {
	CloseIcon,
	ProductionQuantityLimitsOutlinedIcon,
} from "../../../assets/icon";
import {
	useDeleteOrderMutation,
	useGetOrdersQuery,
} from "../../../store/api/api.order";
import Spinner from "../common/Spinner";
import Snackbar from "../common/Snackbar";
import { useEffect } from "react";

const productImgStyles = {
	height: 60,
	width: 60,
	borderRadius: 0,
	"& > img": { objectFit: "contain" },
};

const OrdersTable = () => {
	const handleClickVariant = Snackbar();
	const { data, isFetching } = useGetOrdersQuery();
	const [deleteOrder, { isLoading, isSuccess, isError }] =
		useDeleteOrderMutation();

	// delete order
	const handleDeleteOrder = (id: string) => {
		deleteOrder(id);
	};

	useEffect(() => {
		if (isSuccess) {
			handleClickVariant(
				"success",
				"Your order has been successfully deleted!"
			);
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [isSuccess]);

	useEffect(() => {
		if (isError) {
			handleClickVariant("error", "Something went wrong!");
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [isError]);

	return (
		<AppCard>
			<CardContent>
				<Header headerText={`Your Orders (${data?.data?.length || 0}) `} />

				{/* loading spinner */}
				{isFetching && (
					<Box
						sx={{
							height: 100,
							display: "flex",
							alignItems: "center",
							justifyContent: "center",
						}}
					>
						<Spinner />
					</Box>
				)}

				{/* orders empty message */}
				{!data?.data?.length && !isFetching && (
					<Box
						sx={{
							display: "flex",
							alignItems: "center",
							flexDirection: "column",
						}}
					>
						<NotFound
							message="You have no orders"
							icon={<ProductionQuantityLimitsOutlinedIcon />}
						/>
					</Box>
				)}

				{/* show when you have any orders */}
				{data?.data && data?.data?.length > 0 && (
					<>
						<TableContainer>
							<Table sx={{ minWidth: 650 }} aria-label="simple table">
								<TableHead>
									<TableRow>
										<TableCell>Product</TableCell>
										<TableCell align="center">Name</TableCell>
										<TableCell align="center">Price</TableCell>
										<TableCell align="center">Quantity</TableCell>
										<TableCell align="center">Total</TableCell>
										<TableCell align="center">Status</TableCell>
										<TableCell align="center">Actions</TableCell>
									</TableRow>
								</TableHead>

								<TableBody>
									{data?.data?.map((order, idx) => {
										return order.cart.map((pd) => (
											<TableRow
												key={pd._id}
												sx={{
													"&:last-child td, &:last-child th": { border: 0 },
												}}
											>
												<TableCell component="th" scope="row">
													<Avatar
														sx={productImgStyles}
														src={pd.image}
														alt={pd.name}
													/>
												</TableCell>

												<AppTableCell>{pd.name}</AppTableCell>
												<AppTableCell>
													<strong>৳ </strong> {pd.price}
												</AppTableCell>
												<AppTableCell>{pd.quantity}</AppTableCell>
												<AppTableCell>
													<strong>৳ </strong> {pd.price}
												</AppTableCell>
												<AppTableCell>
													<Box
														sx={{ display: "flex", justifyContent: "center" }}
													>
														<StatusChip status={order.status.toLowerCase()}>
															{order.status}
														</StatusChip>
													</Box>
												</AppTableCell>
												<AppTableCell>
													<AppIconButton
														disabled={isLoading}
														onClick={() => handleDeleteOrder(order._id)}
													>
														<CloseIcon />
													</AppIconButton>
												</AppTableCell>
											</TableRow>
										));
									})}
								</TableBody>
							</Table>
						</TableContainer>
					</>
				)}
			</CardContent>
		</AppCard>
	);
};

export default OrdersTable;
