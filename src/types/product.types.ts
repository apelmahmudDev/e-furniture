export interface ProductInterface {
	status: string;
	message: string;
	data: [
		{
			id: string;
			name: string;
			price: string | number;
			description: string;
			image: string;
			category: string;
			// subCategory: string;
		}
	];
}
