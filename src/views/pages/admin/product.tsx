import { Box } from "@mui/material";
import AddProduct from "../../components/admin/Product/AddProduct";
import ProductTable from "../../components/admin/Product/ProductTable";

const Product = () => {
	return (
		<Box component="div">
			<Box mb={2}>
				<AddProduct />
			</Box>
			<Box my={2}>
				<ProductTable />
			</Box>
		</Box>
	);
};

export default Product;
