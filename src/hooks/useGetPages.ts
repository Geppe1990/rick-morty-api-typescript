import { useEffect, useState } from 'react';
import axios from 'axios';
import { IState as PaginationState } from '../components/Pagination/Pagination';
import { endpoints } from "../../src/variables";

const useGetPages = (id: number): {
	pages: PaginationState["pages"],
	totalCharacters: number
} => {
	const [pages, setPages] = useState<PaginationState["pages"]>([])
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