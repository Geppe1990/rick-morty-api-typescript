import React, { useEffect, useState } from 'react';
import Label from "../Label/Label";
import { getCurrentLocation, hasLocation } from "./helpers";

interface Props {
	placement: string,
}

const Location: React.FC<Props> = ({ placement }) => {
	const [location, setlocation] = useState({
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
