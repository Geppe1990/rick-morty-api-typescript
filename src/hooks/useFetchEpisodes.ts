import { useEffect, useState } from 'react';
import axios, { AxiosResponse } from "axios";
import { IState as CharacterState } from "../components/Character/Character";

const useFetchEpisodes = ( episodeList: [] | undefined ): {
	episodes: CharacterState["episodes"] | undefined
} => {
	const [episodes, setEpisodes] = useState<CharacterState["episodes"]>([])
	
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