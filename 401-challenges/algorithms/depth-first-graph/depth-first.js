'use Strict';

// func using recursion. Much easier to understand
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

// non-recursive solution.
function depthFirstV2(graph, startVertex){

  const visitedVertices = new Set();

  visitedVertices.add(startVertex);

  const stack = [];

  stack.push(startVertex);

  while (stack.length > 0){

    const currentVertex = stack[stack.length-1];

    const neighborsEdge = graph.getNeighbors(currentVertex);
    if (neighborsEdge.length===1) {
      stack.pop();
      continue;
    }
    let allNeighborsAreVisited = true;
    for (let neighborEdge of neighborsEdge){
      const neighbor = neighborEdge.toVertex;
      if (!visitedVertices.has(neighbor)){
        visitedVertices.add(neighbor);
        stack.push(neighbor);
        allNeighborsAreVisited = false;
        break;
      }
    }
    if (allNeighborsAreVisited) stack.pop();

  }

  return visitedVertices;
}

module.exports = {depthFirst, depthFirstV2};
