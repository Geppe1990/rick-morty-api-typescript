import { useEffect, useState } from 'react';
import axios, { AxiosResponse } from "axios";
import { IState } from "../interfaces/Episodes";

const useFetchEpisodes = ( episodeList: [] | undefined ): {
	episodes: IState["episodes"] | undefined
} => {
	const [episodes, setEpisodes] = useState<IState["episodes"]>([])
	
	useEffect(() => {
		const episodesCalls: Promise<AxiosResponse>[] = [];
		
		episodeList?.forEach((url: string) =>
			episodesCalls.push(axios.get(url))
		);

		const fetchData = async () => {
			try {
				const response = await axios.all(episodesCalls);
				setEpisodes(response);
			} catch (error) {
			  console.error(error)
			}
		};

		fetchData();

	}, [episodeList]);
	
	return { episodes }
};

export default useFetchEpisodes;