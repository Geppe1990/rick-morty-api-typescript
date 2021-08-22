import React, { useEffect, useState } from 'react';
import Label from "../Label/Label";
import { getCurrentLocation, hasLocation } from "./helpers";
import './location.scss';

interface IProps {
	placement: string,
}

export interface IState {
	location: {
		name: string,
		type: string,
		dimension: string,
		residents: Array<String>
	},
	errors: string
}

const Location: React.FC<IProps> = ({ placement }) => {
	const [location, setlocation] = useState<IState["location"]>({
		'name': "",
		'type': "",
		'dimension': "",
		'residents': []
	});
	const [errorMessage, setErrorMessage] = useState("");

	useEffect(() => {
		getCurrentLocation(placement, setlocation, setErrorMessage);
	}, [placement]);

	if (errorMessage && errorMessage.length != 0) {
		return <></>;
	}

	if (!hasLocation(location)) {
		return <></>;
	}

	return (
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
	);
}

export default Location;
