import { endpoints } from "../../variables";
import { get, getAll } from "../../helpers";
import axios, { AxiosResponse } from "axios";

export const getUser = (
	id: string,
	callbackCharacter: any,
	callbackEpisodes: any,
	callbackError: any
) => {
	get(
		`${endpoints.CHARACTER}${id}`,
		(response: {data: {
			episode: []
		}}) => {
			var episodesCalls: Promise<AxiosResponse<any>>[] = [];

			response.data.episode.forEach((url) =>
				url ? episodesCalls.push(axios.get(url)) : null
			);

			callbackCharacter(response.data);
			_getEpisodes(episodesCalls, callbackEpisodes, callbackError);
		},
		callbackError
	);
};

export const hasCharacter = (character: object) => {
	return Object.keys(character).length > 0;
};

export const hasError = (errorMessage: string) => {
	return errorMessage && errorMessage.length != 0;
};

const _getEpisodes = (urls: Promise<AxiosResponse<any>>[], episodesCallback: any, errorCallback: any) => {
	getAll(
		urls,
		(response: []) => {
			episodesCallback(response);
		},
		errorCallback
	);
};