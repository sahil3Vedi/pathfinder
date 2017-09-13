import React from "react";

import Route from "./Route";

// component that displays all the routes
// rendered as a table where each row represent a route component
class Routes extends React.Component {
  renderRoutes() {
    return this.props.routes.map(route => {
      return (
        <Route
          key={route.id}
          route={route}
          removeRoute={this.props.removeRoute}
        />
      );
    });
  }

  render() {
    return (
      <table id="routes" className="table">
        <thead>
          <tr>
            <th>From:</th>
            <th>To:</th>
            <th />
          </tr>
        </thead>
        <tbody>{this.renderRoutes()}</tbody>
      </table>
    );
  }
}

export default Routes;
