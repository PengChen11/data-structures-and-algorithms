'use strict';

const {Graph, Vertex} = require('./graph.js');

// let testGraph = new Graph();

it ('testing for adding vertex',()=>{
  let testGraph = new Graph();
  const vertex1 = testGraph.addVertex(1);
  expect(vertex1.value).toBe(1);

  const vertex1Inside = testGraph.adjacencyList.get(vertex1);
  expect(vertex1Inside).toStrictEqual([]);
});


it ('testing for adding Edge',()=>{
  let testGraph = new Graph();
  const vertex1 = testGraph.addVertex(1);
  const vertex2 = testGraph.addVertex(2);

  testGraph.addEdge(vertex1,vertex2,3);

  const vertex1Edges = testGraph.adjacencyList.get(vertex1);
  const vertex2Edges = testGraph.adjacencyList.get(vertex2);
  expect(vertex1Edges[0].toVertex.value).toBe(2);
  expect(vertex2Edges[0].toVertex.value).toBe(1);

});


it ('testing for gettig all Vertices',()=>{
  let testGraph = new Graph();
  const vertex1 = testGraph.addVertex(1);
  const vertex2 = testGraph.addVertex(2);

  const vertexList = testGraph.getVertices();
  expect(vertexList.includes(vertex1)).toBeTruthy();
  expect(vertexList.includes(vertex2)).toBeTruthy();
});


it ('testing for get neighbors of a vertex',()=>{
  let testGraph = new Graph();
  const vertex1 = testGraph.addVertex(1);
  const vertex2 = testGraph.addVertex(2);
  const vertex3 = testGraph.addVertex(3);

  testGraph.addEdge(vertex1,vertex2,1);
  testGraph.addEdge(vertex1,vertex3,2);

  const vertex1Neighbors = testGraph.getNeighbors(vertex1);

  expect(vertex1Neighbors.length).toBe(2);
  expect(vertex1Neighbors[0].toVertex.value).toBe(2);
  expect(vertex1Neighbors[1].toVertex.value).toBe(3);
});


it ('testing error handler functioni for add endges', ()=>{
  let testGraph = new Graph();
  const vertex1 = testGraph.addVertex(1);
  const vertex2 = new Vertex(2);

  expect(()=>{testGraph.addEdge();}).toThrow('Starting vertex not provided');

  expect(()=>{testGraph.addEdge(vertex1);}).toThrow('Ending vertex not provided');

  expect(()=>{testGraph.addEdge(vertex2,vertex1);}).toThrow('Starting vertex does not exsit in Graph');

  expect(()=>{testGraph.addEdge(vertex1,vertex2);}).toThrow('Ending vertex does not exsit in Graph');
});


it ('testing to return how many vertices in this graph', ()=>{
  let testGraph = new Graph();
  testGraph.addVertex(1);
  testGraph.addVertex(2);
  testGraph.addVertex(3);

  expect(testGraph.size()).toBe(3);
});
