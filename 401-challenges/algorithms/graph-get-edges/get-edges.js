'use strict';

function getEdges (inputArr, graph){
  let cost = 0;
  let startCity = inputArr[0];
  const graphMap = graph.getVertices();

  //check whether the start city is legit
  let startCityVertex;
  for (let cityVertex of graphMap){
    if (cityVertex.value === startCity) {
      startCityVertex = cityVertex;
      break;
    }
  }
  // if start city does not exsit in our graph, return false
  if (!startCityVertex) {
    return [false, '$0'];
  }

  //get edges of the current city
  let currentCityEdges = graph.getNeighbors(startCityVertex);

  // loop through the given city names array, make sure check every one in the graph to find the path
  for (let destinationCity of inputArr){
    if (destinationCity === startCity) continue;

    let foundTracker = false;
    for (let destinationCityVertex of currentCityEdges) {

      if (destinationCityVertex.toVertex.value === destinationCity){
        cost += destinationCityVertex.weight;
        foundTracker=true;

        // update current city
        currentCityEdges = graph.getNeighbors(destinationCityVertex.toVertex);
        break;
      }
    }
    if (!foundTracker) return [false, '$0'];
  }

  return [true, `$${cost}`];
}

module.exports = getEdges;
