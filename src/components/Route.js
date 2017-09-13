import React from "react";

import { Link } from "react-router-dom";

// route component created for each route
class Route extends React.Component {
  render() {
    return (
      <tr>
        <td>{this.props.route.origin}</td>
        <td>{this.props.route.destination}</td>
        <td>
          <Link to={"/route/" + this.props.route.id}>
            <button className="button is-small is-link">Details</button>
          </Link>
          <button
            onClick={() => this.props.removeRoute(this.props.route.id)}
            className="button is-small is-danger"
          >
            X
          </button>
        </td>
      </tr>
    );
  }
}

export default Route;
