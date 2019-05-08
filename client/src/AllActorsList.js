import React, {Component} from 'react';
import {Container, Row, Col }from 'react-bootstrap'
import { MapContainer } from './MapContainer';
const APIactors = 'http://localhost:3009/AllActors'




class AllActorsList extends Component {
    constructor(props) {
		super(props);
		this.state = {
      actors: []
		}
	}

	loadActors (){
		console.log("Ringing:", APIactors)
		fetch (APIactors)
			.then(res => res.json())
			.then(result => this.setState({actors:result}))
			.catch(err => console.log('🛑🛑🛑 Check All Actors Component',err))
	}
	  componentWillMount() {
		this.loadActors();
	}

	onActorClick = (props) =>
		this.setState({
			selectedActor: props
		})


	render(){
		console.log('frommmmm actors component file')
		return (
			<div className="App-Component-Actors-Route-Container">
						<h1>Hello Actors</h1>

							<AllActorsList

							/>
			</div>
				)
	}
}





export default AllActorsList;