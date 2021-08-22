export const errorsManager = (
	error: {
		request: string,
		message: string,
		response: {
			data: {
				error: string
			}
		}
	}, 
	callback: React.Dispatch<React.SetStateAction<string>>): void => {
	if (error.response) {
		callback(error.response.data.error);
	} else if (error.request) {
		callback(error.message);
	} else {
		callback(error.message);
	}
};