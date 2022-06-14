import { Avatar, Box, CardContent } from "@mui/material";

// table
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import { AppCard, AppIconButton } from "../common/StyledComponent";
import Header from "../common/Header";
import NotFound from "../common/NotFound";
import { IMAGES } from "../../../constants/themeData";

// icons
import {
	CloseIcon,
	ProductionQuantityLimitsOutlinedIcon,
} from "../../../assets/icon";

const productImgStyles = {
	height: 60,
	width: 60,
	borderRadius: 0,
	"& > img": { objectFit: "contain" },
};

const OrdersTable = () => {
	return (
		<AppCard>
			<CardContent>
				<Header headerText="Your Orders" />

				{/* orders empty message */}
				{false && (
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
				{1 > 0 && (
					<>
						<TableContainer>
							<Table sx={{ minWidth: 650 }} aria-label="simple table">
								<TableHead>
									<TableRow>
										<TableCell>Product</TableCell>
										<TableCell align="center">Name</TableCell>
										<TableCell align="center">Price</TableCell>
										<TableCell align="center">Quantity(g)</TableCell>
										<TableCell align="center">Total</TableCell>
										<TableCell align="center">Status</TableCell>
										<TableCell align="center">Actions</TableCell>
									</TableRow>
								</TableHead>

								<TableBody>
									{[...Array(5)].map((_, index) => (
										<TableRow
											key={index}
											sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
										>
											<TableCell component="th" scope="row">
												<Avatar
													sx={productImgStyles}
													src={IMAGES.HeroOneImg}
													alt="product"
												/>
											</TableCell>
											<TableCell align="center">Blue sofa box style</TableCell>
											<TableCell align="center">
												<strong>৳ </strong> {"345"}
											</TableCell>
											<TableCell align="center">2</TableCell>
											<TableCell align="center">
												<strong>৳ </strong> {"345"}
											</TableCell>
											<TableCell align="center">Pending</TableCell>
											<TableCell align="center">
												<AppIconButton>
													<CloseIcon />
												</AppIconButton>
											</TableCell>
										</TableRow>
									))}
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
