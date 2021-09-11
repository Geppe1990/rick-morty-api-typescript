import React from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import useGetPages from "../../hooks/useGetPages";
import './pagination.scss'

interface IProps {
	id: number
}

export interface IState {
	pages: { id: string }[],
	characters: number,
	errors: string
}

const Pagination: React.FC<IProps> = ({ id }) => {
	const { pages, totalCharacters } = useGetPages(id);

	const hasPrev = (id: number): boolean => !(id <= 1);
	const hasNext = (id: number, characters: number): boolean => !(id == characters);

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

	return (
		<ul className="pagination">
			{hasPrev(id) ? _pageManager("prev", `${id - 1}`) : null}
			{pages.map((page, index) => _pageManager("", page.id, index.toString()))}
			{hasNext(id, totalCharacters)
				? _pageManager("next", `${id + 1}`)
				: null}
		</ul>
	);
}

export default Pagination;
