import { Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => ({
	root: {
		textAlign: "center",
		"& > span": {
			color: theme.palette.primary.main,
		},
	},
}));

const Portion = ({
	firstWord,
	lastWord,
	mb,
}: {
	firstWord: string;
	lastWord: string;
	mb?: number;
}) => {
	const classes = useStyles();

	return (
		<Typography mb={mb} className={classes.root} variant="h5" gutterBottom>
			{firstWord} <span>{lastWord}</span>
		</Typography>
	);
};

export default Portion;
