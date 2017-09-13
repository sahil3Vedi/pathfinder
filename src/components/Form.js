import React from "react";
import { generateID } from "../helpers";

// form for inputing the routes
export default class Form extends React.Component {

  // this is the function that handles submiting the form
  // it extracts values from input fields and creates an object
  // that represents a route with id, origin and destination
  handleSubmit(e) {
    e.preventDefault();
    var origin = document.getElementById("origin").value;
    var destination = document.getElementById("destination").value;

    var route = {
      origin,
      destination,
      id: generateID(),
    };

    // when the object is created it is passed in addRoute action creator
    // which is passed via props from LandingPage container
    
    // this will update the state in the redux store
    this.props.addRoute(route);
  }
  render() {
    return (
      <form
        onSubmit={this.handleSubmit.bind(this)}
        id="form"
        className="field has-addons"
      >
        <p className="control">
          <input
            required
            id="origin"
            className="input"
            type="text"
            placeholder="From"
            name="origin"
          />
        </p>
        <p className="control">
          <input
            required
            id="destination"
            className="input"
            type="text"
            placeholder="To"
            name="destination"
          />
        </p>
        <p className="control">
          <button className="button is-black">Go</button>
        </p>
      </form>
    );
  }
}
