import React from 'react';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import client from './AllTitlesList';

import AllActorsList from './AllActorsList';

//SEARCH ACTORS

// window.onload = function () {

//     let actors = client.query('SELECT id, locations FROM media;')
//     var currentActors = actors

//     var ul = document.getElementById("actors")

//     /* event listener */
//     document.getElementById("SearchBox").addEventListener('input', onInput);

//     setActors()

//     function setActors() {
//     	ul.innerHTML = '';

//     	for (var actorIndex in currentActors) {
//           var li = document.createElement("li")
//           li.textContent = currentActors[actorIndex]
//           ul.appendChild(li)
//       }
//     }

//     function onInput(){
//     	 currentActors = actors.filter((actor) =>{
//        		//return actor.toLowerCase().startsWith(this.value.toLowerCase())
//        		return actor.toLowerCase().indexOf(this.value.toLowerCase()) !!= -1
//        })
//        setActors()
//     }

// }


class SearchBox extends React.Component {
  render() {
    return (
      <Form inline>
        <FormGroup>
          <Label for="searchBox" hidden>Search</Label>
          <Input type="" name="" id="" placeholder="" />
        </FormGroup>
        {' '}
        <Button>Submit</Button>
      </Form>
    );
  }
}

export default SearchBox;