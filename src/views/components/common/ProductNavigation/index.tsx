import { ListItem, ListItemText, MenuList } from "@mui/material";
import { Link } from "react-router-dom";
import { useStyles } from "./styled";

const ProductNavigation = () => {
	const classes = useStyles();
	return (
		<MenuList className={classes.root}>
			<Link to="/new_arrival">
				<ListItem>
					<ListItemText>New Arrival</ListItemText>
				</ListItem>
			</Link>
			<Link to="/best_seller">
				<ListItem>
					<ListItemText>Best Seller</ListItemText>
				</ListItem>
			</Link>
			<Link to="/featured">
				<ListItem>
					<ListItemText>Featured</ListItemText>
				</ListItem>
			</Link>
			<Link to="/special_offer">
				<ListItem>
					<ListItemText>Special Offer</ListItemText>
				</ListItem>
			</Link>
		</MenuList>
	);
};

export default ProductNavigation;
