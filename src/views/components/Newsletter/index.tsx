import { Box, TextField, Button, Container, Typography } from "@mui/material";
import { useStyles } from "./styled";

const Newsletter = () => {
	const classes = useStyles();
	return (
		<Box my={2} component="section" className={classes.sectionBg}>
			<Container maxWidth="sm">
				<Typography variant="h5" gutterBottom textAlign="center">
					Get Updates by <br /> Subscription email
				</Typography>
				<Box component="form" noValidate autoComplete="off" textAlign="center">
					<TextField
						size="small"
						fullWidth
						id="filled-basic"
						label="Filled"
						variant="filled"
					/>
					<Button sx={{ mt: 2 }} type="submit" variant="contained">
						Submit
					</Button>
				</Box>
			</Container>
		</Box>
	);
};

export default Newsletter;
