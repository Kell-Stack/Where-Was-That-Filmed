import React, {Component} from 'react';
import { NavLink } from 'reactstrap';
const APIactors = '/API/AllActors'
const APItourbyactor = '/API/AllActors/'




class AllActorsList extends Component {
    constructor(props) {
		super(props);
		this.state = {
			actors: [],
			sortedActors: [],
			actorsWithTitles: []
		}
	}


	//this function calls the db and fetches infor with query
	//then returns results of all actos
	loadActors (){
		console.log("Ringing:", APIactors)
		fetch (APIactors)
			.then(res => res.json())
			.then(result => {
				this.setState({actors:result})
				//this calls the generateUniqueActors function with the results from loadAll and filters the list by unique actors
				//after the list is sanitized of duplicates it's then sorted
				this.setState({sortedActors: this.generateUniqueActors(this.state.actors)})
				//console.log('✅',this.generateUniqueActors(this.state.actors))
				// this.locationsByActors(this.state.sortedActors)
				console.log("😎", this.locationsByActors(this.state.sortedActors))

			})
			.catch(err => console.log('🛑🛑🛑 Check All Actors Component',err))
	}

	//checks to make sure each actor is displayed once, if the actor is not in the list then they exist in the sortedActors array already
	generateUniqueActors(filmList) {
		var uniqueActors = {}
		filmList.forEach(film => {
			// TODO: refactor into loop
			if (uniqueActors[film.actor_1] === undefined) {
				uniqueActors[film.actor_1] = true
			}
			if (uniqueActors[film.actor_2] === undefined) {
				uniqueActors[film.actor_2] = true
			}
			if (uniqueActors[film.actor_3] === undefined) {
				uniqueActors[film.actor_3] = true
			}
		})

		let sortedActors = Object.keys(uniqueActors).sort()
		// console.log("👃🏼",sortedActors)
		return sortedActors
}

	componentWillMount() {
		this.loadActors();
	}

//this function takes the list results from load actors and sends a query back to the server to grab
//every row that actor is featured in returning the title and id of that row

	locationsByActors(actorLocList) {
		actorLocList.forEach((actor, index) => {
			//if (index > 0) { return }
			let newURI = APItourbyactor + actor.trim()
			fetch (newURI)
			.then(res => res.json())
			.then(result => {
				// this.state({actorsWithTitles})
				// console.log("💋", result)
			})
			.catch(err => console.log('Check Actor\'s name🐲',actor, err))
		})
	}


	// idLocationsByActors(idForMarker) {
	// 	idForMarker.forEach((id) => {
	// 		// let actorLink = this.state.actorsWithTitles;
	// 		// console.log("🍄", actorLink)
	// 	})
	// }

	//NEXT STEPS:
	//1. create marker by id: write new function to use the returned id to mark on the map where that location was
	//2. have a drop down or checkbox or radio button next to the id so that users can save loc
	//3. pagination set up for list (nice feature)
	//4. follow similiar queries but for titles (prop a little easier only dealing with one column)
	//4. contain map so it's in fixed location. as well as column for Actors and Titles



//r
// [
// 	{name: "Eddie Murphy", films: [ {name: "", id: ""} ]}
// ]

// [{
// actor: value
// 	{id: val,
// 	{title: val}
// }]


	// onActorClick = (props) =>
	// 	this.setState({
	// 		selectedActor: props
	// 	})

	render(){

		console.log('frommmmm actors component file', this.state.actors.length)

		// let actorLink = this.state.idLocationsByActors

		let lis = this.state.sortedActors.map(actor => {
			return <li>
				<a href={`/AllActors/${actor}`}> {actor}</a></li>
		})

		// let idMarker;

		return (
			<div className="App-Component-Actors-Route-Container">
					<h1>Tour By Actor</h1>

					<ol>
						{lis}
					</ol>
			</div>
		)
	}
}


export default AllActorsList;