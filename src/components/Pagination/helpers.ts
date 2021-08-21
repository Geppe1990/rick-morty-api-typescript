import { endpoints } from "../../variables";
import { get } from "../../helpers";

export const getcurrentPage = (
	id: number,
	callbackPages: any,
	callbackCharacters: any,
	callbackError: any
) => {
	const currentPage = id / 20 < 0 ? 1 : Math.ceil(id / 20);

	get(
		`${endpoints.CHARACTER}?page=${currentPage}`,
		(response: {
			data: {
				results: {}
				info: {
					count: number 
				}
			}
		}) => {
			callbackPages(response.data.results);
			callbackCharacters(response.data.info.count);
		},
		callbackError
	);
};

export const hasPrev = (id: number) => !(id <= 1);
export const hasNext = (id: number, characters: number) => !(id == characters);