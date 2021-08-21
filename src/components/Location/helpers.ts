import { get } from "../../helpers";

export const getCurrentLocation = (url: string, callbackLocation: any, callbackError: any) => {
	get(
		url,
		(response: {
			data: {}
		}) => {
			callbackLocation(response.data);
		},
		callbackError
	);
};

export const hasLocation = (location: {}) => {
	return Object.keys(location).length > 0;
};