import axios, { AxiosResponse } from "axios";

export const get = (url: string, callback: any, errorCallback: any) => {
	if (!url) {
		return;
	}

	axios
		.get(url)
		.then((response) => {
			callback(response);
		})
		.catch((error) => _errorsManager(error, errorCallback));
};

export const getAll = (urls: Promise<AxiosResponse<any>>[], callback: any, errorCallback: any) => {
	if (!urls) {
		return;
	}

	axios
		.all(urls)
		.then((response) => {
			callback(response);
		})
		.catch((error) => _errorsManager(error, errorCallback));
};

const _errorsManager = (error: {
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