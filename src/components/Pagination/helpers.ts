import React from "react";
import { endpoints } from "../../variables";
import { errorsManager } from "../../helpers";
import { IState as Props } from "./Pagination";
import axios from "axios";

export const getcurrentPage = (
	id: number,
	callbackPages: React.Dispatch<React.SetStateAction<Props["pages"]>>,
	callbackCharacters: React.Dispatch<React.SetStateAction<Props["characters"]>>,
	callbackError: React.Dispatch<React.SetStateAction<Props["errors"]>>
): void => {
	const currentPage: number = id / 20 < 0 ? 1 : Math.ceil(id / 20);
	const url = `${endpoints.CHARACTER}?page=${currentPage}`;

	axios
		.get(url)
		.then((response) => {
			callbackPages(response.data.results);
			callbackCharacters(response.data.info.count);
		})
		.catch((error) => errorsManager(error, callbackError));
};

export const hasPrev = (id: number): boolean => !(id <= 1);
export const hasNext = (id: number, characters: number): boolean => !(id == characters);