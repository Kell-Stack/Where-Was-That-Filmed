import React from 'react';
// import data from '~/Dev/WWTF/data/sffilmdata.csv';
// import MapContainer from './MapContainer.js';
const APItitles = '/AllTitles'

class AllTitlesList extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			titles: []
		}
	  }

	loadTitles(){
		console.log("Calling: ", APItitles)
		fetch (APItitles)
			.then(res => res.json())
			.then(result => {
				this.setState({titles:result})
				console.log("🎄", result)

			})
			.catch(err => console.log('❗️ Check All Titles Component',err))
	}

	componentWillMount() {
		this.loadTitles();
	}

	render(){
		let lis = this.state.titles.map(title => {
			return <li>{title}</li>
		})

		return (
			<div className="App-Component-Titles-Route-Container">
			<h1>Tour By Actor</h1>

				<ol>
					{lis}
				</ol>
			</div>
		)
	}
}


export default AllTitlesList;
