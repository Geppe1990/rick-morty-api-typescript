import { errorsManager } from "../../helpers";
import axios from "axios";
import { IState as Props } from "./Location";
import React from "react";

export const getCurrentLocation = (
	url: string, 
	callbackLocation: React.Dispatch<React.SetStateAction<Props["location"]>>,
	callbackError: React.Dispatch<React.SetStateAction<Props["errors"]>>,
	): void => {
		axios
			.get(url)
			.then((response) => {
				callbackLocation(response.data);
			})
			.catch((error) => errorsManager(error, callbackError));
};

export const hasLocation = (location: Props["location"]): boolean => {
	return Object.keys(location).length > 0;
};