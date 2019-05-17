import React, { Component } from 'react';
const APIroot = '/';

class Welcome extends Component {
    constructor(props) {
        super(props);
    }

    loadWelcome(){
        fetch (APIroot)
        .then(res => res.json())
        .catch(err => console.log('❗️❗️❗️ Check welcome page',err))
    }

    componentWillMount() {
		this.loadWelcome();
	}

    render () {
        return(
            <div>
                <h3>Welcome to</h3>
                <h1 id="welcome-wwtf">Where Was That Filmed?</h1>
                <h3>Locate where scenes from your favorite films and television series were shot in beautiful San Francisco. Browse all the locations and tweet us or tag us in your ig photos at @WhereWasThatFilmed with the hashtag #WWTF to share your recreation of iconic cinematic moments!</h3>
            </div>
        )
    }
}
export default Welcome;