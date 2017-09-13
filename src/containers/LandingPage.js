import React from "react";
import { connect } from "react-redux";

import * as actions from "../actions";

import Form from "../components/Form";
import Routes from "../components/Routes";

// this is the landing page container
// it is the only ui component that is aware of redux state in the store
class LandingPage extends React.Component {

  // whenever it is updated, it also updates localStorage entry
  componentDidUpdate() {
    localStorage.setItem("routes", JSON.stringify(this.props.routes));
  }

  render() {
    return (
      <div id="landing">
        <Form addRoute={this.props.addRoute} />
        <h3 id="route-list-heading" className="title is-3">Recent Routes:</h3>
        {/* Routes component will be rendered only if routes count in the state is greater than 0 - by using short-circuiting */}
        {this.props.routes.length > 0 && (
          <Routes
            routes={this.props.routes}
            removeRoute={this.props.removeRoute}
          />
        )}
      </div>
    );
  }
}

// using routes from redux store
function mapStateToProps(state) {
  return {
    routes: state.routes,
  };
}

// connecting to redux store, and action creators
export default connect(mapStateToProps, actions)(LandingPage);
