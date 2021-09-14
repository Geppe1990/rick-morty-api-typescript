import { useEffect, useState } from 'react';
import axios from 'axios';
import { endpoints } from "../../src/variables";
import { IState } from "../interfaces/Character";

const useFetchUser = ( id: string ): {
	character: IState["character"] | undefined, 
	loading: boolean
} => {
  const [character, setCharacter] = useState<IState["character"]>();
  const [loading, setLoading] = useState(false);
  const url = `${endpoints.CHARACTER}${id}`;

	useEffect(() => {
		const fetchData = async () => {
			try {
				const { data: response } = await axios.get(url);
				setCharacter(response);
			} catch (error) {
				console.error(error)
			}
			setLoading(false);
		};

		fetchData();
	}, [url]);

	return {
		character,
		loading,
	};
};

export default useFetchUser;
