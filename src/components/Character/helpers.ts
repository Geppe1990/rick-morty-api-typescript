import { endpoints } from "../../variables";
import { errorsManager } from "../../helpers";
import axios, { AxiosResponse } from "axios";
import { IState as Props } from "./Character";

export const getUser = (
	id: string,
	callbackCharacter: React.Dispatch<React.SetStateAction<Props["character"]>>,
	callbackEpisodes: React.Dispatch<React.SetStateAction<Props["episodes"]>>,
	callbackError: React.Dispatch<React.SetStateAction<Props["errors"]>>,
): void => {
	const url = `${endpoints.CHARACTER}${id}`;

	axios
		.get(url)
		.then((response) => {
			const episodesCalls: Promise<AxiosResponse<any>>[] = [];

			response.data.episode.forEach((url: string) =>
				url ? episodesCalls.push(axios.get(url)) : null
			);

			callbackCharacter(response.data);
			_getEpisodes(episodesCalls, callbackEpisodes, callbackError);
		})
		.catch((error) => errorsManager(error, callbackError));
};

export const hasCharacter = (character: Props["character"]): boolean => Object.keys(character).length > 0;
export const hasError = (errorMessage: string) : boolean => (errorMessage && errorMessage.length) != 0;

const _getEpisodes = (
	urls: Promise<AxiosResponse<any>>[], 
	episodesCallback: React.Dispatch<React.SetStateAction<Props["episodes"]>>, 
	errorCallback: React.Dispatch<React.SetStateAction<Props["errors"]>>) => {

	axios
		.all(urls)
		.then((response) => {
			episodesCallback(response);
		})
		.catch((error) => errorsManager(error, errorCallback));
};