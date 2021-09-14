import { useEffect, useState } from 'react';
import axios from "axios";
import { IState } from '../interfaces/Location';

const useGetLogation = (url: string): {
	location: IState["location"] | undefined, 
} => {
	const [location, setLocation] = useState<IState["location"]>(Object);

	useEffect(() => {
		const fetchData = async () => {
			try {
				const { data: response } = await axios.get(url);
				setLocation(response);
			} catch (error) {
				console.error(error)
			}
		};

		fetchData();

	}, [url]);

	return {
		location
	};
};

export default useGetLogation;