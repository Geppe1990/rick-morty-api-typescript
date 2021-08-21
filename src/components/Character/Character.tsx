import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Label from "../Label/Label";
import Badges from "../Badges/Badges";
import Pagination from "../Pagination/Pagination";
import Notification from "../Notification/Notification";
import Location from "../Location/Location";
import { getUser, hasCharacter, hasError } from "./helpers";

interface Props {}

const Character: React.FC<Props> = () => {
	const [character, setCharacter] = useState({
		'image': "",
		'name': "",
		'status': "",
		'species': "",
		'type': "",
		'gender': "",
		'location': {
			'name': "",
			'url': ""
		},
		'origin': {
			'name': "",
			'url': "",
		}
	});
	const [episodes, setEpisodes] = useState([]);
	const [errorMessage, setErrorMessage] = useState("");
	const { id } = useParams<{id: string}>();

	// const _statusManager = (data) => data ? <span className={`status ${data.toLowerCase()}`}></span> : null;

	useEffect(() => {
		getUser(id, setCharacter, setEpisodes, setErrorMessage);
	}, [id]);

	if (!hasCharacter(character) && !hasError(errorMessage)) {
		return <Notification message={"Loading..."} type={"alert"} />;
	}

	if (hasError(errorMessage)) {
		return <Notification message={errorMessage} type={"error"} />;
	}

	return (
		<div className="container">
			<div className="character">
				<Label data={character.name} tag={"h1"} />

				<div className="character__wrapper">
					<img src={character.image} alt={character.name} />
					<div className="character__data">
						<Label
							label={"Status: "}
							data={character.status}
							//additionalData={_statusManager(character.status)}
						/>
						<Label label={"Species: "} data={character.species} />
						<Label label={"Type: "} data={character.type} />
						<Label label={"Gender: "} data={character.gender} />
						<Label
							label={"Origin: "}
							data={character.origin.name}
						/>
					</div>
				</div>
				{character.location.url ? (
					<Location placement={character.location.url} />
				) : null}
				<Badges keys={episodes} title={"Appears in: "} />
			</div>
			<Pagination id={id} />
		</div>
	);
}

export default Character;