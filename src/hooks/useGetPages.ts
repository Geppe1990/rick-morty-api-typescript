import { useEffect, useState } from 'react';
import axios from 'axios';
import { IState } from '../interfaces/Pagination';
import { endpoints } from "../../src/variables";

const useGetPages = (id: number): {
	pages: IState["pages"],
	totalCharacters: number
} => {
	const [pages, setPages] = useState<IState["pages"]>([])
	const [totalCharacters, setTotalCharacters] = useState(1)
	const currentPage: number = id / 20 < 0 ? 1 : Math.ceil(id / 20);
	const url = `${endpoints.CHARACTER}?page=${currentPage}`;

	useEffect(() => {
		const fetchData = async () => {
			try {
				const { data: response } = await axios.get(url);

				setPages(response.results);
				setTotalCharacters(response.data.info.count)
			} catch (error) {
				console.error(error)
			}
		};

		fetchData();
	}, [url]);
	
	return { 
		pages,
		totalCharacters
	}
};

export default useGetPages;