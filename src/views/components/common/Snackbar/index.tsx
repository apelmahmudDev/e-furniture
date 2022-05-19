import { VariantType, useSnackbar } from "notistack";

const Snackbar = () => {
	const { enqueueSnackbar } = useSnackbar();
	const handleClickVariant = (variant: VariantType, message: string) => {
		// variant could be success, error, warning, info, or default
		enqueueSnackbar(`${message}!`, { variant });
	};
	return handleClickVariant;
};

export default Snackbar;
