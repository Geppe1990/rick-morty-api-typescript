import React from 'react';
import useGetLogation from '../../hooks/useGetLocation';
import Label from "../Label/Label";
import './location.scss';

interface IProps {
	placement: string,
}

export interface IState {
	location: {
		name: string,
		type: string,
		dimension: string,
		residents: Array<string>
	},
	errors: string
}

const Location: React.FC<IProps> = ({ placement }) => {
	const { location } = useGetLogation(placement);
	const hasLocation = (location: IState["location"] | undefined): boolean => {
		return location !== undefined ? Object.keys(location).length > 0 : false
	};

	if (!hasLocation(location)) {
		return <></>;
	}

	return (
		location !== undefined ?
			<div className="location">
				<Label tag={"h2"} data="Location"></Label>
				<Label label={"Location: "} data={location.name} />
				<Label label={"Dimension: "} data={location.dimension} />
				<Label label={"Name: "} data={location.name} />
				<Label label={"Type: "} data={location.type} />
				<Label
					label={"Residents: "}
					data={location.residents ? location.residents.length : 0}
				/>
			</div>
		: null
	);
}

export default Location;
