import React, { Component } from 'react';
const APIroot = '/';

class Welcome extends Component {
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
                <h1 id="welcome-wwtf">San Francisco has over 1000 film locations</h1>
                <h4>Locate where scenes from your favorite films and television series were shot in the foggy city by the bay. Browse the locations by title or actor and tweet us or tag us in your ig photos at @WhereWasThatFilmed with the hashtag #WWTF to share your recreation of iconic cinematic moments!</h4>

            </div>
        )
    }
}
export default Welcome;