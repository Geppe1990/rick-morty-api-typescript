import * as React from 'react';
import { hot } from "react-hot-loader/root";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Character from './components/Character/Character';
import Home from './components/Home/Home';

const App: React.FC = () => {
	return (
		<>
			<Router>
				<Route exact path="/" component={Home} />
				<Route path="/:id" component={Character} />
			</Router>
		</>
	);
}

export default hot(App);
