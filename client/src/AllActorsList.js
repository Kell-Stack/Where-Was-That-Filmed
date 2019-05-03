import React from 'react';

const dbData = '/Actors';

class AllActorsList extends React.Component {
    constructor() {
		super();
	}

	loadActors (){
		fetch (dbData, {
			headers: {"content-type": "application/json"}
		})
		.then(resp => {
			if (!resp.ok) {
			  if (resp.status >= 400 && resp.status < 500) {
				return resp.json().then(data => {
				  let err = {
					errorMessage: data.message
				  };
				  throw err;
				});
			  } else {
				let err = {
				  errorrMessage: "Error FETCHING from database"
				};
				throw err;
			  }
			}
			// return resp.json();
		  })
		  .then(actList => this.setState({
			actList
		  }));
	  }

	  componentWillMount() {
		this.loadActors();
	}


	render(){
		console.log('frommmmm actors component file')
		return (
			<div >
				<h1>Hello Actors</h1>
			</div>
		)
	}
}





export default AllActorsList;