import {Container, Box, Typography} from '@mui/material'
const ServerError = () => {
	return (
		<Container maxWidth="sm" sx={{ my: 3 }}>
			<Box textAlign="center">
				<Typography gutterBottom variant="h5" fontWeight="600">
					500 Internal Server Error
				</Typography>
				<Typography variant="body2">Oops, Something went wrong.</Typography>
				<Typography sx={{ mt: 1.25 }}>
					The server encountered an internal error or misconfiguration and was
					unable to complete you request.
				</Typography>
			</Box>
		</Container>
	);
};

export default ServerError;
