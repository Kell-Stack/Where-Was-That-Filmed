import React from 'react';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
// SEARCH ACTORS

//   const searchInput = () => {

//     let actors = client.query('SELECT id, locations FROM media;')
//     var currentActors = actors

//     var ul = document.getElementById("actors")


//     setActors()

//     function setActors() {
//     	ul.innerHTML = '';

//     	for (var actorIndex in currentActors) {
//           var li = document.createElement("li")
//           li.textContent = currentActors[actorIndex]
//           ul.appendChild(li)
//       }
//     }

// }

// if searchActors doesn't return a query, then i want to searchTitles
//

// const inputQuery = () => {
// }

class SearchBox extends React.Component {
  constructor(props) {
    super(props);
      this.state = {
        onInput: []
      }
      this.search=this.search.bind(this)

  }
  // componentDidMount () {
  //    /* event listener */
  //    document.getElementById("SearchBox").addEventListener('input', onInput);

  // }

  // onInput () {
  //   currentActors = actors.filter((actor) =>{
  //       //return actor.toLowerCase().startsWith(this.value.toLowerCase())
  //       return actor.toLowerCase().indexOf(this.value.toLowerCase()) !!= -1
  //   })
  //   setActors()
// }
  search(e) {

    var userInput = this.state.query
    console.log("🆒", userInput)
    let encodeInput = encodeURI(userInput)
    console.log("⏫",encodeInput)

    window.location.pathname = "/search/" + encodeInput

  }
  render() {
    return (
      <Form inline>
        <FormGroup>
          <Label for="searchBox" hidden>Search</Label>
          <Input type="" name="" id="SearchBox" placeholder=""  onChange={event => {this.setState({query:event.target.value})
          console.log("jsfjdfgevfas flbwlubcwbasjdhbjc",event.target.value)}}

                                                                      onKeyPress={event => {
                                                                        console.log("helololol,",event.key)
                                                                        if (event.key === "Enter") {
                                                                          event.preventDefault();
                                                                          this.search ()
                                                                        }}}/>
        </FormGroup>
        {' '}
        <Button onClick={this.search}>Search</Button>
      </Form>
    );
  }
}

export default SearchBox;
