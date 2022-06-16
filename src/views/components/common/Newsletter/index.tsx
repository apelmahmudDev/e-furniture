import { Box, TextField, Button, Container, Typography } from "@mui/material";
import { useStyles } from "./styled";

const Newsletter = () => {
	const classes = useStyles();

	const handleSubmit = (event: React.SyntheticEvent) => {
		event.preventDefault();
	};
	return (
		<Box my={5} component="section" className={classes.sectionBg}>
			<Container maxWidth="sm">
				<Typography variant="h5" gutterBottom textAlign="center">
					Get Updates by <br /> Subscription email
				</Typography>
				<Box
					onSubmit={handleSubmit}
					component="form"
					autoComplete="off"
					textAlign="center"
				>
					<TextField
						size="small"
						fullWidth
						id="filled-basic"
						label="Your Email"
						variant="filled"
						type="email"
						required
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
