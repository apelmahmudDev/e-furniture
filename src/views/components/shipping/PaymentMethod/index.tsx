import { Box, Button, CardContent, Typography } from "@mui/material";
import { AppCard } from "../../common/StyledComponent";
import Header from "../Header";

import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import { makeStyles } from "@mui/styles";
import { IMAGES } from "../../../../constants/themeData";

const useStyles = makeStyles((theme) => ({
	formControlLabel: {
		border: `1px solid ${theme.palette.divider}`,
		background: theme.palette.secondary.light,
		borderRadius: 5,
		margin: "8px !important",
		padding: 5,
	},
	operatorImg: {
		height: 45,
		"& > img": {
			height: "100%",
			width: "100%",
			objectFit: "contain",
		},
	},
}));

const PaymentMethod = () => {
	const classes = useStyles();

	return (
		<Box sx={{ mt: { xs: 7, md: 3 } }}>
			<AppCard>
				<CardContent>
					<Header headerText="Payment Method" />

					<FormControl sx={{ ml: -1 }}>
						<RadioGroup row defaultValue="cash_on_delevery">
							<FormControlLabel
								className={classes.formControlLabel}
								value="cash_on_delevery"
								control={<Radio />}
								label={
									<LabelImage
										labelImg={IMAGES.CashOnDeleveryImg}
										labelValue="bkash"
										labelText="Cash on Delevery"
									/>
								}
							/>
							<FormControlLabel
								className={classes.formControlLabel}
								value="bkash"
								control={<Radio />}
								label={
									<LabelImage labelImg={IMAGES.BkashImg} labelValue="bkash" />
								}
							/>
							<FormControlLabel
								className={classes.formControlLabel}
								value="nagad"
								control={<Radio />}
								label={
									<LabelImage labelImg={IMAGES.NagadImg} labelValue="nagad" />
								}
							/>
						</RadioGroup>
					</FormControl>

					{/* confrim order */}
					<Button variant="contained">Confirm Order</Button>
				</CardContent>
			</AppCard>
		</Box>
	);
};

export default PaymentMethod;

const LabelImage = ({
	labelImg,
	labelValue,
	labelText,
}: {
	labelImg: string;
	labelValue: string;
	labelText?: string;
}) => {
	const classes = useStyles();
	return (
		<Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
			<Box className={classes.operatorImg}>
				<img src={labelImg} alt={labelValue} />
			</Box>
			<Typography color="text.secondary" variant="h6">
				{labelText}
			</Typography>
		</Box>
	);
};
