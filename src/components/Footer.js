import React from "react";

// just the footer of the page
export default class Footer extends React.Component {
  render() {
    return (
      <footer className="footer">
        <div className="container">
          <div className="content has-text-centered">
            <p>
              <a
                className="icon"
                href="https://github.com/alan2207/pathfinder"
                target="_blank"
              >
                Repository
              </a>
            </p>
            <p>Created by <a href="https://github.com/alan2207" target="_blank">alan2207</a></p>
          </div>
        </div>
      </footer>
    );
  }
}
