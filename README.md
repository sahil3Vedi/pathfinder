# Pathfinder

App for finding and storing routes in localStorage, built with React, Redux and Google Maps API.

### User Stories:
* The app has 2 pages
* Landing page which contains form for inputing routes, and list of recent routes.
* Details page, where the user can see the map with directions, distance and estimated traveling time.
* The user is able to add, and remove routes.
* All routes are saved in browser's localStorage.
* The app uses Google Maps API to generate routes.


### Technologies Used:
* React
* Redux
* React-Router
* Redux Thunk
* Webpack
* Babel
* Bulma
* Google Maps API



## Usage:

You can check out the [demo](http://react-pathfinder.surge.sh/).

Or if you would rather install it on your own machine, tweak it, or whatever, you can do that by entering following commands in the terminal:

Clone the repository:
```
git clone https://github.com/alan2207/pathfinder.git
```

Enter in the cloned folder:
```
cd pathfinder
```

Install all dependencies:
```
npm install
```

Start the app on localhost:8080:
```
npm start
```


## Folder Structure Of The Project:

```
|-- src
|   |-- actions
|   |   `-- index.js // all action creators
|   |   `-- types.js // action types
|   |-- components 
|   |   `-- App.js // root component that renders all other  components
|   |   `-- Footer.js 
|   |   `-- Form.js // form for entering routes
|   |   `-- Header.js
|   |   `-- Route.js // individual route component
|   |   `-- RouteDetails.js // renders the map and details about the route
|   |   `-- Routes.js // groups together multiple Route components
|   |-- containers 
|   |   `-- LandingPage.js // only component that is aware of the app state
|   |-- reducers
|   |   `-- index.js    // combining of all reducers happen here
|   |   `-- routesReducer.js // reducer for routes
|   |-- styles  // styles for the app
|   |   `-- style.css
|   `-- helpers.js  // helper functions
|   `-- index.html  // main html file
|   `-- index.js    // main js file
`-- .babelrc
`-- .gitignore
`-- package-lock.json
`-- package.json
`-- README.md
`-- webpack.config.js
```