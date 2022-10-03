import { InitialState } from "../../store/slice/shippingSlice";

export interface OrderApiInterface extends InitialState {}

interface IData extends InitialState {
	_id: string;
}

export interface OrderGetApiInterface {
	status: string;
	message: string;
	data: IData[] | undefined;
}
