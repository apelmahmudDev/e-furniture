import { Paper, Stack, Typography } from "@mui/material";
import { STYLES } from "../../../../styles/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";
import { Avatar, IconButton } from "@mui/material";
import { useState } from "react";
import {
	useDeleteProductMutation,
	useGetProductsQuery,
} from "../../../../store/api/api.product";

// icons
import { Visibility, Edit, DeleteOutlined } from "../../../../assets/icon";
import NoData from "../../common/NoData";
import Spinner from "../../common/Spinner";

interface Data {
	name: string;
	code: string;
	population: number;
	size: number;
	density: number;
}

function createData(
	name: string,
	code: string,
	population: number,
	size: number
): Data {
	const density = population / size;
	return { name, code, population, size, density };
}

const rows = [
	createData("India", "IN", 1324171354, 3287263),
	createData("China", "CN", 1403500365, 9596961),
	createData("Italy", "IT", 60483973, 301340),
	createData("United States", "US", 327167434, 9833520),
	createData("Canada", "CA", 37602103, 9984670),
	createData("Australia", "AU", 25475400, 7692024),
	createData("Germany", "DE", 83019200, 357578),
	createData("Ireland", "IE", 4857000, 70273),
	createData("Mexico", "MX", 126577691, 1972550),
	createData("Japan", "JP", 126317000, 377973),
	createData("France", "FR", 67022000, 640679),
	createData("United Kingdom", "GB", 67545757, 242495),
	createData("Russia", "RU", 146793744, 17098246),
	createData("Nigeria", "NG", 200962417, 923768),
	createData("Brazil", "BR", 210147125, 8515767),
];

const ProductTable = () => {
	const [page, setPage] = useState(0);
	const [rowsPerPage, setRowsPerPage] = useState(5);

	const handleChangePage = (event: unknown, newPage: number) => {
		setPage(newPage);
	};

	const handleChangeRowsPerPage = (
		event: React.ChangeEvent<HTMLInputElement>
	) => {
		setRowsPerPage(+event.target.value);
		setPage(0);
	};

	// get products
	const { data, isLoading } = useGetProductsQuery();
	// delete products
	const [deleteProduct, { isLoading: isDeleting }] = useDeleteProductMutation();

	const handleDelete = (id: string) => {
		if (id) {
			deleteProduct(id);
		}
	};

	return (
		<Paper sx={{ p: 2, ...STYLES.boxShadow1 }}>
			<Typography gutterBottom variant="h6">
				Product List ({data?.data?.length})
			</Typography>
			<TableContainer sx={{ maxHeight: 440 }}>
				<Table size="small" stickyHeader aria-label="sticky table">
					<TableHead>
						<TableRow>
							<TableCell>No.</TableCell>
							<TableCell>Products</TableCell>
							<TableCell>Price</TableCell>
							<TableCell>Category</TableCell>
							{/* <TableCell>Sub Category</TableCell> */}
							<TableCell align="right">Actions</TableCell>
						</TableRow>
					</TableHead>
					<TableBody>
						{/* loading spinner */}
						{isLoading && (
							<TableRow>
								<TableCell sx={{ height: 100 }} align="center" colSpan={7}>
									<Spinner />
								</TableCell>
							</TableRow>
						)}
						{/* no data found message */}
						{data?.data?.length && data?.data?.length < 1 && (
							<TableRow>
								<TableCell sx={{ height: 100 }} align="center" colSpan={7}>
									<NoData />
								</TableCell>
							</TableRow>
						)}

						{/*table data show */}
						{data?.data
							// .sort((a, b) => a.timestamps - b.timestamps)
							.map((product, idx) => (
								<TableRow key={idx} hover role="checkbox" tabIndex={-1}>
									<TableCell>{idx + 1}</TableCell>
									<TableCell
										sx={{
											display: "flex",
											alignItems: "center",
											gap: 1,
											whiteSpace: "noWrap",
										}}
									>
										<Avatar
											sx={{ borderRadius: 0 }}
											src={product.image}
											alt="product-image"
										/>
										{product.name}
									</TableCell>
									<TableCell sx={{ whiteSpace: "noWrap" }}>
										{product.price}
									</TableCell>
									<TableCell>{product.category}</TableCell>
									{/* <TableCell>{product.subCategory}</TableCell> */}
									<TableCell align="right">
										<Stack
											spacing={1}
											direction="row"
											justifyContent="flex-end"
										>
											<IconButton size="small" sx={{ ...STYLES.icon }}>
												<Visibility />
											</IconButton>
											<IconButton size="small" sx={{ ...STYLES.icon }}>
												<Edit />
											</IconButton>
											<IconButton
												size="small"
												disabled={isDeleting}
												sx={{ ...STYLES.icon }}
												onClick={() => handleDelete(product._id)}
											>
												<DeleteOutlined />
											</IconButton>
										</Stack>
									</TableCell>
								</TableRow>
							))}
					</TableBody>
				</Table>
			</TableContainer>
			<TablePagination
				rowsPerPageOptions={[5, 10, 20]}
				component="div"
				count={rows.length}
				rowsPerPage={rowsPerPage}
				page={page}
				onPageChange={handleChangePage}
				onRowsPerPageChange={handleChangeRowsPerPage}
			/>
		</Paper>
	);
};

export default ProductTable;
