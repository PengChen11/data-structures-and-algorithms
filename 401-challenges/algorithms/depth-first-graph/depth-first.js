'use Strict';

function depthFirst ( graph, startVertex){

  const visitedVertices = new Set();

  visitedVertices.add(startVertex);

  function traverse(graph, vertax){
    const neighbors = graph.getNeighbors(vertax);
    if (!neighbors.length) return;

    for (let neighbor of neighbors) {
      const neighborVertex = neighbor.toVertex;
      if (!visitedVertices.has(neighborVertex)){
        visitedVertices.add(neighborVertex);
        traverse(graph, neighborVertex);
      }
    }
  }

  traverse(graph, startVertex);

  return visitedVertices;
}

module.exports = depthFirst;
