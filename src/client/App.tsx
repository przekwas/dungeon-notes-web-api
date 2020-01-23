import * as React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Navbah from './components/navigation/Navbah';
import Home from './pages/Home';
import Personal from './pages/Personal';
import Places from './pages/Places';
import Characters from './pages/Characters';
import Events from './pages/Events';

const App = () => {
	return (
		<BrowserRouter>
			<Navbah />
			<Switch>
				<Route exact path="/" component={Home} />
				<Route exact path="/characters" component={Characters} />
				<Route exact path="/events" component={Events} />
				<Route exact path="/personal" component={Personal} />
				<Route exact path="/places" component={Places} />
			</Switch>
		</BrowserRouter>
	);
};

export default App;
