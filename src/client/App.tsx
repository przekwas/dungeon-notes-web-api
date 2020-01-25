import * as React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Navbah from './components/navigation/Navbah';
import Home from './pages/Home';
import Personal from './pages/forms/Personal';
import Places from './pages/forms/Places';
import Characters from './pages/forms/Characters';
import Events from './pages/forms/Events';
import Details from './pages/Details';
import Edit from './pages/Edit';
import Login from './pages/Login';
import Full from './pages/Full';
import Search from './pages/Search';

const App = () => {
	return (
		<BrowserRouter>
			<Navbah />
				<Switch>
					<Route exact path="/" component={Home} />
					<Route exact path="/login" component={Login} />
					<Route exact path="/characters" component={Characters} />
					<Route exact path="/events" component={Events} />
					<Route exact path="/personal" component={Personal} />
					<Route exact path="/places" component={Places} />
					<Route exact path="/search" component={Search} />
					<Route exact path="/:type/full" component={Full} />
					<Route exact path="/:type/details/:id" component={Details} />
					<Route exact path="/:type/edit/:id" component={Edit} />
				</Switch>
		</BrowserRouter>
	);
};

export default App;
