export interface IGetUser {
	status: string;
	message: string;
	data: {
		_id: string;
		first_name: string;
		last_name: string;
		phone: string;
		email: string;
		password: string;
		user_type: string;
		__v: string | number;
	}[];
}
