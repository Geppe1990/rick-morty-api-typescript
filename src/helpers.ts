export const errorsManager = (error: {
	request: string,
	message: string,
	response: {
		data: {
			error: string
		}
	}
}, callback: any) => {
	if (error.response) {
		console.log(error.response.data);
		callback(error.response.data.error);
	} else if (error.request) {
		console.log(error.request);
		callback(error.message);
	} else {
		console.log("Error", error.message);
		callback(error.message);
	}
};