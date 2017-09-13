
// function that generates unique ID for each route
// source https://gist.github.com/gordonbrander/2230317
// added unix timestamp to it, just in case, to avoid ID collision
export function generateID() {
  return '_' + Math.random().toString(36).substr(2, 9) + Date.now();
};