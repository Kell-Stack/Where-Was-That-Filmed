import React from 'react';
// import data from '~/Dev/WWTF/data/sffilmdata.csv';
// import MapContainer from './MapContainer.js';

class AllTitlesList extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			actors: []
		}
	  }

	render(){
		return (
			<div className="App-Component-Titles-Route-Container">
				<aside class="aside aside-1">
					<h1>Hello Titles</h1>
				</aside>
			</div>
		)
	}
}

export default AllTitlesList;
