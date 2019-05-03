import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import AllTitlesList from './AllTitlesList';
import AllActorsList from './AllActorsList';
// import {Route} from './Menu';
import { BrowserRouter as Router, Route } from 'react-router-dom'


class ReactRoutes extends Component {

    render(){
        console.log('from ReactRoute.js')
		return (
            <Router>
            <div>
                <Route path='/AllTitles' component={AllTitlesList}/>
                <Route path='/AllActors' component={AllActorsList}/>
            </div>
            </Router>
		)
	}
}

export default ReactRoutes;