import React, {Component} from 'react';
import { withRouter } from 'react-router-dom';
import JwPagination from 'jw-react-pagination';
const APItitle = '/API/AllTitles/'
const APItourbytitle = '/API/AllTitles/'


class AllTitlesList extends Component {
	constructor(props) {
		super(props);

		this.onChangePage = this.onChangePage.bind(this);


		this.state = {
			titles: [],
			sortedTitles: [],
			pageOfItems: []
		}
	  }

	loadTitles(){
		console.log("Calling: ", APItitle)
		fetch (APItitle)
			.then(res => res.json())
			.then(result => {
				this.setState({titles:result})
				// console.log("🎄", result)
				this.setState({sortedTitles: this.generateUniqueTitles(result)})
				// console.log("✨", this.generateUniqueTitles(result))
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

	onChangePage(pageOfItems){
		this.setState({pageOfItems})
	}


	render(){
		// let lis = this.state.sortedTitles.map(title => {
		// 	let encodedTitle = encodeURIComponent(title)
		// 	// console.log('🌹',title, encodedTitle)
		// 	return <li key={encodedTitle} >
		// 	<a href={`/AllTitles/${encodedTitle}`}> {title}</a>
		// 	</li>
		// })
//console.log(this.state.sortedTitles)
console.log("????????",this.props.match.isExact)
let showColumn = (this.props.match.isExact === true) ? "col-6" : ""
		return (
		<div className={"App-Component-Titles-Route-Container " + showColumn}>
			<div className="Component-Titles">
				<h1>Location By Title</h1>

				{this.state.pageOfItems.map((item,key) =>
					<div key={key}> <a href={`/AllTitles/${encodeURIComponent(item)}`}>{item} </a></div>
				)}
				<JwPagination items={this.state.sortedTitles} onChangePage={this.onChangePage} />
			</div>
		  </div>
		)
	}
}



export default withRouter(AllTitlesList);
