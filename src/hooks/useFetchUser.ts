import { useEffect, useState } from 'react';
import axios from 'axios';
import { endpoints } from "../../src/variables";
import { IState as CharacterState} from "../components/Character/Character";

const useFetchUser = ( id: string ): {
	character: CharacterState["character"] | undefined, 
	loading: boolean
} => {
  const [character, setCharacter] = useState<CharacterState["character"]>();
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
