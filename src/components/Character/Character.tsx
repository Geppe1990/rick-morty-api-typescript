import React from 'react';
import { useParams } from 'react-router-dom';
import Label from "../Label/Label";
import Badges from "../Badges/Badges";
import Pagination from "../Pagination/Pagination";
import Location from "../Location/Location";
import useFetchUser from '../../hooks/useFetchUser';
import './character.scss';
import useFetchEpisodes from '../../hooks/useFetchEpisodes';

export interface IState{
	episodes: {
		data: {
			name: string,
			episode: string
		}
	}[],
	character: {
		image: string,
		name: string,
		status: string,
		species: string,
		type: string,
		gender: string,
		episode: [],
		location: {
			name: string,
			url: string
		},
		origin: {
			name: string,
			url: string,
		}
	},
	errors: string
}

const Character: React.FC = () => {
	const { id } = useParams<{id: string}>();
	const { character } = useFetchUser(id);
	const { episodes } = useFetchEpisodes(character?.episode)
	const getCharacterStatus = (data: string | undefined) => data ? <span className={`status ${data.toLowerCase()}`}></span> : null;

	return (
		character !== undefined ?
			<div className="container">
				<div className="character">
					<Label data={character.name} tag={"h1"} />

					<div className="character__wrapper">
						<img src={character.image} alt={character.name} />
						<div className="character__data">
							<Label
								label={"Status: "}
								data={character.status}
								additionalData={getCharacterStatus(character.status)}
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
				<Pagination id={parseInt(id)} />
			</div>
		: null
	);
}

export default Character;
