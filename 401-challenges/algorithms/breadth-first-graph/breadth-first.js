'use Strict';
const Gra = require('../../data_structures/graph/graph.js').Graph;
const {Queue} = require('../../data_structures/stacksAndQueues/stacks-and-queues.js');

class Graph extends Gra {

  constructor(){
    super();
  }

  breadthFirst(startVertex){

    const queue = new Queue();
    const visitedVertices = new Set();
    queue.enqueue(startVertex);
    visitedVertices.add(startVertex);

    while(!queue.isEmpty()){

      const currentVertex = queue.dequeue();
      const neighbors = this.getNeighbors(currentVertex);

      for (let neighbor of neighbors){
        const neighborVertex = neighbor.toVertex;

        if (visitedVertices.has(neighborVertex)){
          continue;
        } else {
          visitedVertices.add(neighborVertex);
        }
        queue.enqueue(neighborVertex);
      }
    }
    return visitedVertices;
  }
}

module.exports = Graph;
