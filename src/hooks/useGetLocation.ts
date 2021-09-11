import { useEffect, useState } from 'react';
import axios, { AxiosResponse } from "axios";
import { IState as LocationState } from "../components/Location/Location";

const useGetLogation = (url: string): {
	location: LocationState["location"] | undefined, 
} => {
	const [location, setLocation] = useState<LocationState["location"]>(Object);

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