import React from 'react';
import Cta from '../Cta/Cta';
import Label from '../Label/Label';
import './home.scss';

const Home: React.FC = () => {
	return (
		<>
			<div className="container">
				<div className="home">
					<Label tag={"h1"} data={"Rick & Morty"}></Label>
					<Cta text={"Go to the first character"} link={"/1"} />
				</div>
			</div>
		</>
	);
}

export default Home;
