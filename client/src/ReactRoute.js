import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import AllTitlesList from './AllTitlesList';
import { Route  } from 'react-router-dom'
import AllActorsList from './AllActorsList';
import {Route} from './Menu';
import { BrowserRouter as Router, Route } from 'react-router-dom'


class ReactRoutes extends Component {
	render(){
		return (
            <Router>
            <div>
                <Route path='/AllTitles' component={Routesss}/>
                <Route path='/AllActors' component={Routesss}/>
                <Route path='/OAuth' />
            </div>
            </Router>
		)
	}
}

export default ReactRoutes;