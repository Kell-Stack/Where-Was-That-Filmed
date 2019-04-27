import React from 'react';

class AllTitlesList extends React.Component {

	loadAll() {
		fetch(API, {
			headers: {
			  "content-type": "application/json"
			}
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
				  errorrMessage: "Error FETCHING and parsing data 📥"
				};
				throw err;
			  }
			}
		  return resp.json();
		  })

		  .then(allInfo => {
			this.setState({
			  allInfo: allInfo
			})
		  });
	  }

	  componentDidMount() {
		this.loadAll();
	  }

	render(){
		return (

export default AllTitlesList;