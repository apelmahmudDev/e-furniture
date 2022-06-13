import { Box, CardContent, Divider, Typography } from "@mui/material";
import { AppCard } from "../common/StyledComponent";
import Header from "./Header";

import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import { makeStyles } from "@mui/styles";
import { IMAGES } from "../../../constants/themeData";
import { useAppDispatch } from "../../../store";
import { updatePaymentMethod } from "../../../store/slice/shippingSlice";
import ButtonProgress from "../common/ButtonProgress";

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
	const dispatch = useAppDispatch();

	return (
		<Box sx={{ mt: { xs: 7, md: 3 } }}>
			<AppCard>
				<CardContent>
					<Header headerText="Payment Method" />

					<FormControl sx={{ ml: -1 }}>
						<RadioGroup
							row
							defaultValue="Cash on Delevery"
							onChange={(e) => dispatch(updatePaymentMethod(e.target.value))}
						>
							<FormControlLabel
								className={classes.formControlLabel}
								value="Cash on Delevery"
								control={<Radio />}
								label={
									<LabelImage
										labelImg={IMAGES.CashOnDeleveryImg}
										labelValue="cash_on_delevery"
										labelText="Cash on Delevery"
									/>
								}
							/>
							<FormControlLabel
								className={classes.formControlLabel}
								value="Bkash"
								control={<Radio />}
								label={
									<LabelImage labelImg={IMAGES.BkashImg} labelValue="bkash" />
								}
							/>
							<FormControlLabel
								className={classes.formControlLabel}
								value="Nagad"
								control={<Radio />}
								label={
									<LabelImage labelImg={IMAGES.NagadImg} labelValue="nagad" />
								}
							/>
						</RadioGroup>
					</FormControl>

					{/* confrim order */}
					<Divider sx={{ my: 2 }} />
					<Box
						sx={{
							display: "flex",
							justifyContent: "flex-end",
							"& .MuiButton-root": {
								color: (theme) => theme.palette.secondary.light,
							},
						}}
						mt={2}
					>
						<ButtonProgress
							btnType="submit"
							btnText="Confirm Order"
							isLoading={false}
							variantType="contained"
						></ButtonProgress>
					</Box>
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
