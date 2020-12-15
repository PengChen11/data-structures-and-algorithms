'use strict';

const Graph = require('../../data_structures/graph/graph.js').Graph;
const {depthFirst, depthFirstV2} = require('./depth-first.js');

test('testing', ()=>{

  const testGraph = new Graph();
  const vertexA= testGraph.addVertex('A');
  const vertexB = testGraph.addVertex('B');
  const vertexC= testGraph.addVertex('C');
  const vertexD= testGraph.addVertex('D');
  const vertexE= testGraph.addVertex('E');
  const vertexF= testGraph.addVertex('F');
  const vertexG= testGraph.addVertex('G');
  const vertexH= testGraph.addVertex('H');


  testGraph.addEdge(vertexA, vertexB);
  testGraph.addEdge(vertexB, vertexC);
  testGraph.addEdge(vertexC, vertexG);
  testGraph.addEdge(vertexA, vertexD);
  testGraph.addEdge(vertexB, vertexD);
  testGraph.addEdge(vertexD, vertexE);
  testGraph.addEdge(vertexD, vertexH);
  testGraph.addEdge(vertexD, vertexF);
  testGraph.addEdge(vertexH, vertexF);

  const result = depthFirst(testGraph, vertexA);
  const toArr = [];
  result.forEach(vertex=>toArr.push(vertex.value));
  expect(toArr).toStrictEqual(['A', 'B', 'C', 'G', 'D', 'E', 'H', 'F']);
  const resultV2 = depthFirstV2(testGraph, vertexA);
  expect(result).toStrictEqual(resultV2);

});



