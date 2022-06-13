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
import { useStyles } from "./styled";
import { useState } from "react";
import { useGetProductsQuery } from "../../../../store/api/api.product";

// icons
import { Visibility, Edit, DeleteOutlined } from "../../../../assets/icon";

interface Column {
	id: "name" | "code" | "population" | "size" | "density";
	label: string;
	minWidth?: number;
	align?: "right";
	format?: (value: number) => string;
}

const columns: readonly Column[] = [
	{ id: "name", label: "Name", minWidth: 170 },
	{ id: "code", label: "ISO\u00a0Code", minWidth: 100 },
	{
		id: "population",
		label: "Population",
		minWidth: 170,
		align: "right",
		format: (value: number) => value.toLocaleString("en-US"),
	},
	{
		id: "size",
		label: "Size\u00a0(km\u00b2)",
		minWidth: 170,
		align: "right",
		format: (value: number) => value.toLocaleString("en-US"),
	},
	{
		id: "density",
		label: "Density",
		minWidth: 170,
		align: "right",
		format: (value: number) => value.toFixed(2),
	},
];

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
	const classes = useStyles();

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
	return (
		<Paper sx={{ p: 2, ...STYLES.boxShadow1 }}>
			<Typography gutterBottom variant="h6">
				Product List
			</Typography>
			<TableContainer sx={{ maxHeight: 440 }}>
				<Table size="small" stickyHeader aria-label="sticky table">
					<TableHead>
						<TableRow>
							{/* {columns.map((column) => (
								<TableCell
									key={column.id}
									align={column.align}
									style={{ minWidth: column.minWidth }}
								>
									{column.label}
								</TableCell>
							))} */}

							<TableCell>No.</TableCell>
							<TableCell>Products</TableCell>
							<TableCell>Price</TableCell>
							<TableCell>Category</TableCell>
							{/* <TableCell>Sub Category</TableCell> */}
							<TableCell align="right">Actions</TableCell>
						</TableRow>
					</TableHead>
					<TableBody>
						{/* {rows
							.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
							.map((row) => {
								return (
									<TableRow hover role="checkbox" tabIndex={-1} key={row.code}>
										{columns.map((column) => {
											const value = row[column.id];
											return (
												<TableCell key={column.id} align={column.align}>
													{column.format && typeof value === "number"
														? column.format(value)
														: value}
												</TableCell>
											);
										})}
									</TableRow>
								);
							})} */}
						{data?.data.map((product, idx) => (
							<TableRow hover role="checkbox" tabIndex={-1}>
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
									<Stack spacing={1} direction="row" justifyContent="flex-end">
										<IconButton size="small" sx={{ ...STYLES.icon }}>
											<Visibility />
										</IconButton>
										<IconButton size="small" sx={{ ...STYLES.icon }}>
											<Edit />
										</IconButton>
										<IconButton size="small" sx={{ ...STYLES.icon }}>
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
