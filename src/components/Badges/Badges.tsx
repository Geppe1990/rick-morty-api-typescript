import React from 'react';
import Label from "../Label/Label";
import './badges.scss';

interface IProps {
	keys: {
		data: {
			name: String,
			episode: String
		}
	}[],
	title: string;
}

const Badges: React.FC<IProps> = ({ keys, title }) => {
	return (
		<div className="badges">
			<Label tag={"h2"} data={title}></Label>
			{keys.length > 0
				? keys.map((key, index) => (
						<span key={index} data-episode={key.data.episode}>
							{key.data.name}
						</span>
				  ))
				: null}
		</div>
	);
}

export default Badges;
