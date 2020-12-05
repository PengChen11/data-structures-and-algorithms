'use strict';

class Vertex {
  constructor(value){
    this.value = value;
  }
}

class Edge {
  constructor(toVertex, weight){
    this.toVertex = toVertex;
    this.weight = weight;
  }
}

class Graph {
  constructor () {
    this.adjacencyList = new Map();
  }

  addVertex (value){
    const vertex = new Vertex(value);
    this.adjacencyList.set(vertex, []);
    return vertex;
  }

  addEdge (start, end, weight=1){
    function handleError(message){
      throw new Error(message);
    }

    !start && handleError('Starting vertex not provided');

    !end && handleError('Ending vertex not provided');

    !this.adjacencyList.has(start) && handleError('Starting vertex does not exsit in Graph');

    !this.adjacencyList.has(end) && handleError('Ending vertex does not exsit in Graph');

    let startVertexEdge = new Edge(end, weight);
    this.adjacencyList.get(start).push(startVertexEdge);

    let endVertexEdge = new Edge(start, weight);
    this.adjacencyList.get(end).push(endVertexEdge);

  }

  getVertices(){
    return [...this.adjacencyList.keys()];
  }

  getNeighbors(vertex){
    return this.adjacencyList.get(vertex);
  }

  size(){
    return this.adjacencyList.size;
  }
}

module.exports = {Graph, Vertex, Edge};
