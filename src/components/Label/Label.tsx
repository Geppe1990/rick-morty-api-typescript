
import React from 'react';

interface Props {
	label?: string
	tag?: string,
	data?: string | number,
	additionalData?: string
}

const Label: React.FC<Props> = ({tag, data, label, additionalData}) => {
	switch (tag) {
		case "h1":
			return <h1>{data}</h1>;
		case "h2":
			return <h2>{data}</h2>;
		default:
			return data && label && !tag ? (
				<p>
					<span>{label}</span>
					{additionalData}
					{data}
				</p>
			) : null;
	}
}

export default Label;
