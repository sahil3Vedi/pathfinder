import React from "react";

// component that renders map, and displays additional info about time and distance
class RouteDetails extends React.Component {

  constructor(props) {
    super(props);
    
    this.state = {
      // extracting current route by id parameter that is in the url
      route: JSON.parse(localStorage.getItem("routes")).filter(route => {
        return route.id === this.props.match.params.id;
      })[0],
      time: "",
      distance: "",
      error: null,
    };
  }

  componentDidMount() {

    // when the component is mounter, it will initialize google map with following data
    // these functions created by the documentation example reference:
    // https://developers.google.com/maps/documentation/javascript/examples/directions-simple
    
    // using arrow functions to keep 'this' binding
    var calculateAndDisplayRoute = (directionsService, directionsDisplay) => {
      directionsService.route(
        {
          origin: this.state.route.origin,
          destination: this.state.route.destination,
          travelMode: "DRIVING",
        },
        (response, status) => {
          if (status === "OK") {
            directionsDisplay.setDirections(response);
            this.setState({
              time: response.routes[0].legs[0].duration.text,
              distance: response.routes[0].legs[0].distance.text,
            });
          } else {
            // generating error to display if the data is invalid
            switch (status) {
              case "NOT_FOUND":
                this.setState({ error: "Invalid route parameters, check out your locations!" });
                break;
              case "ZERO_RESULTS":
                this.setState({ error: "No route found!" });
                break;
              default:
                this.setState({ error: "Error!" });
            }
          }
        }
      );
    };

    (function initMap() {
      var directionsService = new google.maps.DirectionsService();
      var directionsDisplay = new google.maps.DirectionsRenderer();
      var map = new google.maps.Map(document.getElementById("map"), {
        zoom: 7,
        center: { lat: 44.7866, lng: 20.4489 },
      });
      directionsDisplay.setMap(map);
      calculateAndDisplayRoute(directionsService, directionsDisplay);
    })();
  }

  // this component will render things conditionaly:
  // if error is found, it will not render the map, just the error message
  render() {
    return this.state.error ? (
      <h3 className="title is-3 error-message">{this.state.error}</h3>
    ) : (
      <div>
        <div className="level">
          <div className="level-item has-text-centered">
            <div>
              <p className="heading">Route</p>
              <p className="title">
                {this.state.route.origin} - {this.state.route.destination}
              </p>
            </div>
          </div>

          <div className="level-item has-text-centered">
            <div>
              <p className="heading">Total Distance</p>
              <p className="title">{this.state.distance}</p>
            </div>
          </div>

          <div className="level-item has-text-centered">
            <div>
              <p className="heading">Estimated Driving Time:</p>
              <p className="title">{this.state.time}</p>
            </div>
          </div>
        </div>
        <div id="map" />
      </div>
    );
  }
}

export default RouteDetails;
