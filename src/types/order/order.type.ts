import { InitialState } from "../../store/slice/shippingSlice";

export interface OrderApiInterface extends InitialState {}
export interface OrderGetApiInterface {
	status: string;
	message: string;
	data: InitialState[] | undefined;
}
