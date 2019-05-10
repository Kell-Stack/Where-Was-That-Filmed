import React, {Component} from 'react';
// import data from '~/Dev/WWTF/data/sffilmdata.csv';
// import MapContainer from './MapContainer.js';
const APItitle = '/API/AllTitles'
const APItourbytitle = '/API/AllTitles/'

class AllTitlesList extends Component {
	constructor(props) {
		super(props);
		this.state = {
			titles: [],
			sortedTitles: []
		}
	  }

	loadTitles(){
		console.log("Calling: ", APItitle)
		fetch (APItitle)
			.then(res => res.json())
			.then(result => {
				this.setState({titles:result})
				console.log("🎄", result)
				this.setState({sortedTitles: this.generateUniqueTitles(result)})
				console.log("✨", this.locationsByTitle(this.state.sortedTitles))
			})
			.catch(err => console.log('❗️ Check All Titles Component',err))
	}

	generateUniqueTitles(titleList){
		var uniqueTitles = {}
		titleList.forEach(film => {
			if (uniqueTitles[film.title] === undefined){
				uniqueTitles[film.title] = true
			}
		})

		let sortedTitles = Object.keys(uniqueTitles).sort()
		return sortedTitles
	}

	componentWillMount() {
		this.loadTitles();
	}

	locationsByTitle(titleLocList) {
		titleLocList.forEach((title, index) => {
			let newURI = APItourbytitle + title.trim()
			fetch(newURI)
				.then(res => res.json())
				.then(result => {
					// console.log("🐶", result)
				})
				.catch(err => console.log("Check Titles name💥", title, err))
		})
	}

	render(){
		let lis = this.state.sortedTitles.map(title => {
			return <li key={title} >
			<a href={`/AllTitles/${title}`}> {title}</a>
			</li>
		})

		return (
			<div className="App-Component-Titles-Route-Container">
			<h1>Tour By Title</h1>

				<ol>
					{lis}
				</ol>
			</div>
		)
	}
}


export default AllTitlesList;
