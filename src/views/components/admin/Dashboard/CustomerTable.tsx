import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import { STYLES } from "../../../../styles/styles";
import { Avatar, IconButton, Typography } from "@mui/material";
import { DeleteOutlined } from "@mui/icons-material";
import { useGetOrdersQuery } from "../../../../store/api/api.order";
import { StatusChip } from "../../common/StyledComponent";
import Spinner from "../../common/Spinner";
import NoData from "../../common/NoData";

const styles = {
	display: "flex",
	alignItems: "center",
	gap: 1,
	whiteSpace: "noWrap",
};

const CustomerTable = () => {
	const { data, isFetching } = useGetOrdersQuery();

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
						{data?.data?.length
							? data?.data.length <= 0 && (
									<TableRow>
										<TableCell sx={{ height: 100 }} align="center" colSpan={7}>
											<NoData />
										</TableCell>
									</TableRow>
							  )
							: null}

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
									<StatusChip status={order.status.toLowerCase()}>
										{order.status}
									</StatusChip>
								</TableCell>
								<TableCell>
									<IconButton size="small" sx={{ ...STYLES.icon }}>
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
