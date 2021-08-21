import React, { useState, useEffect } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { getcurrentPage, hasPrev, hasNext } from "./helpers";
import { NavLink } from "react-router-dom";
import './pagination.scss'

interface Props {
	id: number
}

const Pagination: React.FC<Props> = ({ id }) => {
	const [pages, setPages] = useState([]);
	const [totalCharacters, setTotalCharacters] = useState(1);
	const [errorMessage, setErrorMessage] = useState("");

	useEffect(() => {
		getcurrentPage(id, setPages, setTotalCharacters, setErrorMessage);
	}, [id]);

	const _pageManager = (direction: string, link: string, key?: string) => {
		if (!link) {
			return null;
		}

		const isPrev = direction == "prev";
		const isNext = direction == "next";
		const cls = isPrev || isNext ? `pagination__${direction}` : "";

		return (
			<li className={cls} key={key}>
				<NavLink to={`/${link}`} activeClassName="current">
					{isPrev ? <FaChevronLeft /> : null}
					{isNext ? <FaChevronRight /> : null}
					{!isPrev && !isNext ? link : null}
				</NavLink>
			</li>
		);
	};

	if (errorMessage && errorMessage.length != 0) {
		return null;
	}

	return (
		<ul className="pagination">
			{hasPrev(id) ? _pageManager("prev", `${id - 1}`) : null}
			{pages.map((page: {id: string}, index: number) => _pageManager("", page.id, index.toString()))}
			{hasNext(id, totalCharacters)
				? _pageManager("next", `${id + 1}`)
				: null}
		</ul>
	);
}

export default Pagination;
