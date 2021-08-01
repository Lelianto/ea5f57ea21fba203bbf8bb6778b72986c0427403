import React from 'react';
import { BrowserRouter, Switch } from 'react-router-dom';
import { Route } from 'react-router';
import HomePage from '../pages/homepage/index';
        
const MainRoute = () => {
	return (
		<BrowserRouter>
			<Switch>
				<Route exact path='/' component={HomePage} />
			</Switch>
		</BrowserRouter>
	)
}
export default MainRoute;